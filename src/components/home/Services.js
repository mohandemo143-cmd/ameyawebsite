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
      title: "Custom Software Development",
      desc: "Tailored applications built around your unique business processes and goals.",
    },
    {
      icon: Globe,
      title: "Web Development",
      desc: "Modern, performant web applications with secure, scalable architectures.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps for iOS and Android users.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      desc: "Practical AI automation and ML models that solve real operational problems.",
    },
    
    {
      icon: Cloud,
      title: "Cloud Services",
      desc: "Cloud migration, infrastructure, and DevOps across AWS, Azure, and GCP.",
    },
  ];

  return (
    <section
      className="section"
      style={{ background: "#F5F7FA" }}
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow">
            Our Services
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px]">
            What We Do
          </h2>

          <p
            className="mt-3 text-base"
            style={{ color: "#6B7A8D" }}
          >
            End-to-end technology services delivered by experienced engineers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="card-base"
              >
                <Icon
                  size={24}
                  color="#00ACC1"
                />

                <h3 className="mt-4 text-base font-bold">
                  {service.title}
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "#6B7A8D" }}
                >
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#00ACC1" }}
                >
                  Learn More

                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}