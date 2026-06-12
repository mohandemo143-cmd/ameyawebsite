import {
  UserCog,
  Search,
  Workflow,
  Building2,
} from "lucide-react";

export default function SolutionsPreview() {
  const solutions = [
    {
      icon: UserCog,
      title: "HR Management System",
      desc: "Manage employees, payroll, and policies in one place.",
    },
    {
      icon: Search,
      title: "Recruitment Platform",
      desc: "Streamline sourcing, screening, and hiring workflows.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Automate approvals and repetitive processes across teams.",
    },
    {
      icon: Building2,
      title: "Youtube Analytics Platform",
      desc: "Trends of youtube and growing channels in the compitation of the industries",
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
            Solutions
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px]">
            Ready-Built Solutions
          </h2>

          <p
            className="mt-3 text-base"
            style={{ color: "#6B7A8D" }}
          >
            Production-grade products that adapt
            to your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="card-base"
              >
                <Icon
                  size={24}
                  color="#00ACC1"
                />

                <h3 className="mt-3 text-base font-bold">
                  {solution.title}
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "#6B7A8D" }}
                >
                  {solution.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}