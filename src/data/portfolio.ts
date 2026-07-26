// ============================================================
// PORTFOLIO DATA — SINGLE SOURCE OF TRUTH (AUTHENTIC RESUME DATA)
// ============================================================

export const personalInfo = {
  name: "Shivprasad Dongapure",
  shortName: "Shivprasad",
  initials: "SD",
  title: "Full-Stack Developer & AI/ML Engineer",
  taglines: [
    "Full-Stack Developer",
    "AI & ML Engineer",
    "React & Node.js Specialist",
    "Final-Year Computer Engineering Student",
    "Open Source Contributor",
  ],
  bio: "Final-year B.Tech Computer Engineering student (graduating 2027) with hands-on full-stack experience in React/Next.js, Node.js/Express, MongoDB/SQL, and AI/ML system integrations.",
  about: `I'm a final-year B.Tech Computer Engineering student at Government College of Engineering, Jalgaon (CGPA: 8.14/10) with a strong foundation in full-stack web development and AI/ML systems.

I have completed software engineering internships at NTS Nihon Global and am currently interning at ModelSuite.ai as a Full Stack MERN Developer. My work spans building enterprise CRM platforms, crowdsourced civic management applications with Leaflet.js, and real-time computer vision traffic control systems using YOLOv8, OpenCV, and FastAPI.

I maintain a daily practice routine solving 200+ DSA problems on LeetCode and continuously building and testing full-stack & AI projects. I hold NPTEL Elite+Gold certification in Machine Learning & Deep Learning and won 1st Place at a National 36-Hour Hackathon.`,
  location: "Jalgaon / Maharashtra, India",
  email: "prasaddongapure7660@gmail.com",
  phone: "+91-8956657409",
  resumeUrl: "/Shiv_prasad_D.pdf",
  avatar: "/dev.png",
  socials: {
    github: "https://github.com/Shivprasadpravindongapure",
    linkedin: "https://www.linkedin.com/in/shivprasad-dongapure-35760a290",
    leetcode: "https://leetcode.com/u/ShivprasadPravinDongapure/",
    email: "mailto:prasaddongapure7660@gmail.com",
  },
  stats: [
    { label: "LeetCode Solved", value: 200, suffix: "+" },
    { label: "Current CGPA", value: 8, suffix: ".14" },
    { label: "Diploma Score", value: 80, suffix: ".81%" },
    { label: "GitHub Repos", value: 21, suffix: "+" },
  ],
};

// ============================================================
// SKILLS (ACCURATE FROM RESUME)
// ============================================================

