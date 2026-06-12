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
      "SAP implementation, integration, and support for enterprise environments.",
    bullets: [
      "SAP CPI",
      "SAP SuccessFactors",
      "S/4HANA",
      "Fiori Development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud migration, infrastructure, and DevOps across AWS, Azure, and GCP.",
    bullets: [
      "Cloud migration",
      "Kubernetes",
      "CI/CD pipelines",
      "Monitoring & optimization",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery",
    desc: "Understand goals and constraints",
  },
  {
    title: "Planning",
    desc: "Scope, timeline, and architecture",
  },
  {
    title: "Design",
    desc: "UX flows and system design",
  },
  {
    title: "Development",
    desc: "Iterative engineering sprints",
  },
  {
    title: "Testing",
    desc: "QA, security, and performance",
  },
  {
    title: "Deployment",
    desc: "Launch and support",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        title="Our Technology Services"
        subtitle="Senior engineering teams delivering end-to-end technology services to growing businesses."
      />

      {/* Services */}
      <section className="section bg-white">
        <div className="container-x">
          <div
            className="divide-y"
            style={{ borderColor: "#DDE6F0" }}
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="grid lg:grid-cols-10 gap-8 py-10"
                >
                  <div className="lg:col-span-3">
                    <Icon
                      size={32}
                      color="#00ACC1"
                    />

                    <h3 className="mt-4 text-xl">
                      {service.title}
                    </h3>

                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: "#1565C0" }}
                    >
                      Talk to us
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <p
                      className="text-base"
                      style={{ color: "#333F4D" }}
                    >
                      {service.description}
                    </p>

                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm"
                          style={{ color: "#333F4D" }}
                        >
                          <span
                            style={{
                              color: "#00ACC1",
                            }}
                          >
                            •
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="section"
        style={{ background: "#F5F7FA" }}
      >
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow">
              Process
            </div>

            <h2 className="mt-3 text-3xl md:text-[36px]">
              How We Work
            </h2>
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute top-6 left-0 right-0 h-px"
              style={{ background: "#DDE6F0" }}
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto relative z-10"
                    style={{
                      background: "#0C2D55",
                    }}
                  >
                    {index + 1}
                  </div>

                  <div
                    className="mt-3 text-sm font-bold"
                    style={{
                      color: "#0C2D55",
                    }}
                  >
                    {step.title}
                  </div>

                  <div
                    className="mt-1 text-xs"
                    style={{
                      color: "#6B7A8D",
                    }}
                  >
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