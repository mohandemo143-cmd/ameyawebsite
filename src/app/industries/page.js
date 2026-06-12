import {
  HeartPulse,
  Factory,
  GraduationCap,
  ShoppingBag,
  Truck,
  Landmark,
  Home,
  ShieldCheck,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    challenge:
      "Compliance, interoperability, and patient data security.",

    help: [
      "HIPAA-aligned architectures",
      "EHR/EMR integrations",
      "Telemedicine platforms",
    ],

    services: ["Custom Software", "Cloud"],
  },

  {
    icon: Factory,
    name: "Manufacturing",

    challenge:
      "Disconnected plant systems and limited real-time visibility.",

    help: [
      "Plant floor dashboards",
      "ERP & MES integration",
      "Predictive maintenance",
    ],

    services: ["SAP", "AI/ML"],
  },

  {
    icon: GraduationCap,
    name: "Education",

    challenge:
      "Scalable learning and student experience platforms.",

    help: [
      "LMS implementations",
      "Student information systems",
      "Examination platforms",
    ],

    services: ["Web", "Mobile"],
  },

  {
    icon: ShoppingBag,
    name: "Retail",

    challenge:
      "Omnichannel commerce, inventory, and customer engagement.",

    help: [
      "Headless commerce",
      "POS & inventory sync",
      "Loyalty platforms",
    ],

    services: ["Web", "Cloud"],
  },

  {
    icon: Truck,
    name: "Logistics",

    challenge:
      "Tracking, routing, and last-mile delivery optimization.",

    help: [
      "Fleet & route optimization",
      "Tracking portals",
      "Warehouse automation",
    ],

    services: ["Custom Software", "AI/ML"],
  },

  {
    icon: Landmark,
    name: "Finance",

    challenge:
      "Security, auditability, and regulatory reporting.",

    help: [
      "KYC/AML workflows",
      "Reporting automation",
      "API banking integrations",
    ],

    services: ["Custom Software", "Cloud"],
  },

  {
    icon: Home,
    name: "Real Estate",

    challenge:
      "Property, tenant, and CRM operations at scale.",

    help: [
      "Property management portals",
      "CRM & lead pipelines",
      "Document workflows",
    ],

    services: ["Web", "Mobile"],
  },

  {
    icon: ShieldCheck,
    name: "Government",

    challenge:
      "Citizen services, transparency, and secure infrastructure.",

    help: [
      "Citizen portals",
      "Grievance tracking",
      "Digital records management",
    ],

    services: ["Custom Software", "Cloud"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumb="Industries"
        title="Industries We Serve"
        subtitle="Engineering teams with deep domain context across regulated and high-growth sectors."
      />

      <section className="section bg-white">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                className="bg-white p-7"
                style={{
                  border: "1px solid #DDE6F0",
                  borderRadius: "12px",
                }}
              >
                <Icon
                  size={32}
                  color="#00ACC1"
                />

                <h3 className="mt-4 text-xl">
                  {industry.name}
                </h3>

                <div
                  className="mt-3 text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#6B7A8D" }}
                >
                  Challenge
                </div>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "#333F4D" }}
                >
                  {industry.challenge}
                </p>

                <div
                  className="mt-4 text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#6B7A8D" }}
                >
                  How We Help
                </div>

                <ul className="mt-1 space-y-1">
                  {industry.help.map((item) => (
                    <li
                      key={item}
                      className="text-sm flex gap-2"
                      style={{ color: "#333F4D" }}
                    >
                      <span
                        style={{ color: "#00ACC1" }}
                      >
                        •
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.services.map((service) => (
                    <span
                      key={service}
                      className="pill-teal"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}