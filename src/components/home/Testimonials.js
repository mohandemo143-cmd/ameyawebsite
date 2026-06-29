import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ameya delivered our platform on time and stayed engaged long after launch. Their team feels like an extension of ours.",
      name: "Priya Sharma",
      role: "CTO, Northwind Logistics",
    },
    {
      quote:
        "Senior engineers who understood our SAP landscape from day one. The cleanest migration we've ever run.",
      name: "Rahul Verma",
      role: "VP IT, Apex Systems",
    },
    {
      quote:
        "Clear communication, predictable delivery, and zero surprises. Exactly what enterprise software should feel like.",
      name: "Anita Reddy",
      role: "Director, Helios Group",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow">
            Testimonials
          </div>

          <h2 className="mt-3 text-3xl md:text-[40px] font-bold text-heading">
            What Clients Say
          </h2>

          <p className="mt-4 text-body">
            Trusted by startups, enterprises, and organizations that rely on
            technology to grow faster and operate smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                group
                relative
                p-8
                rounded-3xl
                backdrop-blur-md
                bg-white/70
                border
                border-white/50
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-5xl font-serif text-blue-100">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#F5A623"
                    stroke="#F5A623"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body leading-relaxed text-sm md:text-base">
                {testimonial.quote}
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    bg-gradient-to-r
                    from-[#1565C0]
                    to-[#00ACC1]
                    shadow-md
                  "
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <div className="font-semibold text-heading">
                    {testimonial.name}
                  </div>

                  <div className="text-sm text-muted">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  border
                  border-cyan-400/0
                  group-hover:border-cyan-400/30
                  transition-all
                  duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}