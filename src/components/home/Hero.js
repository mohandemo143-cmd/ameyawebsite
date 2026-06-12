"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#F0F9FF" />
        </linearGradient>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#0C2D55" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.08" />
        </filter>
      </defs>

      <path
        d="M450,100 C550,150 500,300 400,350 C300,400 150,350 100,250 C50,150 150,50 250,50 C350,50 350,50 450,100 Z"
        fill="url(#bgGradient)"
        opacity="0.6"
        filter="blur(40px)"
      />

      <rect x="100" y="120" width="360" height="240" rx="16" fill="#ffffff" filter="url(#shadow)" />
      
      <path
        d="M100 136 C100 127.163 107.163 120 116 120 L444 120 C452.837 120 460 127.163 460 136 L460 160 L100 160 Z"
        fill="#F8FAFC"
      />
      <circle cx="124" cy="140" r="6" fill="#FF5F56" />
      <circle cx="144" cy="140" r="6" fill="#FFBD2E" />
      <circle cx="164" cy="140" r="6" fill="#27C93F" />
      <rect x="280" y="134" width="100" height="12" rx="6" fill="#E2E8F0" />

      <path
        d="M120 320 L120 260 C150 240 180 280 210 250 C240 220 270 260 300 230 C330 200 360 240 390 210 L440 210 L440 320 Z"
        fill="url(#accentGradient)"
        opacity="0.1"
      />
      <path
        d="M120 260 C150 240 180 280 210 250 C240 220 270 260 300 230 C330 200 360 240 390 210 L440 210"
        fill="none"
        stroke="url(#accentGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      <circle cx="210" cy="250" r="5" fill="#ffffff" stroke="#00ACC1" strokeWidth="3" />
      <circle cx="300" cy="230" r="5" fill="#ffffff" stroke="#1565C0" strokeWidth="3" />
      <circle cx="390" cy="210" r="5" fill="#ffffff" stroke="#0C2D55" strokeWidth="3" />

      <g filter="url(#shadow)">
        <rect x="40" y="80" width="140" height="80" rx="12" fill="#ffffff" />
        <circle cx="70" cy="110" r="16" fill="#E0F2FE" />
        <path
          d="M64 110 L68 114 L76 106"
          fill="none"
          stroke="#00ACC1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="96" y="100" width="60" height="8" rx="4" fill="#E2E8F0" />
        <rect x="96" y="116" width="40" height="6" rx="3" fill="#CBD5E1" />
      </g>

      <g filter="url(#shadow)">
        <rect x="380" y="300" width="160" height="100" rx="12" fill="#ffffff" />
        <rect x="400" y="320" width="80" height="10" rx="5" fill="#0C2D55" />
        <rect x="400" y="340" width="120" height="6" rx="3" fill="#E2E8F0" />
        <rect x="400" y="356" width="90" height="6" rx="3" fill="#E2E8F0" />
        <rect x="400" y="376" width="12" height="12" rx="2" fill="#00ACC1" />
        <rect x="420" y="368" width="12" height="20" rx="2" fill="#1565C0" />
        <rect x="440" y="380" width="12" height="8" rx="2" fill="#00ACC1" />
        <rect x="460" y="360" width="12" height="28" rx="2" fill="#0C2D55" />
      </g>

      <g filter="url(#shadow)">
        <rect x="420" y="60" width="120" height="120" rx="16" fill="#ffffff" />
        <circle cx="480" cy="120" r="36" fill="none" stroke="#F1F5F9" strokeWidth="8" />
        <circle
          cx="480"
          cy="120"
          r="36"
          fill="none"
          stroke="url(#primaryGradient)"
          strokeWidth="8"
          strokeDasharray="160 226"
          strokeLinecap="round"
          transform="rotate(-90 480 120)"
        />
        <text
          x="480"
          y="126"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#0C2D55"
        >
          72%
        </text>
      </g>

      <circle cx="80" cy="380" r="4" fill="#00ACC1" opacity="0.6" />
      <circle cx="120" cy="420" r="6" fill="#1565C0" opacity="0.4" />
      <path
        d="M80 380 L120 420"
        stroke="#00ACC1"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="4 4"
      />
      
      <circle cx="520" cy="240" r="5" fill="#0C2D55" opacity="0.5" />
      <circle cx="560" cy="200" r="3" fill="#1565C0" opacity="0.6" />
      <path
        d="M520 240 L560 200"
        stroke="#0C2D55"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default function Hero() {
  const backgroundImageUrl = "/66.png";
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef(null);

  // FIX 1: This checks if the browser already tried to load the image and failed 
  // before React had a chance to attach the onError event (fixes the refresh bug).
  useEffect(() => {
    if (imgRef.current) {
      // If the image tag is marked as "complete" but its natural width is 0, it means it's broken.
      if (imgRef.current.complete && imgRef.current.naturalWidth === 0) {
        setImgFailed(true);
      }
    }
  }, []);

  return (
    // Added the background color to the main section so there's no white flashes behind the image
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
      
      {/* Condition 1 & 2 (Mobile & Image Fail Layout) */}
      <div className={`w-full z-10 ${!imgFailed ? "md:hidden" : "block"}`}>
        <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-blue-700 border border-blue-200 mb-6 shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              IT Services & Consulting — Hyderabad
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Custom{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Software
              </span>{" "}
              Solutions for Growing Businesses
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
              We deliver custom software development, AI automation,
              SAP services, cloud solutions and enterprise applications
              that help businesses operate more efficiently and scale faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:scale-105 transition-all duration-300"
              >
                Our Services
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-md border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-800 hover:bg-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              {[
                ["100+", "Projects"],
                ["50+", "Clients"],
                ["8+", "Years"],
                ["99%", "Satisfaction"],
              ].map(([number, label], index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900">{number}</div>
                  <div className="text-sm text-slate-600 mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Fallback Illustration */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl p-4">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Condition 3 (Desktop Success Layout) */}
      <div className={`absolute inset-0 w-full h-full z-0 hidden ${!imgFailed ? "md:block" : "!hidden"}`}>
        <img
          ref={imgRef}
          src={backgroundImageUrl}
          alt="Clean Full Visibility Hero Background"
          onError={() => setImgFailed(true)}
          /* FIX 2: Changed from object-cover object-top to object-contain object-center so NO text is ever cut off */
          className="w-full h-full object-contain object-center m-0 p-0 block opacity-100"
        />
      </div>

    </section>
  );
}