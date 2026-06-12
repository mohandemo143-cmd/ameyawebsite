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

export default function Industries() {
  const industries = [
    {
      icon: HeartPulse,
      name: "Healthcare",
    },
    {
      icon: Factory,
      name: "Manufacturing",
    },
    {
      icon: GraduationCap,
      name: "Education",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
    },
    {
      icon: Truck,
      name: "Logistics",
    },
    {
      icon: Landmark,
      name: "Finance",
    },
    {
      icon: Home,
      name: "Real Estate",
    },
    {
      icon: ShieldCheck,
      name: "Government",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow">
            Industries
          </div>

          <h2 className="mt-3 text-3xl md:text-[36px]">
            Industries We Serve
          </h2>

          <p
            className="mt-3 text-base"
            style={{ color: "#6B7A8D" }}
          >
            Domain expertise across regulated
            and high-growth sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                className="card-base text-center flex flex-col items-center"
              >
                <Icon
                  size={32}
                  color="#00ACC1"
                />

                <div
                  className="mt-3 text-sm font-bold"
                  style={{ color: "#0C2D55" }}
                >
                  {industry.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}