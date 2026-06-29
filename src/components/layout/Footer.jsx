import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0C2D55 0%, #123D72 60%, #1565C0 100%)",
        color: "#D6E4F0",
      }}
    >
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <Logo light />

            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "#D6E4F0" }}
            >
              Custom software, AI automation, SAP, cloud solutions, and digital
              transformation services for growing businesses worldwide.
            </p>

            <p
              className="mt-4 text-sm"
              style={{ color: "#BFD5EA" }}
            >
              Hyderabad, Telangana, India
            </p>
          </div>

          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
            ]}
          />

          <FooterCol
            title="Services"
            links={[
              {
                href: "/services",
                label: "Custom Software Development",
              },
              {
                href: "/services",
                label: "Web Development",
              },
              {
                href: "/services",
                label: "Mobile App Development",
              },
              {
                href: "/services",
                label: "AI & Machine Learning",
              },
              {
                href: "/services",
                label: "SAP Services",
              },
              {
                href: "/services",
                label: "Cloud Services",
              },
            ]}
          />

          {/* Careers */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">
              Careers
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-[#D6E4F0] hover:text-[#00ACC1] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Open Positions
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-[#D6E4F0] hover:text-[#00ACC1] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Internships
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-[#D6E4F0] hover:text-[#00ACC1] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Join Our Team
                </Link>
              </li>
            </ul>

            <div
              className="mt-5 text-sm space-y-2"
              style={{ color: "#BFD5EA" }}
            >
              <div>📞 +91 7993174833</div>
              <div>✉️ info@ameyait.com</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.18)",
            color: "#BFD5EA",
          }}
        >
          <div>
            © 2026 Ameya IT Solutions. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-[#D6E4F0] hover:text-[#00ACC1] transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="text-[#D6E4F0] hover:text-[#00ACC1] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-white text-sm font-bold mb-4">
        {title}
      </h4>

      <ul className="space-y-3 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="
                text-[#D6E4F0]
                hover:text-[#00ACC1]
                transition-all
                duration-300
                hover:translate-x-1
                inline-block
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}