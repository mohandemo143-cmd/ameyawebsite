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

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:pr-10">
            <Logo light />

            <p
              className="mt-4 text-sm leading-7"
              style={{ color: "#D6E4F0" }}
            >
              Custom software, AI automation, SAP, cloud solutions, and digital
              transformation services for growing businesses worldwide.
            </p>
          </div>

          {/* Company Links */}
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
            ]}
          />

          {/* Careers */}
          {/* Contact Us */}
          <div className="lg:mx-auto text-white">
            <span className="mb-4 text-sm font-bold text-[#06b6d4]">
              Contact Us
            </span>

            <div className="space-y-4 text-sm text-[#D6E4F0] mt-5">
              {/* Phone */}
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href="tel:+917993174833"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 7993174833
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:info@ameyait.com"
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  info@ameyait.com
                </a>
              </div>

              {/* Location */}
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

        {/* Bottom */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            color: "#BFD5EA",
          }}
        >
          <p className="text-center md:text-left">
            © 2026 Ameya IT Solutions. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
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
    <div className="lg:mx-auto">
      <span className="text-[#06b6d4] text-sm font-bold ">
        {title}
      </span>

      <ul className="space-y-3 text-sm mt-5">
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