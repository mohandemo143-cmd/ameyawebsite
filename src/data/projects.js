import {
  Building2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export const PROJECTS = [
 
  {
    slug: "surgical-world",
    title: "Surgical World",
    category: "Healthcare",
    icon: ShieldCheck,
    image: "/sur.png",
    color: "#14B8A6",
    gradient: "from-[#0F766E] to-[#14B8A6]",
    challenge: "Medical suppliers needed an efficient platform to manage products, distributors, inventory, and customer orders while reducing manual processes.",
    solution: "Built a secure healthcare platform that centralizes product management, inventory tracking, order processing, distributor management, and customer interactions.",
    desc: "Surgical World is a healthcare platform developed for managing surgical products, medical equipment, distributors, inventory, and customer orders. The system enables healthcare providers and suppliers to efficiently manage products, inquiries, and order fulfillment through a secure and user-friendly interface.",
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
  image: "/news.png",
  color: "#7C3AED",
  gradient: "from-[#7C3AED] to-[#2563EB]",
  desc: "An AI-powered digital news platform that delivers real-time news from multiple trusted sources. The application leverages intelligent content analysis, personalized recommendations, AI-generated summaries, and smart search to help users discover relevant news faster through a modern, responsive interface.",

  tech: [
    "Next.js",
    "React.js",
    "Fast API",
    "Tailwind CSS",
    "AI Content Summarization",
    "Recommendation Engine",
  ],

  challenge:
    "Modern users face information overload due to thousands of news articles published every hour. Finding relevant, trustworthy, and personalized news while avoiding duplicate content and misinformation was a major challenge.",

  solution:
    "Developed an AI-powered News Platform that integrates real-time news APIs with intelligent recommendation algorithms, AI-generated article summaries, semantic search, personalized content feeds, and smart topic categorization to provide a faster and more engaging reading experience.",

  features: [
    "AI-Powered News Recommendations",
    "AI Article Summarization",
    "Personalized News Feed",
    
    "Smart Topic Classification",
    "Trending News Detection",
    "Breaking News Alerts",
    "Real-Time Multi-Source Aggregation",
    "AI Keyword Extraction",
    "Duplicate News Detection",
    "Sentiment Analysis",
    "Category-Based Browsing",
    "Bookmark & Reading History",
    "Responsive Mobile Experience",
    "Fast API Integration",
  ],

  results: [
    { num: "1000+", label: "News Articles Indexed" },
    { num: "50+", label: "News Categories" },
    { num: "95%", label: "AI Recommendation Accuracy" },
    { num: "Real-Time", label: "Live News Updates" },
  ],
},
   {
    slug: "hr-solutions",
    title: "HR Solutions",
    category: "Human Resource Management",
    icon: Building2,
    image: "/hr.png",
    color: "#1565C0",
    gradient: "from-[#1565C0] to-[#00ACC1]",
    desc: "HR Solutions is a comprehensive Human Resource Management System designed to streamline employee lifecycle management. The platform centralizes recruitment, onboarding, attendance, leave management, payroll, performance tracking, and reporting into a single secure application, enabling organizations to improve operational efficiency and employee productivity.",
    tech: [
      "React.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    challenge: "Many organizations relied on manual processes and multiple disconnected systems to manage employee records, attendance, payroll, leave, and performance. This resulted in data duplication, reduced productivity, delayed HR operations, and limited reporting capabilities.",
    solution: "We developed a centralized HR Management System that automates the complete employee lifecycle. The platform provides employee onboarding, attendance management, leave tracking, payroll processing, performance evaluation, role-based dashboards, and real-time analytics, enabling HR teams to work more efficiently while improving employee experience.",
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
];