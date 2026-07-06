import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  crumb,
}) {
  return (
    <section
      className="py-14 border-b bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundColor: "#F5F7FA",
        backgroundImage: "url('/7.png')",
        borderColor: "#DDE6F0",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container-x relative z-10">
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-1.5 text-sm mb-4"
          style={{ color: "#E0E7FF" }} // Light blue-ish white for good contrast
        >
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-[#E0E7FF]" />
          <span style={{ color: "#FFFFFF" }}>
            {crumb}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-[42px] drop-shadow-lg"
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-3 text-base w-[40%]  drop-shadow-md"
            style={{ color: "#E0E7FF" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}