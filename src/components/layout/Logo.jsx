import Link from "next/link";

export default function Logo({ light = false }) {
  const color = light ? "#FFFFFF" : "#0C2D55";

  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="32"
        height="20"
        viewBox="0 0 64 32"
        fill="none"
      >
        <path
          d="M16 4 C 6 4, 6 28, 16 28 C 26 28, 32 16, 32 16 C 32 16, 38 4, 48 4 C 58 4, 58 28, 48 28 C 38 28, 32 16, 32 16"
          stroke={light ? "#FFFFFF" : "#1565C0"}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M32 16 C 32 16, 26 4, 16 4"
          stroke="#00ACC1"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span
        className="text-base font-bold tracking-tight"
        style={{ color }}
      >
        Ameya IT Solutions
      </span>
    </Link>
  );
}