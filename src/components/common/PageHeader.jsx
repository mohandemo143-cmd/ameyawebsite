import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  crumb,
}) {
  return (
    <section
      className="py-14 border-b bg-cover bg-center bg-no-repeat"
      style={{
        backgroundColor: "#F5F7FA",
        backgroundImage: "url('/7.png')",
        borderColor: "#DDE6F0",
      }}
    >
      <div className="container-x">
        <div
          className="flex items-center gap-1.5 text-sm mb-4"
          style={{ color: "#6B7A8D" }}
        >
          <Link
            href="/"
            className="hover:text-[#1565C0]"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <span style={{ color: "#0C2D55" }}>
            {crumb}
          </span>
        </div>

        <h1
          className="text-4xl md:text-[42px]"
          style={{ color: "#0C2D55" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-3 text-base max-w-2xl"
            style={{ color: "#6B7A8D" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}