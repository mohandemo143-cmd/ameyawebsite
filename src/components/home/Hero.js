"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// ==========================================
// 1. WEBGL SHADER SOURCES
// ==========================================

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  vec3 bgColor = vec3(0.01, 0.16, 0.42);
  vec3 rectColor = vec3(0.01, 0.26, 0.57);

  const float noiseIntensity = 2.8;
  const float noiseDefinition = 0.6;
  const vec2 glowPos = vec2(-2., 0.);

  const float total = 60.0;
  const float minSize = 0.03;
  const float maxSize = 0.08 - 0.03;
  const float yDistribution = 0.5;

  float random(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  float noise( in vec2 p ) {
      p *= noiseIntensity;
      vec2 i = floor( p );
      vec2 f = fract( p );
      vec2 u = f*f*(3.0-2.0*f);
      return mix( mix( random( i + vec2(0.0,0.0) ), random( i + vec2(1.0,0.0) ), u.x),
                  mix( random( i + vec2(0.0,1.0) ), random( i + vec2(1.0,1.0) ), u.x), u.y);
  }

  float fbm( in vec2 uv ) {
      uv *= 5.0;
      mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );
      float f  = 0.5000*noise( uv ); uv = m*uv;
      f += 0.2500*noise( uv ); uv = m*uv;
      f += 0.1250*noise( uv ); uv = m*uv;
      f += 0.0625*noise( uv ); uv = m*uv;
      f = 0.5 + 0.5*f;
      return f;
  }

  vec3 bg(vec2 uv ) {
      float velocity = iTime/1.6;
      float intensity = sin(uv.x*3.+velocity*2.)*1.1+1.5;
      uv.y -= 2.;
      vec2 bp = uv+glowPos;
      uv *= noiseDefinition;

      float rb = fbm(vec2(uv.x*.5-velocity*.03, uv.y))*.1;
      uv += rb;

      float rz = fbm(uv*.9+vec2(velocity*.35, 0.0));
      rz *= dot(bp*intensity,bp)+1.2;

      vec3 col = bgColor/(.1-rz);
      return sqrt(abs(col));
  }

  float rectangle(vec2 uv, vec2 pos, float width, float height, float blur) {
      pos = (vec2(width, height) + .01)/2. - abs(uv - pos);
      pos = smoothstep(0., blur , pos);
      return pos.x * pos.y; 
  }

  mat2 rotate2d(float _angle){
      return mat2(cos(_angle),-sin(_angle),
                  sin(_angle),cos(_angle));
  }

  void main() {
      vec2 fragCoord = gl_FragCoord.xy;
      vec2 uv = fragCoord.xy / iResolution.xy * 2. - 1.;
      uv.x *= iResolution.x/iResolution.y;
      
      vec3 color = bg(uv)*(2.-abs(uv.y*2.));
      
      float velX = -iTime/8.;
      float velY = iTime/10.;
      
      for(int i = 0; i < 60; i++){
          float fi = float(i);
          float index = fi/total;
          float rnd = random(vec2(index));
          vec3 pos = vec3(0.0, 0.0, 0.0);
          pos.x = fract(velX*rnd+index)*4.-2.0;
          pos.y = sin(index*rnd*1000.+velY) * yDistribution;
          pos.z = maxSize*rnd+minSize;
          
          vec2 uvRot = uv - pos.xy + pos.z/2.;
          uvRot = rotate2d( fi+iTime/2. ) * uvRot;
          uvRot += pos.xy+pos.z/2.;
          
          float rect = rectangle(uvRot, pos.xy, pos.z, pos.z, (maxSize+minSize-pos.z)/2.);
          color += rectColor * rect * pos.z/maxSize;
      }
      
      gl_FragColor = vec4(color, 1.0);
  }
`;

// ==========================================
// 2. CANVAS BACKGROUND COMPONENT
// ==========================================

function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Compile Shader
    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    // Create Program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Setup Buffers (Full screen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get Uniform Locations
    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");

    let animationFrameId;
    const startTime = performance.now();

    const render = () => {
      // Handle resizing
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      // Update uniforms
      const currentTime = (performance.now() - startTime) / 1000.0;
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(iTimeLocation, currentTime);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 block"
    />
  );
}

// ==========================================
// 3. MAIN HERO COMPONENT
// ==========================================

export default function Hero() {
  return (
    // Added justify-center to vertically center the content perfectly
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* WEBGL SHADER BACKGROUND */}
      <ShaderBackground />

      <div className="container-x relative z-10 w-full flex flex-col items-center justify-center text-center px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-semibold text-cyan-200 border border-white/20 mb-8 shadow-xl">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          IT Services &amp; Consulting — Hyderabad
        </div>

        {/* Heading */}
       {/* Heading */}
<h1 className="max-w-5xl font-extrabold leading-[1.05] tracking-tight text-center">
  <span className="block text-white text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_6px_25px_rgba(0,0,0,0.6)]">
    Ameya IT Solutions
  </span>

<p className="mt-7 text-base md:text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
        Custom Software Development for Modern Businesses
        </p>

 
</h1>

        

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
         <Link
  href="/services"
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl
  bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600
  px-8 py-3.5
  text-sm font-semibold text-white
  shadow-[0_10px_35px_rgba(14,165,233,0.35)]
  transition-all duration-300
  hover:-translate-y-1
  hover:scale-[1.03]
  hover:shadow-[0_18px_45px_rgba(14,165,233,0.55)]
  active:scale-95"
>
  {/* Animated Shine */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  {/* Glow Overlay */}
  <span className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

  {/* Content */}
  <span className="relative flex items-center gap-2">
    Our Services

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</Link>

      <Link
  href="/contact"
  className="group inline-flex items-center gap-2 rounded-xl
  border-2 border-white
  bg-transparent
  px-8 py-3.5
  text-sm font-semibold
  text-white
  transition-all duration-300
  hover:bg-white
  hover:text-slate-900
  hover:shadow-xl
  hover:scale-105"
>
  Contact Us

  <svg
    className="w-4 h-4 transition-transform group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</Link>
        </div>

      </div>
    </section>
  );
}