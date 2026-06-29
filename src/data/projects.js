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

    desc:
      "Unified ERP across 4 plants with real-time inventory management, production planning, and executive reporting.",

    tech: ["SAP S/4HANA", "React", "Azure"],

    color: "#0C2D55",

    gradient: "from-[#0C2D55] to-[#1565C0]",

    icon: Building2,

    challenge:
      "Four plants operated on disconnected legacy systems, making consolidated reporting difficult and slowing month-end financial closing.",

    solution:
      "Implemented SAP S/4HANA with phased migration, custom Fiori applications, and seamless MES integrations across manufacturing units.",

    features: [
      "Centralized financial consolidation",
      "Real-time inventory visibility",
      "Custom Fiori applications",
      "Executive Power BI dashboards",
      "Automated compliance reporting",
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
      "Online learning ecosystem supporting over 25,000 students, faculty, and administrators.",

    tech: ["Node.js", "PostgreSQL", "AWS"],

    color: "#00ACC1",

    gradient: "from-[#00ACC1] to-[#1565C0]",

    icon: GraduationCap,

    challenge:
      "The university required a scalable learning platform capable of supporting online classes, assessments, and integrations with existing systems.",

    solution:
      "Developed a custom LMS featuring adaptive learning, secure examinations, mobile applications, and SIS integration.",

    features: [
      "Course management system",
      "Adaptive learning paths",
      "Online examinations",
      "Live and recorded classes",
      "Student information system integration",
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
        label: "Operational cost reduction",
      },
    ],
  },

  {
    slug: "citizen-portal",

    category: "GovTech",

    title: "Citizen Services Portal",

    desc:
      "Digital governance platform handling permits, payments, service requests, and grievance management.",

    tech: ["React", "Java", "Oracle"],

    color: "#0C2D55",

    gradient: "from-[#0C2D55] to-[#00ACC1]",

    icon: ShieldCheck,

    challenge:
      "Citizens had to visit multiple government offices for permits, applications, and status tracking, resulting in delays and inefficiencies.",

    solution:
      "Built a unified digital services platform with secure authentication, workflow automation, and online payment capabilities.",

    features: [
      "Single sign-on",
      "Online permit applications",
      "Digital approvals",
      "Integrated payments",
      "Grievance tracking",
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

  {
    slug: "hr-management-system",

    category: "Enterprise",

    title: "HR Management Platform",

    desc:
      "Complete employee lifecycle management platform with attendance, payroll, and performance tracking.",

    tech: ["Next.js", "FastAPI", "PostgreSQL"],

    color: "#1565C0",

    gradient: "from-[#1565C0] to-[#00ACC1]",

    icon: Building2,

    challenge:
      "The client relied on spreadsheets and disconnected tools to manage employees and payroll processes.",

    solution:
      "Built a centralized HRMS with employee management, payroll automation, leave tracking, and reporting dashboards.",

    features: [
      "Employee management",
      "Payroll automation",
      "Attendance tracking",
      "Leave management",
      "Performance reviews",
    ],

    results: [
      {
        num: "80%",
        label: "Reduced manual work",
      },
      {
        num: "5K+",
        label: "Employees managed",
      },
      {
        num: "90%",
        label: "Payroll accuracy",
      },
    ],
  },

  {
    slug: "youtube-analytics",

    category: "Analytics",

    title: "YouTube Trend Analytics Platform",

    desc:
      "Advanced analytics platform for tracking YouTube trends, competitors, and audience growth.",

    tech: ["Next.js", "Python", "PostgreSQL"],

    color: "#00ACC1",

    gradient: "from-[#00ACC1] to-[#0C2D55]",

    icon: GraduationCap,

    challenge:
      "Content creators lacked a unified platform for competitor analysis and trend discovery.",

    solution:
      "Developed an analytics dashboard providing trend tracking, keyword analysis, competitor benchmarking, and growth insights.",

    features: [
      "Trend analysis",
      "Keyword tracking",
      "Competitor monitoring",
      "Growth forecasting",
      "Performance dashboards",
    ],

    results: [
      {
        num: "50M+",
        label: "Videos analyzed",
      },
      {
        num: "10K+",
        label: "Channels tracked",
      },
      {
        num: "95%",
        label: "Data accuracy",
      },
    ],
  },

  {
    slug: "healthcare-management",

    category: "Healthcare",

    title: "Healthcare Management System",

    desc:
      "Digital platform connecting doctors, patients, appointments, and medical records.",

    tech: ["React", "Node.js", "MongoDB"],

    color: "#1565C0",

    gradient: "from-[#1565C0] to-[#0C2D55]",

    icon: ShieldCheck,

    challenge:
      "Healthcare providers struggled with fragmented patient records and appointment scheduling.",

    solution:
      "Created a centralized healthcare platform with online appointments, EMR management, and patient communication tools.",

    features: [
      "Patient records",
      "Appointment scheduling",
      "Doctor management",
      "Medical history tracking",
      "Secure communication",
    ],

    results: [
      {
        num: "100K+",
        label: "Patients served",
      },
      {
        num: "65%",
        label: "Faster appointments",
      },
      {
        num: "99.8%",
        label: "System availability",
      },
    ],
  },
];