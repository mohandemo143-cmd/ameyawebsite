import {
  Building2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export const PROJECTS = [
  {
    slug: "hr-solutions",
    title: "HR Solutions",
    category: "Human Resource Management",
    icon: Building2,
    color: "#1565C0",
    desc: "A complete HR management platform for employee onboarding, attendance, leave management, payroll, and performance tracking with role-based dashboards.",
    tech: [
      "React.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    gradient: "from-[#1565C0] to-[#00ACC1]",
    results: [
      { num: "100%", label: "Digital HR" },
      { num: "10K+", label: "Employees" },
      { num: "24/7", label: "Availability" },
    ],
  },

  {
    slug: "surgical-world",
    title: "Surgical World",
    category: "Healthcare",
    icon: ShieldCheck,
    color: "#14B8A6",
    desc: "A healthcare platform for managing surgical products, inventory, orders, distributors, and customer inquiries with a responsive web interface.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
    gradient: "from-[#0F766E] to-[#14B8A6]",
    results: [
      { num: "500+", label: "Products" },
      { num: "99.9%", label: "Uptime" },
      { num: "24/7", label: "Support" },
    ],
  },

  {
    slug: "news-app",
    title: "News App",
    category: "Media",
    icon: GraduationCap,
    color: "#7C3AED",
    desc: "A modern news aggregation platform providing real-time news, category-wise filtering, search functionality, and responsive user experience.",
    tech: [
      "Next.js",
      "React.js",
      "REST API",
      "Tailwind CSS",
    ],
    gradient: "from-[#7C3AED] to-[#2563EB]",
    results: [
      { num: "1000+", label: "Articles" },
      { num: "50+", label: "Categories" },
      { num: "Real-Time", label: "Updates" },
    ],
  },
];