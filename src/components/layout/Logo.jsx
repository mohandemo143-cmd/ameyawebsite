import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
  priority = true,
}) {
  return (
    <Link
      href="/"
      aria-label="Ameya IT Solutions"
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Ameya IT Solutions Logo"
        width={200}
        height={65}
        priority={priority}
        className="w-[180px] h-auto sm:w-[200px] lg:w-[220px] object-contain"
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 220px"
      />
    </Link>
  );
}