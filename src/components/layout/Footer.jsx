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

      {/* Background Glows - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-x relative z-10 pt-8 pb-8">
        {/* Kept your original 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <Logo light className="mb-5" />
            <p className="text-sm leading-relaxed text-[#D6E4F0]/90 max-w-md">
              Custom software, AI automation, cloud solutions, and digital
              transformation services for growing businesses worldwide.
            </p>
          </div>

          {/* Company Links - JUST ADDED: lg:justify-self-center to push it right */}
          <div className="lg:justify-self-center">
            <FooterCol
              title="Company"
              links={[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ]}
            />
          </div>

          {/* Contact Us */}
          <div>
            <span className="mb-4 block text-sm font-bold text-[#06b6d4]">
              Contact Us
            </span>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href="tel:+917993174833"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 7993174833
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:info@ameyait.com"
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  info@ameyait.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Location</p>
                <a
                  href="https://maps.google.com/?q=3rd+floor,+Plot+No.+37/A,+Vengal+Rao+Nagar,+Sunder+Nagar,+Hyderabad,+Telangana+500038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-6 hover:text-cyan-400 transition-colors inline-block"
                >
                  3rd Floor, Plot No. 37/A,
                  <br />
                  Vengal Rao Nagar,
                  <br />
                  Sunder Nagar,
                  <br />
                  Hyderabad, Telangana 500038
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "#BFD5EA" }}
        >
          <p>© 2026 Ameya IT Solutions. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#00ACC1] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-[#00ACC1] transition-colors duration-300"
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
      <span className="text-[#06b6d4] text-sm font-bold block mb-4">
        {title}
      </span>
      <ul className="space-y-3 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-[#D6E4F0] hover:text-[#00ACC1] transition-all duration-300 hover:translate-x-1 inline-block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}