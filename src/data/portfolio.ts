// ============================================================
// PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
// Update this file to change all content across the portfolio
// ============================================================

export const personalInfo = {
  name: "Shivprasad Pravindongapure",
  shortName: "Shiv",
  initials: "SP",
  title: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "React & TypeScript Expert",
    "Problem Solver",
    "Open Source Contributor",
  ],
  bio: "I'm a passionate Full Stack Developer with expertise in building scalable web applications and AI-powered solutions. I thrive at the intersection of clean code, thoughtful UX, and cutting-edge technology.",
  about: `I'm a Full Stack Developer who loves turning ideas into production-ready digital products. From crafting pixel-perfect UIs with React and TypeScript to building robust backend APIs and AI-driven systems, I bring end-to-end ownership to every project.

My journey started with a deep curiosity for how software can solve real-world problems — whether it's an intelligent traffic management system using real-time CCTV data, or an AI compiler that transforms natural language into working apps.

When I'm not coding, I'm exploring the latest in AI/ML research, contributing to open source, or diving into competitive programming on LeetCode.`,
  location: "India",
  email: "shivprasad.dev@gmail.com",
  resumeUrl: "/resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/187841817?v=4",
  socials: {
    github: "https://github.com/Shivprasadpravindongapure",
    linkedin: "https://linkedin.com/in/shivprasadpravindongapure",
    twitter: "https://twitter.com/shivprasad_dev",
    email: "mailto:shivprasad.dev@gmail.com",
  },
  stats: [
    { label: "Repositories", value: 21, suffix: "+" },
    { label: "Projects Built", value: 15, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
    { label: "GitHub Stars", value: 5, suffix: "+" },
  ],
};

// ============================================================
// SKILLS
// ============================================================

