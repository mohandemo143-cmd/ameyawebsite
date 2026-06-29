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

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software",
      desc: "Tailored applications built around your unique business requirements.",
      // Unique color profiles for each card
      gradient: "from-blue-500 to-indigo-600",
      glow: "from-blue-500/10 via-transparent to-indigo-600/10",
      textHover: "hover:text-indigo-600",
    },
    {
      icon: Globe,
      title: "Web Development",
      desc: "Modern, fast, and scalable web applications for every industry.",
      gradient: "from-emerald-400 to-teal-500",
      glow: "from-emerald-400/10 via-transparent to-teal-500/10",
      textHover: "hover:text-teal-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Native and cross-platform apps delivering exceptional user experiences.",
      gradient: "from-orange-400 to-rose-500",
      glow: "from-orange-400/10 via-transparent to-rose-500/10",
      textHover: "hover:text-rose-500",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      desc: "AI-powered automation and predictive solutions for business growth.",
      gradient: "from-purple-500 to-fuchsia-500",
      glow: "from-purple-500/10 via-transparent to-fuchsia-500/10",
      textHover: "hover:text-fuchsia-600",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      desc: "Transform raw data into actionable insights and smarter decisions.",
      gradient: "from-cyan-400 to-blue-500",
      glow: "from-cyan-400/10 via-transparent to-blue-500/10",
      textHover: "hover:text-blue-500",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      desc: "Cloud infrastructure, migration, DevOps, and managed services.",
      gradient: "from-sky-400 to-indigo-400",
      glow: "from-sky-400/10 via-transparent to-indigo-400/10",
      textHover: "hover:text-indigo-500",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow">
            Our Services
          </div>

          <h2 className="mt-3 text-3xl md:text-[40px] font-bold text-heading">
            What We Do
          </h2>

          <p className="mt-4 text-base text-body leading-relaxed">
            End-to-end technology solutions that help businesses innovate,
            automate, and scale confidently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  p-5
                  rounded-2xl
                  bg-white/75
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                  overflow-hidden
                "
              >
                {/* Dynamic Hover Glow based on the unique card color */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Unique Colored Icon Box */}
                <div
                  className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r ${service.gradient} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-bold text-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-2 text-sm text-body leading-relaxed flex-grow">
                  {service.desc}
                </p>

                {/* Learn More Link (Color shifts to match card theme on hover) */}
                <Link
                  href="/services"
                  className={`relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-300 ${service.textHover}`}
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>

                {/* Dynamic Accent Line */}
                <div
                  className={`relative z-10 mt-4 h-1 w-8 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover:w-14`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}