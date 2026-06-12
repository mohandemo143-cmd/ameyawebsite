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
      desc: "Senior developers on every project.",
    },
    {
      icon: CalendarCheck,
      title: "On-Time Delivery",
      desc: "We respect your timeline.",
    },
    {
      icon: Handshake,
      title: "Long-Term Support",
      desc: "We stay with you after go-live.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "Regular updates, no surprises.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-x grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="eyebrow">
            Why Choose Us
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px]">
            Why Businesses Choose Ameya
          </h2>

          <p
            className="mt-4 text-base"
            style={{ color: "#6B7A8D" }}
          >
            We combine senior engineering talent
            with disciplined delivery so you can
            ship reliable software and focus on
            growing your business.
          </p>

          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#00ACC1" }}
          >
            About Us

            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-5 rounded-lg"
                style={{ background: "#F5F7FA" }}
              >
                <Icon
                  size={24}
                  color="#00ACC1"
                />

                <h4 className="mt-3 text-base font-bold">
                  {item.title}
                </h4>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "#6B7A8D" }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}