export const skills = [
  {
    category: "Frontend",
    emoji: "🎨",
    items: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "TypeScript", icon: "🔷", level: 88 },
      { name: "Next.js", icon: "▲", level: 80 },
      { name: "Tailwind CSS", icon: "🌊", level: 92 },
      { name: "Framer Motion", icon: "✨", level: 78 },
      { name: "HTML/CSS", icon: "🌐", level: 95 },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    items: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express.js", icon: "🚂", level: 83 },
      { name: "Python", icon: "🐍", level: 82 },
      { name: "FastAPI", icon: "⚡", level: 75 },
      { name: "REST APIs", icon: "🔗", level: 90 },
      { name: "WebSockets", icon: "🔌", level: 75 },
    ],
  },
  {
    category: "AI & ML",
    emoji: "🤖",
    items: [
      { name: "OpenAI API", icon: "🧠", level: 80 },
      { name: "LangChain", icon: "🔗", level: 72 },
      { name: "Computer Vision", icon: "👁️", level: 70 },
      { name: "TensorFlow", icon: "🔥", level: 65 },
      { name: "Prompt Eng.", icon: "💬", level: 85 },
      { name: "Hugging Face", icon: "🤗", level: 68 },
    ],
  },
  {
    category: "Database",
    emoji: "🗄️",
    items: [
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 78 },
      { name: "Redis", icon: "🔴", level: 70 },
      { name: "Supabase", icon: "⚡", level: 75 },
      { name: "Prisma", icon: "◼️", level: 72 },
      { name: "Firebase", icon: "🔥", level: 74 },
    ],
  },
  {
    category: "DevOps & Tools",
    emoji: "🛠️",
    items: [
      { name: "Git & GitHub", icon: "🐙", level: 92 },
      { name: "Docker", icon: "🐳", level: 72 },
      { name: "Vercel", icon: "▲", level: 88 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "Linux", icon: "🐧", level: 74 },
      { name: "CI/CD", icon: "🔄", level: 70 },
    ],
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export const experience = [
  {
    id: 1,
    company: "DoCodeAgo",
    role: "Full Stack Developer",
    type: "Internship",
    duration: "Jan 2026 – Present",
    location: "Remote",
    description:
      "Building production-grade web applications and developer tools. Contributing to the survey builder platform and AI-integrated development workflows.",
    achievements: [
      "Built a dynamic survey builder with drag-and-drop form logic using React & TypeScript",
      "Integrated GitHub API to analyze developer profiles and code quality metrics",
      "Shipped features across full stack from API design to responsive UI",
      "Collaborated with design and product teams using agile methodology",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "REST API"],
    logo: "🏢",
    color: "#6366f1",
  },
  {
    id: 2,
    company: "Freelance",
    role: "Full Stack Developer",
    type: "Freelance",
    duration: "2025 – 2026",
    location: "Remote",
    description:
      "Delivered custom web applications and AI-powered tools for clients. Specialized in React frontends, Python backends, and LLM integrations.",
    achievements: [
      "Developed AI-App-Compiler: an LLM-powered tool that generates working apps from text prompts",
      "Built AI Intern Match: an intelligent platform to match interns with companies via ML scoring",
      "Delivered 5+ client projects with 100% on-time delivery",
      "Implemented real-time features using WebSockets and Stream API",
    ],
    tech: ["React", "Python", "OpenAI API", "FastAPI", "TypeScript", "Vercel"],
    logo: "💼",
    color: "#8b5cf6",
  },
  {
    id: 3,
    company: "Open Source & Personal Projects",
    role: "Software Developer",
    type: "Personal",
    duration: "2024 – Present",
    location: "India",
    description:
      "Built and shipped multiple personal projects ranging from AI systems to real-time communication apps, demonstrating end-to-end software engineering skills.",
    achievements: [
      "Built LinkLoom: real-time chat & video calling app using MERN stack + WebRTC + Stream API",
      "Developed AI-based Intelligent Traffic Management System using CCTV data and computer vision",
      "Smart Civic Reporting platform for community issue tracking and resolution",
      "Maintained 20+ public repositories with clean code and documentation",
    ],
    tech: ["MERN Stack", "WebRTC", "Stream API", "Computer Vision", "JavaScript", "Python"],
    logo: "🚀",
    color: "#10b981",
  },
];

// ============================================================
// FEATURED PROJECTS
// ============================================================

export const projects = [
  {
    id: 1,
    title: "AI App Compiler",
    description:
      "An LLM-powered platform that transforms natural language prompts into fully functional, deployable web applications. Supports multiple frameworks and live preview.",
    longDescription:
      "AI App Compiler bridges the gap between idea and implementation. Users describe what they want in plain English, and the system uses OpenAI's API with custom prompt engineering to generate structured, production-quality code. The app supports React, Vue, and vanilla JS output formats.",
    tech: ["Python", "OpenAI API", "FastAPI", "React", "Vercel"],
    github: "https://github.com/Shivprasadpravindongapure/AI-App-Compiler",
    live: "https://ai-app-compiler-liard.vercel.app",
    featured: true,
    category: "AI & ML",
    image: "🤖",
    color: "from-violet-500/20 to-indigo-500/20",
    highlights: ["LLM Integration", "Code Generation", "Live Preview", "Multi-framework"],
  },
  {
    id: 2,
    title: "AI Intern Match",
    description:
      "An intelligent matching platform that uses ML algorithms to pair internship seekers with companies based on skills, preferences, and company culture fit scores.",
    longDescription:
      "AI Intern Match leverages natural language processing and scoring algorithms to create meaningful connections between students and companies. The system analyzes resumes, GitHub profiles, and skill assessments to compute compatibility scores.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "OpenAI API"],
    github: "https://github.com/Shivprasadpravindongapure/Ai-Intern-Match",
    live: "",
    featured: true,
    category: "AI & ML",
    image: "🎯",
    color: "from-emerald-500/20 to-teal-500/20",
    highlights: ["ML Scoring", "Resume Parsing", "Skill Assessment", "Real-time Matching"],
  },
  {
    id: 3,
    title: "LinkLoom",
    description:
      "Real-time chat and video calling application built with MERN stack, WebRTC, and Stream API. Supports group chats, direct messages, and HD video calls.",
    longDescription:
      "LinkLoom is a full-featured communication platform offering real-time text messaging, file sharing, and video conferencing. Built on WebRTC for peer-to-peer video and Stream Chat API for reliable messaging infrastructure.",
    tech: ["React", "Node.js", "MongoDB", "WebRTC", "Stream API", "Socket.io"],
    github: "https://github.com/Shivprasadpravindongapure/LinkLoom",
    live: "",
    featured: true,
    category: "Full Stack",
    image: "💬",
    color: "from-blue-500/20 to-cyan-500/20",
    highlights: ["WebRTC Video Calls", "Real-time Chat", "Group Rooms", "File Sharing"],
  },
  {
    id: 4,
    title: "DoCodeAgo Survey Builder",
    description:
      "A professional drag-and-drop survey builder with conditional logic, multiple question types, analytics dashboard, and response management.",
    longDescription:
      "Survey Builder is a full-featured form and survey creation tool. It supports conditional branching, various question types (rating, matrix, open text, multi-select), and provides real-time analytics on response data.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Shivprasadpravindongapure/docodeago-survey-builder",
    live: "",
    featured: true,
    category: "Full Stack",
    image: "📋",
    color: "from-orange-500/20 to-rose-500/20",
    highlights: ["Drag & Drop", "Conditional Logic", "Analytics", "Export PDF"],
  },
  {
    id: 5,
    title: "AI Traffic Management System",
    description:
      "An AI-based intelligent traffic management system using real-time CCTV data to detect vehicle density and dynamically control traffic signals.",
    longDescription:
      "This system processes live CCTV feeds using computer vision to detect vehicle counts at intersections. The AI model dynamically adjusts traffic signal timing to minimize congestion and prioritize emergency vehicles.",
    tech: ["Python", "Computer Vision", "OpenCV", "JavaScript", "Node.js"],
    github: "https://github.com/Shivprasadpravindongapure/AI-Based-Intelligent-Traffic-Managment-System",
    live: "",
    featured: false,
    category: "AI & ML",
    image: "🚦",
    color: "from-yellow-500/20 to-orange-500/20",
    highlights: ["Real-time CCTV", "Vehicle Detection", "Dynamic Signals", "Emergency Priority"],
  },
  {
    id: 6,
    title: "GitHub Analyzer API",
    description:
      "A powerful REST API that analyzes GitHub profiles, repository activity, code quality, and developer metrics to generate comprehensive developer scorecards.",
    longDescription:
      "GitHub Analyzer API processes public GitHub data to extract meaningful developer insights. It computes contribution patterns, language distribution, collaboration metrics, and generates a developer quality score.",
    tech: ["JavaScript", "Node.js", "GitHub API", "Express.js", "REST API"],
    github: "https://github.com/Shivprasadpravindongapure/github-analyzer-api",
    live: "",
    featured: false,
    category: "Backend",
    image: "📊",
    color: "from-gray-500/20 to-slate-500/20",
    highlights: ["GitHub API", "Developer Scoring", "REST API", "Analytics"],
  },
  {
    id: 7,
    title: "Smart Civic Reporting",
    description:
      "A community platform enabling citizens to report, track, and resolve civic issues with location tagging, photo upload, and real-time status updates.",
    longDescription:
      "Smart Civic Reporting empowers communities to participate in local governance. Citizens can report potholes, broken street lights, garbage dumps, and other civic issues. Local authorities receive categorized, location-tagged reports with priority scoring.",
    tech: ["React", "Node.js", "MongoDB", "Maps API", "TypeScript"],
    github: "https://github.com/Shivprasadpravindongapure/smart-civic-reporting",
    live: "https://civic-app-seven.vercel.app",
    featured: false,
    category: "Full Stack",
    image: "🏙️",
    color: "from-green-500/20 to-emerald-500/20",
    highlights: ["Geo-location", "Photo Upload", "Status Tracking", "Priority Scoring"],
  },
  {
    id: 8,
    title: "LTS Customer App",
    description:
      "A full-featured customer management application with order tracking, real-time notifications, and an intuitive dashboard for business operations.",
    longDescription:
      "LTS Customer App is a B2C application focused on streamlining customer interactions and order management. It features real-time order tracking, push notifications, customer profiles, and an admin dashboard.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Shivprasadpravindongapure/LTS-Customer-app",
    live: "",
    featured: false,
    category: "Full Stack",
    image: "🛒",
    color: "from-purple-500/20 to-pink-500/20",
    highlights: ["Order Tracking", "Real-time Updates", "Admin Dashboard", "Customer Portal"],
  },
];

// ============================================================
// EDUCATION
// ============================================================

export const education = [
  {
    id: 1,
    school: "Dr. Babasaheb Ambedkar Technological University",
    degree: "Bachelor of Engineering in Computer Engineering",
    duration: "2022 – 2026",
    location: "Raigad, Maharashtra, India",
    description: "Pursuing B.E. in Computer Engineering with focus on Software Development, Artificial Intelligence, and Data Structures.",
    achievements: [
      "Strong CGPA in core CS subjects",
      "Active participant in college hackathons",
      "Technical club member",
    ],
    logo: "🎓",
  },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================

export const achievements = [
  {
    id: 1,
    title: "21+ GitHub Repositories",
    description: "Maintained a diverse portfolio of public repositories spanning AI, web development, and utility tools.",
    icon: "🐙",
    stat: "21+",
    color: "from-violet-500 to-indigo-500",
  },
  {
    id: 2,
    title: "AI App Deployed on Vercel",
    description: "Successfully deployed AI-App-Compiler to Vercel, making it publicly accessible with production-grade performance.",
    icon: "🚀",
    stat: "Live",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Full Stack AI Projects",
    description: "Built end-to-end AI-powered applications integrating LLMs, computer vision, and ML scoring algorithms.",
    icon: "🤖",
    stat: "5+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Multi-Language Proficiency",
    description: "Proficient across TypeScript (33%), JavaScript (29%), Python (28%), demonstrating versatile engineering skills.",
    icon: "💻",
    stat: "5+",
    color: "from-orange-500 to-rose-500",
  },
  {
    id: 5,
    title: "Real-time App Development",
    description: "Built LinkLoom with WebRTC and Stream API — demonstrating expertise in complex real-time communication systems.",
    icon: "⚡",
    stat: "WebRTC",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "Internship at DoCodeAgo",
    description: "Contributed to production features at DoCodeAgo, shipping real-world software used by actual customers.",
    icon: "🏢",
    stat: "2026",
    color: "from-pink-500 to-rose-500",
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications = [
  {
    id: 1,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "2025",
    link: "#",
    icon: "📜",
  },
  {
    id: 2,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    link: "#",
    icon: "🏆",
  },
  {
    id: 3,
    name: "Python for Data Science and AI",
    issuer: "IBM / Coursera",
    date: "2025",
    link: "#",
    icon: "🐍",
  },
  {
    id: 4,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    link: "#",
    icon: "🎨",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export const testimonials = [
  {
    id: 1,
    name: "Mentor at DoCodeAgo",
    role: "Senior Engineer",
    company: "DoCodeAgo",
    text: "Shivprasad picks up new technologies incredibly fast. His ability to deliver production-ready features while maintaining clean, readable code is impressive for his experience level.",
    avatar: "👨‍💻",
  },
  {
    id: 2,
    name: "Hackathon Teammate",
    role: "Full Stack Developer",
    company: "Freelance",
    text: "Working with Shiv on our hackathon project was a great experience. He's proactive, collaborative, and always brings creative technical solutions to complex problems.",
    avatar: "👩‍💻",
  },
  {
    id: 3,
    name: "Freelance Client",
    role: "Startup Founder",
    company: "Stealth Startup",
    text: "Shivprasad delivered the AI integration for our product on time and with excellent quality. The LLM prompting he implemented saved us significant development time.",
    avatar: "🚀",
  },
];

// ============================================================
// NAV LINKS
// ============================================================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
