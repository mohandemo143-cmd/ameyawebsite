import Link from "next/link";
import {
  UserCog,
  Search,
  Workflow,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";

const solutions = [
  {
    icon: UserCog,
    title: "HR Management System",
    description:
      "A unified HRMS for employee records, payroll, leave, performance, and compliance — built to scale with your headcount.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "from-blue-500/30 to-indigo-600/30",
    bullets: [
      "Employee lifecycle management",
      "Payroll & statutory compliance",
      "Leave, attendance & time tracking",
      "Performance reviews & goals",
    ],
    features: [
      "Self-service portal",
      "Mobile app for employees",
      "Custom approval workflows",
      "Reporting & analytics",
      "Role-based access control",
      "Integrations with payroll providers",
    ],
  },
  {
    icon: Search,
    title: "Recruitment Platform",
    description:
      "Source, screen, and hire faster with a structured ATS that fits your unique hiring process and team dynamics.",
    gradient: "from-emerald-400 to-teal-500",
    glow: "from-emerald-400/30 to-teal-500/30",
    bullets: [
      "Job posting & candidate sourcing",
      "Resume parsing & screening",
      "Interview scheduling",
      "Offer management & onboarding",
    ],
    features: [
      "Career site builder",
      "Pipeline tracking",
      "Collaborative hiring",
      "Interview feedback",
      "Email & calendar integration",
      "Hiring analytics",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate approvals and repetitive processes across departments with configurable workflows and strict audit trails.",
    gradient: "from-purple-500 to-fuchsia-500",
    glow: "from-purple-500/30 to-fuchsia-500/30",
    bullets: [
      "Visual workflow designer",
      "Multi-level approvals",
      "SLA tracking",
      "Audit trail & compliance",
    ],
    features: [
      "Drag-and-drop builder",
      "Conditional branching",
      "Form builder",
      "Email notifications",
      "API triggers",
      "Role-based access",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Resource Planning",
    description:
      "Unified ERP for finance, operations, inventory, and reporting, giving you complete visibility into your business.",
    gradient: "from-orange-400 to-rose-500",
    glow: "from-orange-400/30 to-rose-500/30",
    bullets: [
      "Finance & accounting",
      "Inventory & procurement",
      "Sales & order management",
      "Business intelligence",
    ],
    features: [
      "Multi-entity support",
      "Multi-currency",
      "Real-time dashboards",
      "GST compliance",
      "Role-based modules",
      "API-first architecture",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        crumb="Solutions"
        title="Business Solutions"
        subtitle="Production-grade products you can deploy quickly and adapt to your business."
      />

      <div className="py-12 md:py-24 space-y-24 md:space-y-32">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const isEven = index % 2 === 0;

          return (
            <section key={solution.title} className="relative">
              <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Text Content */}
                <div className={`order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${solution.gradient} text-white shadow-lg`}
                  >
                    <Icon size={32} strokeWidth={2} />
                  </div>

                  <h2 className="text-3xl md:text-[40px] font-bold text-heading leading-tight">
                    {solution.title}
                  </h2>

                  <p className="mt-5 text-lg leading-relaxed text-body">
                    {solution.description}
                  </p>

                  {/* Upgraded Bullet Points */}
                  <ul className="mt-8 space-y-4">
                    {solution.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-heading font-medium">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r ${solution.gradient} text-white shadow-sm`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Custom Styled Button */}
                  <Link
                    href="/contact"
                    className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy text-white text-sm font-bold hover:bg-blue hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    Request a Demo
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Glassmorphism Feature Card */}
                <div className={`order-2 ${isEven ? "lg:order-2" : "lg:order-1"} relative group`}>
                  
                  {/* Floating Ambient Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${solution.glow} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 rounded-full pointer-events-none`} />

                  <div className="relative p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${solution.gradient}`} />

                    <div className="eyebrow mb-6 text-navy">Key Features</div>

                    <ul className="space-y-4">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm md:text-base text-body">
                          <Check
                            size={18}
                            className="text-navy flex-shrink-0"
                            strokeWidth={2.5}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}