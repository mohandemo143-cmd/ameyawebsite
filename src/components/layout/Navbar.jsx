"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/solutions", label: "Solutions" },

  { href: "https://ameyaportfolio.vercel.app/", label: "Portfolio", target: "_blank" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b h-16">
      <div className="container-x flex items-center justify-between h-16">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className={`relative py-5 text-sm font-medium ${isActive ? "text-[#1565C0]" : "text-[#333F4D]"
                  }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[#1565C0]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block text-[#fff]">
          <Link
            href="/contact"
            className="bg-[#1565C0] text-white px-5 py-3 rounded-lg"
          >
            Get In Touch
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-[#333F4D]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-[#1565C0] text-white text-center px-5 py-3 rounded-lg mt-2"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}