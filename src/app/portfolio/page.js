"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import { PROJECTS } from "@/data/projects";

const filters = [
  "All",
  "Enterprise",
  "EdTech",
  "GovTech",
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const shownProjects =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === active);

  return (
    <>
      <PageHeader
        crumb="Portfolio"
        title="Our Work"
        subtitle="A selection of enterprise platforms, mobile applications, and automated workflows we've delivered across industries."
      />

      {/* Floating Glassmorphism Filter Bar */}
      <section className="relative z-20 -mt-8 mb-8">
        <div className="container-x">
          <div className="flex gap-2 p-1.5 mx-auto w-fit max-w-full overflow-x-auto bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-full no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300
                  ${
                    active === filter
                      ? "bg-navy text-white shadow-md scale-100"
                      : "text-body hover:bg-white hover:text-navy scale-95 hover:scale-100"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section (Background removed to let global gradient show) */}
      <section className="section relative overflow-hidden pt-4 md:pt-8">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {shownProjects.map((project) => {
            const Icon = project.icon;

            return (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="
                  group 
                  relative 
                  flex 
                  flex-col 
                  rounded-3xl 
                  bg-white/70 
                  backdrop-blur-xl 
                  border 
                  border-white/60 
                  shadow-sm 
                  hover:shadow-2xl 
                  hover:-translate-y-2 
                  transition-all 
                  duration-500 
                  overflow-hidden
                "
              >
                {/* Abstract Glowing Header */}
                <div className="relative h-48 flex items-center justify-center overflow-hidden">
                  {/* Base color tint with hover intensity shift */}
                  <div
                    className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: project.color }}
                  />
                  
                  {/* Soft fade to white at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                  
                  {/* Floating Icon Container */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: project.color }}
                  >
                    <Icon size={40} strokeWidth={2} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-white/40 to-transparent">
                  {/* Category matches the project's brand color */}
                  <div 
                    className="eyebrow mb-3 font-bold" 
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-heading">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-body leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="pill bg-white/60 border-white/80 shadow-sm group-hover:border-brand/60 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link Area */}
                  <div className="mt-8 pt-6 border-t border-brand/40 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-blue transition-colors duration-300">
                      View Case Study
                      <ArrowRight 
                        size={16} 
                        className="group-hover:translate-x-1.5 transition-transform duration-300" 
                      />
                    </span>
                    
                    {/* Small visual accent matching the project color */}
                    <div 
                      className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}