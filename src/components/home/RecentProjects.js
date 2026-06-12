import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function RecentProjects() {
  return (
    <section
      className="section"
      style={{ background: "#F5F7FA" }}
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow">
            Portfolio
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px]">
            Recent Projects
          </h2>

          <p
            className="mt-3 text-base"
            style={{ color: "#6B7A8D" }}
          >
            A small selection of work delivered for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-lg overflow-hidden"
              style={{
                border: "1px solid #DDE6F0",
              }}
            >
              <div
                style={{
                  background: project.color,
                  height: 40,
                }}
              />

              <div className="p-6">
                <div className="eyebrow">
                  {project.category}
                </div>

                <h3 className="mt-2 text-base font-bold">
                  {project.title}
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "#6B7A8D" }}
                >
                  {project.desc}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#1565C0" }}
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}