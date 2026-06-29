import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function RecentProjects() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="section relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow">
            Portfolio
          </div>

          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-heading">
            Featured Projects
          </h2>

          <p className="mt-4 text-body leading-relaxed">
            A selection of enterprise platforms, analytics systems, and
            digital solutions we've delivered.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="
              inline-flex
              items-center
              gap-2
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-[#1565C0]
              to-[#00ACC1]
              text-white
              font-semibold
              shadow-lg
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              group
            "
          >
            View Full Portfolio

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index }) {
  if (!project) return null;

  const Icon = project.icon;
  const reverse = index % 2 !== 0;

  return (
    <div
      className="
        group
        grid
        lg:grid-cols-2
        gap-8
        items-center
        rounded-[32px]
        p-6
        md:p-8
        bg-white/95 
        border
        border-slate-100
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
        transform-gpu
      "
    >
      {/* Visual */}
      <div
        className={`
          relative
          h-[280px]
          md:h-[340px]
          rounded-3xl
          overflow-hidden
          bg-gradient-to-br
          ${project.gradient || "from-[#1565C0] to-[#00ACC1]"}
          ${reverse ? "lg:order-2" : ""}
        `}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {Icon && (
            <Icon
              size={110}
              strokeWidth={1.4}
              className="text-white/90"
            />
          )}
        </div>

        <div className="absolute top-5 left-5">
          <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
            {project.category}
          </div>
        </div>

        <div className="absolute bottom-5 right-5 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md text-white text-sm">
          Case Study
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="eyebrow">
          Featured Project
        </div>

        <h3 className="mt-3 text-2xl md:text-4xl font-bold text-heading">
          {project.title}
        </h3>

        <p className="mt-5 text-body leading-relaxed">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-slate-100
                text-slate-700
                text-xs
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results */}
        {project.results && (
          <div className="mt-8 grid grid-cols-3 gap-4">
            {project.results.slice(0, 3).map((result) => (
              <div key={result.label}>
                <div className="text-2xl font-bold text-heading">
                  {result.num}
                </div>

                <div className="text-xs text-muted mt-1">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Link */}
        <div className="mt-8">
          <Link
            href={`/portfolio/${project.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              text-[#1565C0]
              font-semibold
              hover:text-[#00ACC1]
              transition-colors
            "
          >
            View Case Study

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}