import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0C2D55",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <Logo light />
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Custom software, AI automation, SAP, and cloud solutions for
              growing businesses.
            </p>

            <p
              className="mt-4 text-sm"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Hyderabad, Telangana, India
            </p>
          </div>

          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
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

          <div>
            <h4 className="text-white text-sm font-bold mb-4">Careers</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Open Positions
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Internships
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Join Our Team
                </Link>
              </li>
            </ul>

            <div
              className="mt-5 text-sm space-y-1"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <div>+91 7993174833</div>
              <div>info@ameyait.com</div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>© 2026 Ameya IT Solutions. All Rights Reserved.</div>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service" className="hover:text-white">
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
      <h4 className="text-white text-sm font-bold mb-4">{title}</h4>

      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}