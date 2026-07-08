"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      quote:
        "Delivered our medical eCommerce platform with exceptional quality, performance, and a seamless user experience.",
      role: "CEO",
      org: "Surgical World",
    },
    
    {
      quote:
        "Built a powerful YouTube analytics platform that gives us valuable insights and a competitive edge.",
      role: "Head of Operations",
      org: "Jaitra Media",
    },
    {
      quote:
        "A reliable technology partner providing prompt support and dependable solutions whenever we need them.",
      role: "CEO",
      org: "Orange Solutions Pvt. Ltd.",
    },
    {
      quote:
        "Designed and delivered a modern, professional website that perfectly represents our brand.",
      role: "CTO",
      org: "VETECH NDT & Metallurgical",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      
      // Dynamically calculate: card width + gap (gap-6 in Tailwind is 24px)
      // This ensures a perfect, fluid snap regardless of screen size
      const cardWidth = container.firstElementChild?.offsetWidth || 350;
      const scrollAmount = cardWidth + 24; 
      
      const targetScroll = direction === "left" ? -scrollAmount : scrollAmount;

      container.scrollBy({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section relative overflow-hidden py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container-x relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Testimonials
          </div>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-[40px]">
            What Clients Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by startups, enterprises, and organizations that rely on
            technology to grow faster and operate smarter.
          </p>
        </div>

        {/* Scrollable Track - Removed `scroll-smooth` to prevent stuttering */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.org}-${index}`}
              className="group relative flex h-auto w-[85vw] sm:w-[320px] lg:w-[350px] flex-none snap-center flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
            >
              {/* Quote Mark */}
              <div className="absolute right-6 top-4 text-7xl font-serif leading-none text-cyan-100">
                "
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#F5A623"
                    stroke="#F5A623"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-[15px] leading-6 text-slate-700 relative z-10">
                {testimonial.quote}
              </p>

              {/* Footer */}
              <div className="mt-5 border-t border-slate-200/60 pt-5 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#1565C0] to-[#00ACC1] text-base font-bold text-white shadow-md">
                    {testimonial.org
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  {/* Details */}
                  <div>
                    <h4 className="text-[15px] font-semibold text-slate-900 line-clamp-1">
                      {testimonial.role}
                    </h4>
                    <p className="mt-0.5 text-sm leading-tight text-slate-500 line-clamp-1">
                      {testimonial.org}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-400/5 group-hover:to-blue-500/5" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}