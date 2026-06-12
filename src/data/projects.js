import {
  Building2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export const PROJECTS = [
  {
    slug: "manufacturing-erp",
    category: "Enterprise",
    title: "Manufacturing ERP Rollout",
    desc: "Unified ERP across 4 plants with real-time inventory and reporting.",

    tech: ["SAP S/4HANA", "React", "Azure"],

    color: "#0C2D55",

    icon: Building2,

    challenge:
      "Four plants ran on disconnected legacy systems, making consolidated reporting nearly impossible and slowing month-end close to over two weeks.",

    solution:
      "We led the SAP S/4HANA rollout with a phased migration strategy, built custom Fiori apps for plant operations, and integrated existing MES systems via a clean middleware layer.",

    features: [
      "Centralized financial consolidation across 4 entities",
      "Real-time inventory visibility across plants",
      "Custom Fiori apps for shop floor operations",
      "Power BI dashboards for leadership",
      "Automated GST & statutory reporting",
    ],

    results: [
      {
        num: "70%",
        label: "Faster month-end close",
      },
      {
        num: "4",
        label: "Plants unified",
      },
      {
        num: "99.9%",
        label: "System uptime",
      },
    ],
  },

  {
    slug: "university-lms",
    category: "EdTech",
    title: "University LMS Platform",

    desc:
      "Online learning platform supporting 25,000+ students and faculty.",

    tech: ["Node.js", "PostgreSQL", "AWS"],

    color: "#00ACC1",

    icon: GraduationCap,

    challenge:
      "A growing university needed to move beyond off-the-shelf LMS limitations to support custom curricula, large-scale assessments, and integration with existing student records.",

    solution:
      "We delivered a custom LMS with adaptive learning paths, secure online examinations, and tight SIS integration — built to scale to 25,000+ concurrent users on AWS.",

    features: [
      "Course authoring and adaptive learning paths",
      "Secure proctored online examinations",
      "Live classes and recorded sessions",
      "Mobile apps for students and faculty",
      "SIS and payment gateway integrations",
    ],

    results: [
      {
        num: "25K+",
        label: "Active users",
      },
      {
        num: "98%",
        label: "Faculty adoption",
      },
      {
        num: "60%",
        label: "Cost reduction",
      },
    ],
  },

  {
    slug: "citizen-portal",
    category: "GovTech",
    title: "Citizen Services Portal",

    desc:
      "Public portal handling permits, payments, and grievance tracking.",

    tech: ["React", "Java", "Oracle"],

    color: "#0C2D55",

    icon: ShieldCheck,

    challenge:
      "Citizens had to visit multiple offices for routine permits and payments, leading to long queues and limited transparency on application status.",

    solution:
      "We built a unified citizen portal with single sign-on, digital permit workflows, online payments, and a public grievance tracking system — integrated with backend departmental systems.",

    features: [
      "Single sign-on for all citizen services",
      "Digital permit applications and approvals",
      "Online fee payment with reconciliation",
      "Public grievance redressal tracking",
      "Multilingual support (English + 2 regional)",
    ],

    results: [
      {
        num: "500K+",
        label: "Citizens served",
      },
      {
        num: "85%",
        label: "Reduction in office visits",
      },
      {
        num: "24×7",
        label: "Service availability",
      },
    ],
  },
];