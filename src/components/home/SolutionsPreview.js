import {
  UserCog,
  Search,
  Workflow,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function SolutionsPreview() {
  const solutions = [
    {
      icon: UserCog,
      title: "HR Management System",
      desc: "Manage employees, payroll, attendance, and policies in one centralized platform.",
    },
    {
      icon: Search,
      title: "Recruitment Platform",
      desc: "Streamline sourcing, screening, interviews, and hiring workflows effortlessly.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Automate approvals, notifications, and repetitive business processes.",
    },
    {
      icon: Building2,
      title: "YouTube Analytics Platform",
      desc: "Track trends, monitor competitors, and discover growth opportunities.",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow">
            Solutions
          </div>

          <h2 className="mt-3 text-3xl md:text-[40px] font-bold text-heading">
            Ready-Built Solutions
          </h2>

          <p className="mt-4 text-base text-body">
            Production-grade platforms designed to accelerate growth,
            improve efficiency, and scale with your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
             <div
  key={solution.title}
  className="
    group
    relative
    p-6
    rounded-2xl
    bg-white/75
    backdrop-blur-xl
    border
    border-white/60
    shadow-md
    hover:shadow-xl
    hover:-translate-y-1
    transition-all
    duration-300
    flex
    flex-col
    h-full
  "
>
  {/* Top Glow */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

  {/* Icon */}
  <div
    className="
      relative
      z-10
      w-11
      h-11
      rounded-xl
      flex
      items-center
      justify-center
      mb-4
      bg-gradient-to-r
      from-[#1565C0]
      to-[#00ACC1]
      text-white
      shadow-md
      group-hover:scale-105
      transition-transform
      duration-300
    "
  >
    <Icon size={20} />
  </div>

  {/* Title */}
  <h3 className="relative z-10 text-base font-bold text-heading">
    {solution.title}
  </h3>

  {/* Description */}
  <p
    className="
      relative
      z-10
      mt-2
      text-sm
      leading-6
      text-body
      flex-grow
    "
  >
    {solution.desc}
  </p>

  {/* Bottom Accent */}
  <div
    className="
      relative
      z-10
      mt-4
      w-10
      h-1
      rounded-full
      bg-gradient-to-r
      from-[#1565C0]
      to-[#00ACC1]
      transition-all
      duration-300
      group-hover:w-16
    "
  />
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}