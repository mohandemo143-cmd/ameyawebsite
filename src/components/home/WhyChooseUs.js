import Link from "next/link";
import {
  Users,
  CalendarCheck,
  Handshake,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      icon: Users,
      title: "Experienced Engineers",
      desc: "Senior developers and architects driving every project from planning to deployment.",
    },
    {
      icon: CalendarCheck,
      title: "On-Time Delivery",
      desc: "Structured execution processes that keep projects on schedule.",
    },
    {
      icon: Handshake,
      title: "Long-Term Support",
      desc: "Dedicated support and continuous improvements after launch.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "Transparent updates, collaboration, and zero surprises.",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="eyebrow">
            Why Choose Us
          </div>

          <h2 className="mt-4 text-3xl md:text-[40px] font-bold text-heading leading-tight">
            Why Businesses Choose Ameya
          </h2>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-body">
            We combine senior engineering talent with disciplined delivery,
            helping organizations build reliable software, automate operations,
            and scale confidently without technology becoming a bottleneck.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-[#1565C0]
                to-[#00ACC1]
                text-white
                font-semibold
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                group
              "
            >
              More About Us

              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  p-5
                  rounded-2xl
                  bg-white/75
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500/5
                    via-transparent
                    to-blue-500/5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    mb-4
                    bg-gradient-to-r
                    from-[#1565C0]
                    to-[#00ACC1]
                    text-white
                    shadow-md
                    group-hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  <Icon size={20} />
                </div>

                <h4 className="relative z-10 text-base font-bold text-heading">
                  {item.title}
                </h4>

                <p className="relative z-10 mt-2 text-sm text-body leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Bar */}
                <div
                  className="
                    relative
                    z-10
                    mt-4
                    h-1
                    w-10
                    rounded-full
                    bg-gradient-to-r
                    from-[#1565C0]
                    to-[#00ACC1]
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}