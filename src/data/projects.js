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
    gradient: "from-[#1565C0] to-[#00ACC1]",

    desc:
      "HR Solutions is a comprehensive Human Resource Management System designed to streamline employee lifecycle management. The platform centralizes recruitment, onboarding, attendance, leave management, payroll, performance tracking, and reporting into a single secure application, enabling organizations to improve operational efficiency and employee productivity.",

    tech: [
      "React.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
    ],
challenge:
  "Many organizations relied on manual processes and multiple disconnected systems to manage employee records, attendance, payroll, leave, and performance. This resulted in data duplication, reduced productivity, delayed HR operations, and limited reporting capabilities.",

solution:
  "We developed a centralized HR Management System that automates the complete employee lifecycle. The platform provides employee onboarding, attendance management, leave tracking, payroll processing, performance evaluation, role-based dashboards, and real-time analytics, enabling HR teams to work more efficiently while improving employee experience.",
    features: [
      "Employee Profile Management",
      "Attendance & Shift Tracking",
      "Leave & Holiday Management",
      "Payroll Processing",
      "Performance & Appraisal System",
      "Role-Based Access Control",
      "Reports & Analytics Dashboard",
      "Employee Self-Service Portal",
    ],

    results: [
      { num: "100%", label: "Digital HR Process" },
      { num: "10K+", label: "Employees Managed" },
      { num: "40%", label: "Reduced Manual Work" },
    ],
  },

  {
    slug: "surgical-world",
    title: "Surgical World",
    category: "Healthcare",
    icon: ShieldCheck,
    color: "#14B8A6",
    gradient: "from-[#0F766E] to-[#14B8A6]",
    challenge:
  "Medical suppliers needed an efficient platform to manage products, distributors, inventory, and customer orders while reducing manual processes.",

solution:
  "Built a secure healthcare platform that centralizes product management, inventory tracking, order processing, distributor management, and customer interactions.",
    desc:
      "Surgical World is a healthcare platform developed for managing surgical products, medical equipment, distributors, inventory, and customer orders. The system enables healthcare providers and suppliers to efficiently manage products, inquiries, and order fulfillment through a secure and user-friendly interface.",

    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],

    features: [
      "Medical Product Catalog",
      "Inventory Management",
      "Distributor Management",
      "Customer Order Tracking",
      "Secure User Authentication",
      "Product Search & Filtering",
      "Responsive Admin Dashboard",
      "Order Reports & Analytics",
    ],

    results: [
      { num: "500+", label: "Medical Products" },
      { num: "99.9%", label: "Application Uptime" },
      { num: "24/7", label: "Customer Support" },
    ],
  },

  {
    slug: "news-app",
    title: "News App",
    category: "Media",
    icon: GraduationCap,
    color: "#7C3AED",
    gradient: "from-[#7C3AED] to-[#2563EB]",

    desc:
      "News App is a modern digital news platform that delivers real-time news from multiple sources. Users can browse trending stories, search articles, explore categories, and stay updated with breaking news through a responsive and intuitive interface.",

    tech: [
      "Next.js",
      "React.js",
      "REST API",
      "Tailwind CSS",
    ],
challenge:
  "Users needed a fast and reliable platform to access real-time news from multiple categories in a single application.",

solution:
  "Developed a responsive News App with live news feeds, category-based browsing, search functionality, and real-time API integration for an improved reading experience.",
    features: [
      "Real-Time News Feed",
      "Category-Based Articles",
      "Trending News Section",
      "Advanced Search",
      "Bookmark Favorite Articles",
      "Responsive Mobile Design",
      "Breaking News Updates",
      "Fast API Integration",
    ],

    results: [
      { num: "1000+", label: "News Articles" },
      { num: "50+", label: "News Categories" },
      { num: "Real-Time", label: "Live Updates" },
    ],
  },
];