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
    <section className="section bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow">
            Testimonials
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px]">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-base"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="#F5A623"
                    stroke="#F5A623"
                  />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#333F4D" }}
              >
                "{testimonial.quote}"
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: "#0C2D55" }}
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "#0C2D55" }}
                  >
                    {testimonial.name}
                  </div>

                  <div
                    className="text-xs"
                    style={{ color: "#6B7A8D" }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}