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
    color: "from-rose-400 to-orange-400",
    glow: "group-hover:bg-orange-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Technical Honesty",
    description:
      "We tell you what's realistic, what's risky, and what's actually best for your business.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:bg-cyan-500/20",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description:
      "We build software and relationships designed to last well beyond the first go-live.",
    color: "from-emerald-400 to-teal-500",
    glow: "group-hover:bg-teal-500/20",
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
  {
    year: "2018",
    title: "Founded in Hyderabad",
    description: "Started with a small team focused on custom software.",
  },
  {
    year: "2019",
    title: "First Enterprise Client",
    description: "Delivered our first large-scale enterprise engagement.",
  },
  {
    year: "2021",
    title: "Expanded to 30+ Team",
    description: "Built dedicated SAP and cloud practices.",
  },
  {
    year: "2023",
    title: "SAP Partnership",
    description: "Formalized our SAP partner relationship.",
  },
  {
    year: "2024",
    title: "100+ Projects Milestone",
    description: "Crossed 100 successful client deliveries.",
  },
  {
    year: "2026",
    title: "Today",
    description: "Trusted by clients across India and abroad.",
  },
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
    <section className="section relative overflow-hidden">
      <div className="container-x relative z-10">
        
        {/* Top Section: Text & Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left: Text Content */}
          <div className="space-y-6 text-lg leading-relaxed text-body">
            <div className="eyebrow">Our Story</div>
            <h2 className="text-3xl md:text-[42px] font-bold text-heading leading-tight mb-8">
              Building Software Designed to Last
            </h2>
            <p>
              Ameya IT Solutions was founded in 2018 with a simple belief: businesses deserve software partners who behave like long-term collaborators, not short-term vendors.
            </p>
            <p>
              We bring senior engineering talent, disciplined delivery, and deep domain context to every engagement. Our teams work across custom software, AI, cloud technologies, and SAP—where we provide hands-on expertise in CI-DS and enterprise integration tools to handle your most complex data landscapes.
            </p>
            <p>
              Today, we work with clients across India and abroad, supporting enterprises, government initiatives, and EdTech platforms. We build robust learning systems with flawless progression logic, ensuring users seamlessly unlock subsequent modules after passing tests without friction.
            </p>
          </div>

          {/* Right: 3D Logo Image with Glass Container */}
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-sm">
              <img
                src="/10.png"
                alt="Ameya IT Solutions Logo"
                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 via-transparent to-white/20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Stats Grid - Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-br from-navy to-blue text-transparent bg-clip-text">
                {number}
              </div>
              <div className="mt-3 text-sm font-bold uppercase tracking-widest text-muted">
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
    <section className="section relative">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow">Values</div>
          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-heading tracking-tight">
            What We Stand For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Dynamic Floating Glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${value.glow}`} />
                
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${value.color}`} />

                {/* Icon badge */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${value.color} text-white shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}
                >
                  <Icon size={28} strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-bold text-heading relative z-10">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-body relative z-10">
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
    <section className="section">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow">Team</div>
          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-heading tracking-tight">
            Our Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="text-center group"
            >
              {/* Avatar with Animated Border */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className="relative w-full h-full rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl group-hover:scale-105 transition-transform duration-500 border-2 border-white/80 backdrop-blur-md"
                  style={{
                    background: "linear-gradient(135deg, var(--navy) 0%, #1565C0 100%)",
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </div>
              </div>

              <h3 className="text-xl font-bold text-heading">
                {member.name}
              </h3>

              <div className="text-sm mt-2 font-medium text-muted uppercase tracking-wider">
                {member.role}
              </div>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-teal/70 hover:text-teal hover:scale-110 transition-all duration-300"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
    <section className="section relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="eyebrow">History</div>
          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-heading tracking-tight">
            Our Journey
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Glowing Gradient Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent opacity-30" />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Box */}
                  <div className={`md:w-1/2 pl-16 md:pl-0 w-full ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 w-full max-w-md">
                      <h4 className="text-xl font-bold text-heading">
                        {milestone.title}
                      </h4>
                      <p className="mt-3 text-base text-body leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Year Bubble */}
                  <div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-sm font-black text-white shadow-lg bg-gradient-to-br from-navy to-blue border-4 border-[#F9FCFF] z-20 group-hover:scale-110 transition-transform duration-500"
                  >
                    {milestone.year}
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}