export const skills = [
  {
    category: "Frontend",
    emoji: "🎨",
    items: [
      { name: "React.js", icon: "⚛️", level: 92 },
      { name: "Next.js", icon: "▲", level: 85 },
      { name: "JavaScript (ES6+)", icon: "🟨", level: 90 },
      { name: "TypeScript", icon: "🔷", level: 88 },
      { name: "Tailwind CSS", icon: "🌊", level: 90 },
      { name: "HTML5 / CSS3", icon: "🌐", level: 95 },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    items: [
      { name: "Node.js", icon: "🟢", level: 88 },
      { name: "Express.js", icon: "🚂", level: 88 },
      { name: "FastAPI", icon: "⚡", level: 80 },
      { name: "Django", icon: "🎸", level: 75 },
      { name: "WebSockets / Socket.IO", icon: "🔌", level: 82 },
      { name: "REST APIs & JWT", icon: "🔒", level: 92 },
    ],
  },
  {
    category: "Databases & AI/ML",
    emoji: "🤖",
    items: [
      { name: "MongoDB", icon: "🍃", level: 88 },
      { name: "MySQL / SQL", icon: "🐬", level: 82 },
      { name: "YOLOv8 & OpenCV", icon: "👁️", level: 80 },
      { name: "LLM APIs (OpenAI/Gemini)", icon: "🧠", level: 85 },
      { name: "LangChain", icon: "🔗", level: 75 },
      { name: "Machine & Deep Learning", icon: "📊", level: 82 },
    ],
  },
  {
    category: "Languages & Testing",
    emoji: "💻",
    items: [
      { name: "JavaScript", icon: "🟨", level: 92 },
      { name: "Python", icon: "🐍", level: 88 },
      { name: "Java", icon: "☕", level: 82 },
      { name: "C / C++", icon: "⚙️", level: 80 },
      { name: "Jest & Unit Testing", icon: "🃏", level: 78 },
      { name: "Postman API Testing", icon: "🚀", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    emoji: "🛠️",
    items: [
      { name: "Git & GitHub", icon: "🐙", level: 92 },
      { name: "Docker", icon: "🐳", level: 75 },
      { name: "Vercel", icon: "▲", level: 90 },
      { name: "AWS EC2 & S3", icon: "☁️", level: 75 },
      { name: "Cursor & Copilot", icon: "🤖", level: 90 },
      { name: "CI/CD Basics", icon: "🔄", level: 72 },
    ],
  },
];

// ============================================================
// EXPERIENCE (STRICTLY AUTHENTIC RESUME DATA)
// ============================================================

export const experience = [
  {
    id: 1,
    company: "ModelSuite.ai",
    role: "Full Stack MERN Intern",
    type: "Internship",
    duration: "July 2026 – Present",
    location: "Remote",
    description:
      "Working as a Full Stack MERN Intern, engineering responsive user interfaces and robust server backend modules.",
    achievements: [
      "Developing end-to-end web modules using React.js, Express.js, and MongoDB",
      "Implementing reusable component architecture and clean state management",
      "Collaborating on live production workflows and API integrations",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    logo: "🧠",
    color: "#8b5cf6",
  },
  {
    id: 2,
    company: "NTS Nihon Global",
    role: "Software Developer Intern",
    type: "Internship",
    duration: "June 2025 – July 2025",
    location: "Remote",
    description:
      "Built full-stack web application modules using React.js and Node.js/Express.js, optimizing data flow and reporting workflows.",
    achievements: [
      "Built client-side UI modules with React.js and backend endpoints with Node.js/Express.js",
      "Integrated RESTful APIs with MongoDB database, JWT authentication, and structured input validation",
      "Collaborated using Git/GitHub in an Agile team setup, conducting sprint reviews and issue resolution",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Git"],
    logo: "🏢",
    color: "#6366f1",
  },
];

// ============================================================
// PROJECTS (AUTHENTIC RESUME PROJECTS)
// ============================================================

export const projects = [
  {
    id: 1,
    title: "Local Trade Street — Business CRM",
    description:
      "Full-stack mobile CRM application with Expo React Native, TypeScript, and Express/MongoDB backend across 8 core business modules.",
    longDescription:
      "Engineered a full-stack mobile CRM platform with Expo React Native + TypeScript frontend and Express/MongoDB backend. Includes 8 production-grade modules covering OTP authentication, business profiles, lead management, customer reviews, subscriptions, and real-time business analytics.",
    tech: ["React Native (Expo)", "TypeScript", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/Shivprasadpravindongapure/LTS-Customer-app",
    live: "",
    featured: true,
    category: "Full Stack",
    image: "📱",
    color: "from-violet-500/20 to-indigo-500/20",
    highlights: ["OTP Auth Module", "Lead Tracking", "Business Analytics", "8 Core Modules"],
  },
  {
    id: 2,
    title: "Crowdsourced Civic Issue Reporting System",
    description:
      "Full-stack MERN platform for civic issue tracking with Leaflet.js geo-tagged mapping, JWT role-based access, and Cloudinary upload.",
    longDescription:
      "Built a full-stack MERN civic management solution featuring responsive dashboards in React.js and Express REST APIs. Implemented JWT role-based authentication for Citizen, Worker, and Admin roles, alongside geo-spatial reporting using Leaflet.js maps.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Leaflet.js", "Cloudinary"],
    github: "https://github.com/Shivprasadpravindongapure/smart-civic-reporting",
    live: "https://civic-app-seven.vercel.app",
    featured: true,
    category: "Full Stack",
    image: "🏙️",
    color: "from-emerald-500/20 to-teal-500/20",
    highlights: ["Leaflet.js Geo Mapping", "Role-Based JWT Auth", "Admin Dashboards", "Cloudinary Uploads"],
  },
  {
    id: 3,
    title: "AI Traffic Management System",
    description:
      "Real-time computer vision system using YOLOv8, OpenCV, FastAPI, and Socket.IO for automated vehicle density & signal control.",
    longDescription:
      "Developed a real-time computer vision traffic controller using YOLOv8 and OpenCV for vehicle detection, lane-density estimation, and emergency vehicle priority. Integrated FastAPI, React.js, and Socket.IO to stream real-time analytics through a live dashboard.",
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React.js", "Socket.IO"],
    github: "https://github.com/Shivprasadpravindongapure/AI-Based-Intelligent-Traffic-Managment-System",
    live: "",
    featured: true,
    category: "AI & ML",
    image: "🚦",
    color: "from-amber-500/20 to-orange-500/20",
    highlights: ["YOLOv8 Detection", "Socket.IO Live Stream", "Adaptive Signals", "Emergency Priority"],
  },
  {
    id: 4,
    title: "AI App Compiler",
    description:
      "7-stage AI compilation pipeline converting natural language prompts into validated app code with an LLM repair engine.",
    longDescription:
      "Architected a 7-stage AI code generation pipeline with a React.js monitoring dashboard. Converts natural language prompts into validated web app configurations using a 10-rule validation engine, LLM self-repair loop, and SQLite metric logging.",
    tech: ["Python", "FastAPI", "React.js", "SQLite", "Gemini API", "OpenAI API"],
    github: "https://github.com/Shivprasadpravindongapure/AI-App-Compiler",
    live: "https://ai-app-compiler-liard.vercel.app",
    featured: true,
    category: "AI & ML",
    image: "🤖",
    color: "from-blue-500/20 to-cyan-500/20",
    highlights: ["7-Stage Pipeline", "LLM Self-Repair Engine", "10-Rule Validation", "Live Vercel Preview"],
  },
];

// ============================================================
// EDUCATION (AUTHENTIC)
// ============================================================

export const education = [
  {
    id: 1,
    school: "Government College of Engineering, Jalgaon",
    degree: "B.Tech in Computer Engineering (Direct Second Year)",
    duration: "2024 – 2027",
    location: "Jalgaon, Maharashtra, India",
    description: "Final-Year B.Tech Student. Current CGPA: 8.14 / 10.",
    achievements: [
      "Current CGPA: 8.14 / 10",
      "Specializing in Software Engineering, Full-Stack Architecture, and AI/ML Systems",
    ],
    logo: "🎓",
  },
  {
    id: 2,
    school: "Institute of Civil & Rural Engineering (ICRE), Gargoti",
    degree: "Diploma in Computer Engineering",
    duration: "2021 – 2024",
    location: "Gargoti, Maharashtra, India",
    description: "Completed 3-year Diploma with First Class Distinction (80.81%).",
    achievements: [
      "Scored 80.81%",
      "Solid core foundation in Data Structures, Java, C/C++, and Web Technologies",
    ],
    logo: "📜",
  },
];

// ============================================================
// ACHIEVEMENTS & CERTIFICATIONS (ACCURATE)
// ============================================================

export const achievements = [
  {
    id: 1,
    title: "1st Place — National 36-Hr Hackathon",
    description: "Awarded 1st Place at a National-Level 36-Hour Hackathon for developing an innovative AI-driven software solution.",
    icon: "🥇",
    stat: "1st Place",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 2,
    title: "200+ Solved on LeetCode",
    description: "Maintains a daily DSA practice routine on LeetCode focusing on Data Structures, Algorithms, and Problem Solving.",
    icon: "💡",
    stat: "200+",
    color: "from-orange-500 to-rose-500",
  },
  {
    id: 3,
    title: "NPTEL Elite + Gold (ML & DL)",
    description: "Certified NPTEL Elite+Gold in Machine Learning & Deep Learning by IIT/NPTEL.",
    icon: "🌟",
    stat: "Elite+Gold",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 4,
    title: "2nd Prize — National DSA Contest",
    description: "Secured 2nd Prize in a National-Level Data Structures & Algorithms Competitive Programming Event.",
    icon: "🥈",
    stat: "2nd Prize",
    color: "from-slate-400 to-gray-500",
  },
  {
    id: 5,
    title: "AWS Academy Cloud Badge",
    description: "Earned the official AWS Academy Cloud Foundations accreditation badge (2026).",
    icon: "☁️",
    stat: "AWS 2026",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    title: "NPTEL Elite — Java Programming",
    description: "Awarded NPTEL Elite certification in Object-Oriented Programming with Java.",
    icon: "☕",
    stat: "NPTEL Elite",
    color: "from-violet-500 to-indigo-500",
  },
];

export const certifications = [
  {
    id: 1,
    name: "NPTEL Elite + Gold: Machine Learning & Deep Learning",
    issuer: "IIT / NPTEL",
    date: "2025",
    link: "#",
    icon: "🏆",
  },
  {
    id: 2,
    name: "AWS Academy Cloud Foundations Badge",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    link: "#",
    icon: "☁️",
  },
  {
    id: 3,
    name: "NPTEL Elite: Programming in Java",
    issuer: "IIT / NPTEL",
    date: "2024",
    link: "#",
    icon: "☕",
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
