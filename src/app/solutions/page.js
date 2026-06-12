import Link from "next/link";
import {
  UserCog,
  Search,
  Workflow,
  Building2,
  Check,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";

const solutions = [
  {
    icon: UserCog,
    title: "HR Management System",
    description:
      "A unified HRMS for employee records, payroll, leave, performance, and compliance — built to scale with your headcount.",

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
      "Source, screen, and hire faster with a structured ATS that fits your hiring process.",

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
      "Automate approvals and repetitive processes across departments with configurable workflows and audit trails.",

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
      "Unified ERP for finance, operations, inventory, and reporting.",

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

      {solutions.map((solution, index) => {
        const Icon = solution.icon;

        return (
          <section
            key={solution.title}
            className="section"
            style={{
              background:
                index % 2 === 0
                  ? "#FFFFFF"
                  : "#F5F7FA",
            }}
          >
            <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Icon
                  size={32}
                  color="#00ACC1"
                />

                <h2 className="mt-4 text-3xl md:text-[36px]">
                  {solution.title}
                </h2>

                <p
                  className="mt-4 text-base"
                  style={{ color: "#333F4D" }}
                >
                  {solution.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {solution.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm"
                      style={{ color: "#333F4D" }}
                    >
                      <Check
                        size={16}
                        color="#00ACC1"
                        className="mt-0.5 flex-shrink-0"
                      />

                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="btn-primary mt-6"
                >
                  Request a Demo
                </Link>
              </div>

              <div
                className="bg-white rounded-lg p-7"
                style={{
                  border: "1px solid #DDE6F0",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: "#6B7A8D" }}
                >
                  Key Features
                </div>

                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm"
                      style={{ color: "#333F4D" }}
                    >
                      <Check
                        size={16}
                        color="#1565C0"
                        className="mt-0.5 flex-shrink-0"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}