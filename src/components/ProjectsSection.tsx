import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    emoji: '🤖',
    title: 'AI Traffic Management System',
    subtitle: 'Machine Learning · Real-Time Systems',
    description: 'Production-grade intelligent traffic control system using YOLOv8 for multi-lane vehicle detection with adaptive signal scheduling algorithms.',
    tech: ['Python', 'YOLOv8', 'FastAPI', 'React', 'Socket.io', 'OpenCV'],
    highlights: ['Real-time multi-lane vehicle detection via YOLOv8', 'Adaptive scheduling: FCFS, Round-Robin, Priority', 'Emergency vehicle priority override system'],
    githubLink: 'https://github.com/Shivprasadpravindongapure/AI-Based-Intelligent-Traffic-Managment-System',
    liveLink: null,
    category: 'AI/ML',
    featured: true,
    accentColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.15)',
    borderColor: 'rgba(167,139,250,0.2)',
    badgeText: '🔥 Latest',
  },
  {
    id: 2,
    emoji: '💬',
    title: 'LinkLoom',
    subtitle: 'Full-Stack · WebRTC · Real-Time',
    description: 'Full-stack real-time messaging and video calling platform with Stream API-powered video calls, JWT auth, and reactive state management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stream API', 'WebRTC', 'Zustand'],
    highlights: ['HD video calling via Stream Video API + WebRTC', 'Real-time messaging with WebSocket channels', 'JWT-based authentication flow'],
    githubLink: 'https://github.com/Shivprasadpravindongapure/LinkLoom',
    liveLink: 'https://link-loom-puce.vercel.app',
    category: 'Full-Stack',
    featured: true,
    accentColor: '#60a5fa',
    glowColor: 'rgba(96,165,250,0.15)',
    borderColor: 'rgba(96,165,250,0.2)',
    badgeText: '🚀 Live',
  },
  {
    id: 3,
    emoji: '⚡',
    title: 'Chatify',
    subtitle: 'MERN Stack · WebSocket · Encryption',
    description: 'Scalable real-time chat platform with end-to-end encryption, optimized WebSocket communication, and sub-100ms message latency.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    highlights: ['Sub-100ms real-time message delivery', 'End-to-end encrypted messaging', 'Online/offline presence tracking'],
    githubLink: 'https://github.com/Shivprasadpravindongapure/chat-app',
    liveLink: 'https://chat-app-eight-amber.vercel.app',
    category: 'Full-Stack',
    featured: false,
    accentColor: '#34d399',
    glowColor: 'rgba(52,211,153,0.15)',
    borderColor: 'rgba(52,211,153,0.2)',
    badgeText: '🚀 Live',
  },
  {
    id: 4,
    emoji: '⚖️',
    title: 'Nyay AI – Legal Assistant',
    subtitle: 'AI/ML · LLM · RAG Architecture',
    description: 'AI-powered legal assistant using Flask and LLaMA LLM with RAG (Retrieval-Augmented Generation) for accurate context-aware legal guidance.',
    tech: ['Python', 'Flask', 'LLaMA', 'RAG', 'Vector DB', 'LangChain'],
    highlights: ['LLaMA-powered LLM with RAG architecture', 'Vector-based retrieval for context accuracy', 'Legal domain fine-tuning and prompt engineering'],
    githubLink: 'https://github.com/Shivprasadpravindongapure/Nyay-AI-for-legal-assistant',
    liveLink: null,
    category: 'AI/ML',
    featured: true,
    accentColor: '#fbbf24',
    glowColor: 'rgba(251,191,36,0.15)',
    borderColor: 'rgba(251,191,36,0.2)',
    badgeText: '⭐ Starred',
  },
  {
    id: 5,
    emoji: '📰',
    title: 'NewsFeed Django',
    subtitle: 'Django · REST API · Bootstrap',
    description: 'Dynamic news aggregation app fetching real-time articles from NewsAPI.org with category-based browsing and responsive UI.',
    tech: ['Python', 'Django', 'NewsAPI', 'Bootstrap', 'Tailwind CSS'],
    highlights: ['Live news from 70+ sources via NewsAPI', 'Multi-category browsing with filters', 'Django ORM with cached API responses'],
    githubLink: 'https://github.com/Shivprasadpravindongapure/NewsFeed-Django',
    liveLink: null,
    category: 'Full-Stack',
    featured: false,
    accentColor: '#f472b6',
    glowColor: 'rgba(244,114,182,0.15)',
    borderColor: 'rgba(244,114,182,0.2)',
    badgeText: '⭐ Starred',
  },
  {
    id: 6,
    emoji: '📢',
    title: 'Smart Civic Reporting',
    subtitle: 'MERN Stack · Geolocation · Civic Tech',
    description: 'Full-stack civic issue reporting platform enabling citizens to report local problems (potholes, water leaks, power cuts) with photo uploads, geolocation tagging, and real-time status tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Geolocation API', 'Cloudinary'],
    highlights: [
      'Geo-tagged issue reporting with interactive map view',
      'Photo upload with Cloudinary CDN for evidence',
      'Real-time status updates (Pending → In Progress → Resolved)',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/smart-civic-reporting',
    liveLink: null,
    category: 'Full-Stack',
    featured: true,
    accentColor: '#818cf8',
    glowColor: 'rgba(129,140,248,0.15)',
    borderColor: 'rgba(129,140,248,0.2)',
    badgeText: '🆕 New',
  },
  {
    id: 7,
    emoji: '🔬',
    title: 'FOSSEE Workshop Booking',
    subtitle: 'React · TypeScript · Responsive UI',
    description: 'Full-featured workshop booking portal with multi-step registration, real-time seat availability, and admin dashboard. Mobile-first, WCAG-accessible.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'REST API'],
    highlights: ['Multi-step workshop registration flow', 'Real-time seat availability tracking', 'Admin dashboard for workshop management'],
    githubLink: 'https://github.com/Shivprasadpravindongapure/workshop',
    liveLink: null,
    category: 'Full-Stack',
    featured: false,
    accentColor: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.15)',
    borderColor: 'rgba(34,211,238,0.2)',
    badgeText: null,
  },
];

const categories = ['All', 'AI/ML', 'Full-Stack'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 5%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span className="text-indigo-400">✦</span>
              Featured Work
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Selected{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: activeCategory === cat ? 'linear-gradient(135deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.04)',
                  border: activeCategory === cat ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.4)',
                  boxShadow: activeCategory === cat ? '0 0 20px rgba(99,102,241,0.35)' : 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden flex flex-col transition-all duration-500 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{
                  y: -6,
                  borderColor: project.borderColor,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.borderColor}, inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${project.glowColor}, transparent)` }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
                />

                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                      style={{
                        background: project.glowColor,
                        border: `1px solid ${project.borderColor}`,
                      }}
                    >
                      {project.emoji}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.liveLink && (
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                      {project.badgeText && (
                        <span
                          className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                          style={{
                            background: `${project.glowColor}`,
                            border: `1px solid ${project.borderColor}`,
                            color: project.accentColor,
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {project.badgeText}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <h3
                    className="text-base font-black mb-1 leading-tight text-white/90 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: project.accentColor, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/40">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md text-white/35"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white/60 hover:text-white transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}11)`,
                          border: `1px solid ${project.borderColor}`,
                          color: project.accentColor,
                        }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/Shivprasadpravindongapure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white/60 hover:text-white transition-all duration-400"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            whileHover={{
              scale: 1.03,
              background: 'rgba(99,102,241,0.08)',
              borderColor: 'rgba(99,102,241,0.3)',
              color: '#818cf8',
            }}
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
