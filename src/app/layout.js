import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  metadataBase: new URL("https://www.ameyait.com"),

  title: {
    default: "Ameya IT Solutions | Custom Software Development in Hyderabad",
    template: "%s | Ameya IT Solutions",
  },

  description:
    "Located in SR Nagar, Hyderabad, Ameya IT Solutions provides custom software development, web and mobile applications, AI automation, cloud solutions, enterprise software, and digital transformation services worldwide.",

  keywords: [
  // Brand
  "Ameya IT Solutions",
  "Ameya IT",
  "Ameya IT Solutions Hyderabad",
  "Ameya IT Solutions SR Nagar",
  "Ameya IT Solutions Ameerpet",
  "Ameya Software Company",

  // Local SEO
  "Software Development Company in Hyderabad",
  "Software Development Company in SR Nagar",
  "Software Company in SR Nagar",
  "IT Company in SR Nagar Hyderabad",
  "IT Company in Hyderabad",
  "Best Software Company in Hyderabad",
  "Software Company near Ameerpet",
  "Software Company near SR Nagar Metro",

  // Services
  "Custom Software Development",
  "Web Development Company Hyderabad",
  "Website Development Company Hyderabad",
  "Mobile App Development Company Hyderabad",
  "AI Automation Services",
  "Cloud Solutions Company",
  "Enterprise Software Development",
  "ERP Software Development",
  "CRM Software Development",
  "E-commerce Website Development",
  "UI UX Design Company",
  "API Integration Services",
  "Business Automation Solutions",
  "Digital Transformation Services",

  // Long-tail
  "Best Web Development Company in Hyderabad",
  "Affordable Software Development Company Hyderabad",
  "Custom Software Development Company Hyderabad",
  "AI Software Development Company",
  "Full Stack Development Company Hyderabad",
  "React Development Company Hyderabad",
  "Next.js Development Company Hyderabad",
  "Software Development Services Hyderabad",
  "Website Design Company SR Nagar Hyderabad",
  "Startup Software Development Company Hyderabad"
],

  authors: [
    {
      name: "Ameya IT Solutions",
    },
  ],

  creator: "Ameya IT Solutions",

  publisher: "Ameya IT Solutions",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Ameya IT Solutions - SR Nagar, Hyderabad",
    description:
      "Leading software development company in SR Nagar, Hyderabad, delivering AI, cloud, enterprise software, web and mobile solutions.",

    url: "https://www.ameyait.com",

    siteName: "Ameya IT Solutions",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ameya IT Solutions",
      },
    ],

    locale: "en_IN", // Updated to India locale for better regional SEO
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ameya IT Solutions | Hyderabad",
    description:
      "Custom Software Development, AI Automation, Cloud Solutions and Enterprise Applications based in SR Nagar, Hyderabad.",

    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}