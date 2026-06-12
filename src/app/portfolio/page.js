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
  const [active, setActive] =
    useState("All");

  const shownProjects =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) =>
            project.category === active
        );

  return (
    <>
      <PageHeader
        crumb="Portfolio"
        title="Our Work"
        subtitle="A selection of projects we've delivered for clients across industries."
      />

      {/* Filter */}

      <section
        className="bg-white border-b"
        style={{
          borderColor: "#DDE6F0",
        }}
      >
        <div className="container-x flex gap-6 py-4 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActive(filter)
              }
              className="relative pb-2 text-sm font-semibold whitespace-nowrap"
              style={{
                color:
                  active === filter
                    ? "#00ACC1"
                    : "#6B7A8D",
              }}
            >
              {filter}

              {active === filter && (
                <span
                  className="absolute left-0 right-0 -bottom-px h-0.5"
                  style={{
                    background:
                      "#00ACC1",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}

      <section className="section bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shownProjects.map((project) => {
            const Icon = project.icon;

            return (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="bg-white rounded-lg overflow-hidden block transition-all hover:-translate-y-1"
                style={{
                  border:
                    "1px solid #DDE6F0",
                }}
              >
                <div
                  style={{
                    background:
                      project.color,
                    height: "160px",
                  }}
                  className="flex items-center justify-center"
                >
                  <Icon
                    size={56}
                    color="rgba(255,255,255,0.9)"
                  />
                </div>

                <div className="p-6">
                  <div className="eyebrow">
                    {project.category}
                  </div>

                  <h3 className="mt-2 text-base font-bold">
                    {project.title}
                  </h3>

                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: "#6B7A8D",
                    }}
                  >
                    {project.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="pill"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{
                      color: "#1565C0",
                    }}
                  >
                    View Case Study

                    <ArrowRight
                      size={14}
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