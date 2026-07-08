import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects"; // Adjust path if needed

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
          <div className="eyebrow">Portfolio</div>
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
          w-full
          aspect-[4/3]
          rounded-3xl
          overflow-hidden
          bg-slate-100
          ${reverse ? "lg:order-2" : ""}
        `}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradient || "from-[#1565C0] to-[#00ACC1]"}`}>
            {Icon && (
              <Icon size={110} strokeWidth={1.4} className="text-white/90" />
            )}
          </div>
        )}

        {/* Overlay Badges */}
        <div className="absolute top-5 left-5 z-10">
          <div className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
            {project.category}
          </div>
        </div>

        <div className="absolute bottom-5 right-5 z-10 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md text-white text-sm font-medium border border-white/10">
          Case Study
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="eyebrow">Featured Project</div>

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