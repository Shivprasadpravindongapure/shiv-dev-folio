import { ExternalLink, Github, Star, GitFork, Code2, Cpu, MessageSquare, Scale, Newspaper, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    icon: Cpu,
    emoji: '🤖',
    title: 'AI Traffic Management System',
    subtitle: 'Machine Learning · Real-Time Systems',
    description: 'Production-grade intelligent traffic control system using YOLOv8 for multi-lane vehicle detection. Designed adaptive signal scheduling algorithms (FCFS, Round-Robin, Emergency Priority) with live monitoring dashboard.',
    tech: ['Python', 'YOLOv8', 'FastAPI', 'React', 'Node.js', 'Socket.io', 'OpenCV'],
    highlights: [
      'Real-time multi-lane vehicle detection via YOLOv8',
      'Adaptive scheduling: FCFS, Round-Robin, Sliding Window',
      'Emergency vehicle priority override system',
      'React + Socket.io live monitoring dashboard',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/AI-Based-Intelligent-Traffic-Managment-System',
    liveLink: null,
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    category: 'AI/ML',
    featured: true,
    gradient: 'from-violet-600/25 via-purple-600/15 to-transparent',
    borderGlow: 'hover:border-violet-500/50',
    iconBg: 'from-violet-500 to-purple-600',
    badge: '🔥 Latest',
  },
  {
    id: 2,
    icon: MessageSquare,
    emoji: '💬',
    title: 'LinkLoom',
    subtitle: 'Full-Stack · WebRTC · Real-Time',
    description: 'Full-stack real-time messaging and video calling platform. Built WebSocket-driven messaging, Stream API-powered video calls, JWT auth, and reactive state with React Query and Zustand.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stream API', 'WebRTC', 'JWT', 'Zustand'],
    highlights: [
      'HD video calling via Stream Video API + WebRTC',
      'Real-time messaging with WebSocket channels',
      'JWT-based secure authentication flow',
      'React Query + Zustand for efficient state management',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/LinkLoom',
    liveLink: 'https://link-loom-puce.vercel.app',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    category: 'Full-Stack',
    featured: true,
    gradient: 'from-blue-600/25 via-indigo-600/15 to-transparent',
    borderGlow: 'hover:border-blue-500/50',
    iconBg: 'from-blue-500 to-indigo-600',
    badge: '🚀 Live',
  },
  {
    id: 3,
    icon: MessageSquare,
    emoji: '⚡',
    title: 'Chatify',
    subtitle: 'MERN Stack · WebSocket · Encryption',
    description: 'Scalable real-time chat platform with end-to-end encryption, optimized WebSocket communication, and sub-100ms message latency. Features online presence tracking and message persistence.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    highlights: [
      'Sub-100ms real-time message delivery',
      'End-to-end encrypted messaging',
      'Online/offline presence tracking',
      'JWT-based auth with session management',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/chat-app',
    liveLink: 'https://chat-app-eight-amber.vercel.app',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    category: 'Full-Stack',
    featured: false,
    gradient: 'from-emerald-600/25 via-teal-600/15 to-transparent',
    borderGlow: 'hover:border-emerald-500/50',
    iconBg: 'from-emerald-500 to-teal-600',
    badge: '🚀 Live',
  },
  {
    id: 4,
    icon: Scale,
    emoji: '⚖️',
    title: 'Nyay AI – Legal Assistant',
    subtitle: 'AI/ML · LLM · RAG Architecture',
    description: 'AI-powered legal assistant using Flask and LLaMA LLM with RAG (Retrieval-Augmented Generation) architecture. Vector-based retrieval system for context-aware, accurate legal guidance.',
    tech: ['Python', 'Flask', 'LLaMA', 'RAG', 'Vector DB', 'NLP', 'LangChain'],
    highlights: [
      'LLaMA-powered LLM with RAG architecture',
      'Vector-based retrieval for context accuracy',
      'Legal domain fine-tuning and prompt engineering',
      'Apache 2.0 Open Source License',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/Nyay-AI-for-legal-assistant',
    liveLink: null,
    stars: 1,
    forks: 0,
    language: 'Python',
    category: 'AI/ML',
    featured: true,
    gradient: 'from-amber-600/25 via-orange-600/15 to-transparent',
    borderGlow: 'hover:border-amber-500/50',
    iconBg: 'from-amber-500 to-orange-600',
    badge: '⭐ Starred',
  },
  {
    id: 5,
    icon: Newspaper,
    emoji: '📰',
    title: 'NewsFeed Django',
    subtitle: 'Django · REST API · Bootstrap',
    description: 'Dynamic news aggregation app fetching real-time articles from NewsAPI.org. Category-based browsing (Cricket, Politics, Tech, Sports) with a clean, responsive Bootstrap/Tailwind UI.',
    tech: ['Python', 'Django', 'NewsAPI', 'Bootstrap', 'Tailwind CSS', 'REST API'],
    highlights: [
      'Live news from 70+ sources via NewsAPI',
      'Multi-category browsing with filters',
      'Django ORM with cached API responses',
      'Fully responsive Bootstrap/Tailwind UI',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/NewsFeed-Django',
    liveLink: null,
    stars: 1,
    forks: 0,
    language: 'HTML',
    category: 'Full-Stack',
    featured: false,
    gradient: 'from-rose-600/25 via-pink-600/15 to-transparent',
    borderGlow: 'hover:border-rose-500/50',
    iconBg: 'from-rose-500 to-pink-600',
    badge: '⭐ Starred',
  },
  {
    id: 6,
    icon: Code2,
    emoji: '🔬',
    title: 'FOSSEE Workshop Booking',
    subtitle: 'React · TypeScript · Responsive UI',
    description: 'Full-featured workshop booking portal with multi-step registration, seat availability management, and admin dashboard. Built mobile-first with TypeScript and optimized for accessibility.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'REST API', 'SEO'],
    highlights: [
      'Multi-step workshop registration flow',
      'Real-time seat availability tracking',
      'Admin dashboard for workshop management',
      'Mobile-first, WCAG-accessible design',
    ],
    githubLink: 'https://github.com/Shivprasadpravindongapure/workshop',
    liveLink: null,
    stars: 0,
    forks: 0,
    language: 'Python',
    category: 'Full-Stack',
    featured: false,
    gradient: 'from-cyan-600/25 via-sky-600/15 to-transparent',
    borderGlow: 'hover:border-cyan-500/50',
    iconBg: 'from-cyan-500 to-sky-600',
    badge: null,
  },
];

const categories = ['All', 'AI/ML', 'Full-Stack'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            className="inline-block text-xs font-bold text-indigo-500 uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ⚡ Featured Work
          </motion.span>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Selected{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real-world systems built with production-grade engineering — from AI traffic control to real-time communication platforms.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_4px_15px_rgba(99,102,241,0.4)]'
                    : 'bg-card/60 text-muted-foreground border border-border/50 hover:border-indigo-500/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group relative rounded-2xl border border-border/50 ${project.borderGlow} bg-card/70 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 overflow-hidden flex flex-col`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Top row: Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-xl">{project.emoji}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {project.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        {project.stars}
                      </span>
                    )}
                    {project.liveLink && (
                      <span className="flex items-center gap-1 text-emerald-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & subtitle */}
                <h3 className="text-lg font-bold text-foreground font-heading mb-1 leading-tight group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground/80">
                      <span className="mt-1.5 w-1 h-1 bg-indigo-400 rounded-full flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 text-xs font-medium bg-secondary/60 text-muted-foreground rounded-md border border-border/40 hover:border-indigo-500/30 transition-colors">
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-foreground/5 border border-border/50 text-sm font-semibold text-foreground hover:bg-foreground/10 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:shadow-[0_4px_15px_rgba(99,102,241,0.4)] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/Shivprasadpravindongapure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-indigo-500/40 hover:bg-card/80 transition-all duration-500 font-semibold group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
            <Zap className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
