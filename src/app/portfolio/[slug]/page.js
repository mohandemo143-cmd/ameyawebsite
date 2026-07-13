import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { PROJECTS } from "@/data/projects";

// THIS IS THE NEW FUNCTION THAT FIXES S3 EXPORT
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Page header / breadcrumb */}
      <section className="py-14 bg-surface-alt border-b border-brand">
        <div className="container-x">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm mb-4 text-muted">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>

            <ChevronRight size={14} />

            <Link href="/portfolio" className="hover:text-navy transition-colors">
              Portfolio
            </Link>

            <ChevronRight size={14} />

            <span className="text-navy font-medium">{project.title}</span>
          </div>

          <span className="pill-teal">{project.category}</span>

          <h1 className="mt-3 text-4xl md:text-[42px] font-bold text-heading">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Case study body */}
      <section className="bg-surface py-16">
        <div className="mx-auto px-6" style={{ maxWidth: "800px" }}>
          <Block title="Challenge">
            <p>{project.challenge}</p>
          </Block>

          <Block title="Solution">
            <p>{project.solution}</p>
          </Block>

          <Block title="Key Features">
            <ol className="space-y-2 pl-5 list-decimal">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ol>
          </Block>

          <Block title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </Block>

          {/* <Block title="Results">
            <div className="grid sm:grid-cols-3 gap-4">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="bg-surface-alt text-center py-6 px-4 rounded-lg border border-brand"
                >
                  <div className="text-3xl font-bold text-navy">
                    {result.num}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </Block> */}

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Start a Similar Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-navy mb-3">{title}</h2>

      <div className="text-base leading-relaxed text-body">
        {children}
      </div>
    </div>
  );
}