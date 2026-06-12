import {
  Heart,
  ShieldCheck,
  Clock,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";

const stats = [
  ["2018", "Founded"],
  ["40+", "Team Members"],
  ["100+", "Projects"],
  ["15+", "Partnerships"],
];

const values = [
  {
    icon: Heart,
    title: "Client Success First",
    description:
      "We measure ourselves by the outcomes our clients achieve, not by hours billed.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Honesty",
    description:
      "We tell you what's realistic, what's risky, and what's actually best for your business.",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description:
      "We build software and relationships designed to last well beyond the first go-live.",
  },
];

const team = [
  {
    name: "Arjun Reddy",
    role: "Co-Founder & CEO",
  },
  {
    name: "Sneha Iyer",
    role: "Co-Founder & CTO",
  },
  {
    name: "Vikram Rao",
    role: "VP, Delivery",
  },
];

const milestones = [
  [
    "2018",
    "Founded in Hyderabad",
    "Started with a small team focused on custom software.",
  ],
  [
    "2019",
    "First Enterprise Client",
    "Delivered our first large-scale enterprise engagement.",
  ],
  [
    "2021",
    "Expanded to 30+ Team",
    "Built dedicated SAP and cloud practices.",
  ],
  [
    "2023",
    "SAP Partnership",
    "Formalized our SAP partner relationship.",
  ],
  [
    "2024",
    "100+ Projects Milestone",
    "Crossed 100 successful client deliveries.",
  ],
  [
    "2026",
    "Today",
    "Trusted by clients across India and abroad.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        title="About Ameya IT Solutions"
        subtitle="A Hyderabad-based IT services company helping growing businesses build, modernize, and scale technology."
      />

      <Overview />

      <Values />

      <Team />

      <Timeline />
    </>
  );
}

function Overview() {
  return (
    <section className="section bg-white py-16 md:py-24">
      <div className="container-x">
        
        {/* Top Section: Text & Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left: Text Content */}
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#333F4D" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0C2D55" }}>
              Building Software Designed to Last
            </h2>
            <p>
              Ameya IT Solutions was founded in 2018 with a simple belief: businesses deserve software partners who behave like long-term collaborators, not short-term vendors.
            </p>
            <p>
              We bring senior engineering talent, disciplined delivery, and deep domain context to every engagement. Our teams work across custom software, AI, SAP, and cloud technologies.
            </p>
            <p>
              Today, we work with clients across India and abroad, supporting enterprises, EdTech platforms, and government initiatives with technology that simply works.
            </p>
          </div>

          {/* Right: 3D Logo Image */}
        <div className="relative w-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            {/* FIX ADDED HERE: Added absolute inset-0 and block to ensure it completely fills the container with no bottom gaps */}
<img
    src="/10.png"
    alt="Ameya IT Solutions 3D Infinity Logo"
    className="w-full h-auto block"
  />
            {/* Subtle overlay gradient to blend the image edges slightly if needed */}
            <div className=" bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Bottom Section: Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="text-center p-8 rounded-xl transition-transform hover:-translate-y-1"
              style={{
                background: "#F5F7FA",
                border: "1px solid #DDE6F0",
              }}
            >
              <div
                className="text-4xl font-extrabold tracking-tight"
                style={{ color: "#0C2D55" }}
              >
                {number}
              </div>
              <div
                className="mt-2 text-sm font-medium uppercase tracking-wider"
                style={{ color: "#6B7A8D" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Values() {
  return (
    <section
      className="section"
      style={{ background: "#F5F7FA" }}
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Values
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px] font-bold text-slate-900">
            What We Stand For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="card-base bg-white p-8 rounded-xl shadow-sm border border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-6">
                  <Icon
                    size={28}
                    color="#00ACC1"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p
                  className="mt-3 text-base leading-relaxed"
                  style={{ color: "#6B7A8D" }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section bg-white py-20">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Team
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px] font-bold text-slate-900">
            Our Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="text-center group"
            >
              <div
                className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #1565C0 0%, #0C2D55 100%)",
                }}
              >
                {member.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {member.name}
              </h3>

              <div
                className="text-sm mt-1"
                style={{ color: "#6B7A8D" }}
              >
                {member.role}
              </div>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex hover:scale-110 transition-transform"
                style={{ color: "#00ACC1" }}
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section
      className="section py-20"
      style={{ background: "#F5F7FA" }}
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-blue-600 font-semibold uppercase tracking-widest text-sm">
            History
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px] font-bold text-slate-900">
            Our Journey
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: "#DDE6F0" }}
          />

          <div className="space-y-12">
            {milestones.map(
              ([year, title, description], index) => (
                <div
                  key={year}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Box */}
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-8 z-10">
                    <div
                      className={`bg-white p-6 rounded-xl shadow-sm transition-shadow hover:shadow-md ${
                        index % 2 === 0
                          ? "md:text-right"
                          : "md:text-left"
                      }`}
                      style={{
                        border: "1px solid #DDE6F0",
                      }}
                    >
                      <h4
                        className="text-lg font-bold"
                        style={{
                          color: "#0C2D55",
                        }}
                      >
                        {title}
                      </h4>

                      <p
                        className="mt-2 text-base"
                        style={{
                          color: "#6B7A8D",
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Year Bubble */}
                  <div
                    className="absolute left-0 md:left-1/2 top-5 md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md z-20 border-4 border-[#F5F7FA]"
                    style={{
                      background: "#00ACC1",
                    }}
                  >
                    {year}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}