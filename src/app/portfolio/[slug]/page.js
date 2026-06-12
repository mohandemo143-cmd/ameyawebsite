import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { PROJECTS } from "@/data/projects";

export default async function ProjectPage({
  params,
}) {
  const { slug } = await params;

  const project = PROJECTS.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <section
        className="py-14"
        style={{
          background: "#F5F7FA",
          borderBottom:
            "1px solid #DDE6F0",
        }}
      >
        <div className="container-x">
          <div
            className="flex items-center gap-1.5 text-sm mb-4"
            style={{
              color: "#6B7A8D",
            }}
          >
            <Link href="/">
              Home
            </Link>

            <ChevronRight size={14} />

            <Link href="/portfolio">
              Portfolio
            </Link>

            <ChevronRight size={14} />

            <span
              style={{
                color: "#0C2D55",
              }}
            >
              {project.title}
            </span>
          </div>

          <span className="pill-teal">
            {project.category}
          </span>

          <h1 className="mt-3 text-4xl md:text-[42px]">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div
          className="mx-auto px-6"
          style={{
            maxWidth: "800px",
          }}
        >
          <Block title="Challenge">
            <p>{project.challenge}</p>
          </Block>

          <Block title="Solution">
            <p>{project.solution}</p>
          </Block>

          <Block title="Key Features">
            <ol className="space-y-2 pl-5 list-decimal">
              {project.features.map(
                (feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                )
              )}
            </ol>
          </Block>

          <Block title="Tech Stack">
            <div className="flex flex-wrap gap-2">
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
          </Block>

          <Block title="Results">
            <div className="grid sm:grid-cols-3 gap-4">
              {project.results.map(
                (result) => (
                  <div
                    key={result.label}
                    className="bg-white text-center py-6 px-4"
                    style={{
                      border:
                        "1px solid #DDE6F0",
                      borderRadius:
                        "8px",
                    }}
                  >
                    <div
                      className="text-3xl font-bold"
                      style={{
                        color:
                          "#0C2D55",
                      }}
                    >
                      {result.num}
                    </div>

                    <div
                      className="mt-1 text-sm"
                      style={{
                        color:
                          "#6B7A8D",
                      }}
                    >
                      {result.label}
                    </div>
                  </div>
                )
              )}
            </div>
          </Block>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Start a Similar Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  title,
  children,
}) {
  return (
    <div className="mb-10">
      <h2
        className="text-xl mb-3"
        style={{
          color: "#0C2D55",
        }}
      >
        {title}
      </h2>

      <div
        className="text-base leading-relaxed"
        style={{
          color: "#333F4D",
        }}
      >
        {children}
      </div>
    </div>
  );
}