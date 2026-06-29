import Link from "next/link";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored applications built around your unique business processes. From discovery through deployment, we ship software that fits.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "from-blue-500/20 via-transparent to-indigo-600/20",
    bullets: [
      "Enterprise web applications",
      "Internal tools & dashboards",
      "API & microservices design",
      "Legacy system modernization",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, performant web applications with secure, scalable architectures and clean UX.",
    gradient: "from-emerald-400 to-teal-500",
    glow: "from-emerald-400/20 via-transparent to-teal-500/20",
    bullets: [
      "React & Next.js applications",
      "Headless CMS integrations",
      "Progressive web apps",
      "Performance & SEO optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that work reliably for real users.",
    gradient: "from-orange-400 to-rose-500",
    glow: "from-orange-400/20 via-transparent to-rose-500/20",
    bullets: [
      "iOS applications",
      "Android applications",
      "Flutter development",
      "App Store deployment",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Practical AI automation and ML models that solve real operational problems.",
    gradient: "from-purple-500 to-fuchsia-500",
    glow: "from-purple-500/20 via-transparent to-fuchsia-500/20",
    bullets: [
      "AI chatbots",
      "Document extraction",
      "Predictive analytics",
      "Computer vision",
    ],
  },
  {
    icon: Database,
    title: "SAP Services",
    description:
      "Enterprise-grade SAP integration, implementation, and continuous support for complex environments.",
    gradient: "from-cyan-400 to-blue-500",
    glow: "from-cyan-400/20 via-transparent to-blue-500/20",
    bullets: [
      "SAP CPI & CI-DS",
      "Enterprise Integration",
      "S/4HANA migrations",
      "Fiori Development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud migration, infrastructure, and DevOps across AWS, Azure, and GCP.",
    gradient: "from-sky-400 to-indigo-400",
    glow: "from-sky-400/20 via-transparent to-indigo-400/20",
    bullets: [
      "Cloud migration",
      "Kubernetes",
      "CI/CD pipelines",
      "Monitoring & optimization",
    ],
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understand goals and constraints" },
  { title: "Planning", desc: "Scope, timeline, and architecture" },
  { title: "Design", desc: "UX flows and system design" },
  { title: "Development", desc: "Iterative engineering sprints" },
  { title: "Testing", desc: "QA, security, and performance" },
  { title: "Deployment", desc: "Launch and support" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        title="Our Technology Services"
        subtitle="Senior engineering teams delivering end-to-end technology services to growing businesses."
      />

      {/* Services List - Upgraded to Glassmorphism Rows */}
      <section className="section relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-x max-w-5xl relative z-10">
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    group
                    relative
                    p-8
                    md:p-10
                    rounded-3xl
                    bg-white/70
                    backdrop-blur-xl
                    border
                    border-white/60
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-1
                    transition-all
                    duration-500
                    overflow-hidden
                  "
                >
                  {/* Dynamic Hover Glow based on the unique card color */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="grid md:grid-cols-12 gap-8 relative z-10 items-center">
                    
                    {/* Left: icon + title + CTA */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}
                      >
                        <Icon size={28} strokeWidth={2} />
                      </div>

                      <h3 className="text-2xl font-bold text-heading">
                        {service.title}
                      </h3>

                      <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-blue transition-colors duration-300 group/link w-fit"
                      >
                        Talk to us
                        <ArrowRight 
                          size={16} 
                          className="group-hover/link:translate-x-1.5 transition-transform duration-300" 
                        />
                      </Link>
                    </div>

                    {/* Right: description + bullets */}
                    <div className="md:col-span-7 md:border-l md:border-brand/40 md:pl-8">
                      <p className="text-base leading-relaxed text-body">
                        {service.description}
                      </p>

                      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                        {service.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-heading font-medium"
                          >
                            <span 
                              className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} shadow-sm`} 
                              aria-hidden="true" 
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process - Upgraded with Modern Gradient Connections */}
      <section className="section relative">
        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow">Process</div>
            <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-heading tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Gradient Connector line */}
            <div
              className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 opacity-30"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={step.title} className="text-center group">
                  
                  {/* Glassmorphic Step bubble */}
                  <div
                    className="
                      w-16 
                      h-16 
                      rounded-2xl 
                      flex 
                      items-center 
                      justify-center 
                      text-xl 
                      font-black 
                      mx-auto 
                      relative 
                      z-10
                      bg-white/80
                      backdrop-blur-md
                      border
                      border-white
                      shadow-lg
                      text-navy
                      group-hover:scale-110
                      group-hover:bg-gradient-to-br
                      group-hover:from-blue-500
                      group-hover:to-cyan-400
                      group-hover:text-white
                      group-hover:border-transparent
                      transition-all
                      duration-500
                    "
                  >
                    {index + 1}
                  </div>

                  <div className="mt-5 text-base font-bold text-heading transition-colors group-hover:text-blue">
                    {step.title}
                  </div>

                  <div className="mt-2 text-xs leading-relaxed text-muted px-2">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}