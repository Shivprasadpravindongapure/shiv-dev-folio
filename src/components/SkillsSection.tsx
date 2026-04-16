import { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    emoji: '💻',
    color: '#818cf8',
    glowColor: 'rgba(129,140,248,0.15)',
    borderColor: 'rgba(129,140,248,0.2)',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'C++', level: 82 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    emoji: '🎨',
    color: '#f472b6',
    glowColor: 'rgba(244,114,182,0.15)',
    borderColor: 'rgba(244,114,182,0.2)',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 78 },
      { name: 'TypeScript', level: 82 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.15)',
    borderColor: 'rgba(167,139,250,0.2)',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 88 },
      { name: 'Django', level: 80 },
      { name: 'REST APIs', level: 92 },
      { name: 'WebSockets', level: 85 },
    ],
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    color: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.15)',
    borderColor: 'rgba(34,211,238,0.2)',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MySQL', level: 80 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    emoji: '☁️',
    color: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.15)',
    borderColor: 'rgba(56,189,248,0.2)',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 75 },
      { name: 'Docker', level: 72 },
      { name: 'Git / GitHub', level: 92 },
      { name: 'CI/CD', level: 68 },
    ],
  },
  {
    title: 'AI / ML',
    emoji: '🤖',
    color: '#fb923c',
    glowColor: 'rgba(251,146,60,0.15)',
    borderColor: 'rgba(251,146,60,0.2)',
    skills: [
      { name: 'YOLOv8', level: 85 },
      { name: 'LangChain / RAG', level: 78 },
      { name: 'OpenCV', level: 80 },
      { name: 'Prompt Engineering', level: 82 },
    ],
  },
  {
    title: 'Real-Time',
    emoji: '⚡',
    color: '#34d399',
    glowColor: 'rgba(52,211,153,0.15)',
    borderColor: 'rgba(52,211,153,0.2)',
    skills: [
      { name: 'Socket.io', level: 90 },
      { name: 'WebRTC', level: 75 },
      { name: 'MQTT', level: 70 },
      { name: 'Stream API', level: 78 },
    ],
  },
  {
    title: 'Core CS',
    emoji: '🧠',
    color: '#f87171',
    glowColor: 'rgba(248,113,113,0.15)',
    borderColor: 'rgba(248,113,113,0.2)',
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 88 },
      { name: 'System Design', level: 80 },
      { name: 'OOP', level: 88 },
    ],
  },
];

const techTags = ['Python', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'YOLOv8', 'Socket.io', 'PostgreSQL', 'TypeScript', 'LangChain', 'Django', 'Redis', 'WebRTC', 'OpenCV'];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 4%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span className="text-indigo-400">✦</span>
              Technical Arsenal
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
            Skills &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Expertise
            </span>
          </motion.h2>
          <motion.p
            className="text-white/40 max-w-xl mx-auto text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A production-ready toolkit built across full-stack, AI systems, cloud, and real-time applications.
          </motion.p>
        </div>

        {/* Bento Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6 mb-10">
          {/* Left: Category list */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 group"
                style={{
                  background: activeCategory === i ? `rgba(${cat.color === '#818cf8' ? '129,140,248' : '255,255,255'},0.07)` : 'rgba(255,255,255,0.02)',
                  border: activeCategory === i ? `1px solid ${cat.borderColor}` : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: activeCategory === i ? `0 0 20px ${cat.glowColor}` : 'none',
                }}
                whileHover={{ scale: 1.01, x: 2 }}
              >
                <span className="text-xl">{cat.emoji}</span>
                <span
                  className="font-semibold text-sm"
                  style={{
                    color: activeCategory === i ? cat.color : 'rgba(255,255,255,0.5)',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {cat.title}
                </span>
                {activeCategory === i && (
                  <motion.div
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                    layoutId="active-skill-dot"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div
            key={activeCategory}
            className="p-8 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${active.glowColor}, rgba(255,255,255,0.02))`,
              border: `1px solid ${active.borderColor}`,
              boxShadow: `0 0 40px ${active.glowColor}`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{active.emoji}</span>
              <h3
                className="text-2xl font-black"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: active.color,
                }}
              >
                {active.title}
              </h3>
            </div>
            <div className="space-y-6">
              {active.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white/80" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {skill.name}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: active.color, fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      style={{ background: `linear-gradient(90deg, ${active.color}, ${active.color}99)` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: i * 0.1, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div
                        className="absolute top-0 right-0 w-2 h-full rounded-full"
                        style={{ background: active.color, boxShadow: `0 0 8px ${active.color}` }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech tag cloud */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-white/25 uppercase tracking-widest mb-5 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/40 cursor-default transition-all duration-300 hover:text-white/80"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                whileHover={{ scale: 1.08, background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.25)', color: '#818cf8' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
