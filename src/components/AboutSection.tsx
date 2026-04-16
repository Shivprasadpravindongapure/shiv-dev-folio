import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Target, GitBranch, Briefcase, GraduationCap } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full Stack Development', color: 'text-indigo-400', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.2)' },
  { icon: Database, label: 'Backend Systems & APIs', color: 'text-blue-400', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)' },
  { icon: Cloud, label: 'AWS Cloud & DevOps', color: 'text-cyan-400', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)' },
  { icon: Cpu, label: 'AI/ML & Real-Time Apps', color: 'text-purple-400', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)' },
  { icon: Target, label: '200+ LeetCode Problems', color: 'text-orange-400', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.2)' },
  { icon: GitBranch, label: 'Open Source Contributor', color: 'text-emerald-400', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)' },
];

const stats = [
  { value: '200+', label: 'DSA Problems', suffix: '' },
  { value: '8.05', label: 'CGPA', suffix: '' },
  { value: '2+', label: 'Internships', suffix: '' },
  { value: '6+', label: 'Projects', suffix: '' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 5%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span className="text-indigo-400">✦</span>
            About Me
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Photo + floating decorations */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.92, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-72 sm:w-80 md:w-[22rem] aspect-square">
              {/* Orbit rings */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{
                  border: '1px solid rgba(99,102,241,0.15)',
                  animation: 'orbitForward 30s linear infinite',
                }}
              />
              <div
                className="absolute -inset-16 rounded-full pointer-events-none"
                style={{
                  border: '1px dashed rgba(168,85,247,0.08)',
                  animation: 'orbitReverse 50s linear infinite',
                }}
              />

              {/* Glow blob */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Photo frame */}
              <div
                className="relative w-full h-full rounded-[2rem] overflow-hidden"
                style={{
                  border: '1px solid rgba(99,102,241,0.2)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.15), 0 0 0 1px rgba(255,255,255,0.04)',
                }}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer z-10 pointer-events-none" />
                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent z-10 pointer-events-none mix-blend-overlay" />
                <img
                  src="/DEV.JPG"
                  alt="Shivprasad P. Dongapure — Software Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge 1 */}
              <motion.div
                className="absolute -top-4 -right-8 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                  style={{
                    background: 'rgba(10,12,24,0.9)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px rgba(16,185,129,0.8)' }} />
                  <span className="text-xs font-bold text-white/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SDE Intern '25</span>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute -bottom-4 -left-8 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div
                  className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                  style={{
                    background: 'rgba(10,12,24,0.9)',
                    border: '1px solid rgba(168,85,247,0.25)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)',
                  }}
                >
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-xs font-bold text-white/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Full Stack Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1] mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                I build{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  scalable systems
                </span>
                <br />
                <span className="text-white/50 text-3xl">for the real world</span>
              </h2>

              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>
                  Computer Engineering student at{' '}
                  <span className="text-white/90 font-semibold">Government College of Engineering, Jalgaon</span>{' '}
                  (CGPA: <span className="text-indigo-400 font-bold">8.05</span>), with a passion for building scalable, production-ready systems.
                </p>
                <p>
                  I specialize in{' '}
                  <span className="text-indigo-400 font-semibold">Full-Stack Development</span> (MERN stack),{' '}
                  <span className="text-purple-400 font-semibold">AI/ML integration</span> (YOLOv8, LLMs, RAG), and{' '}
                  <span className="text-cyan-400 font-semibold">real-time systems</span> (WebSockets, Socket.io). Interned as a Software Developer at NTS Nihon Global.
                </p>
                <p>
                  Solved <span className="text-orange-400 font-semibold">200+ LeetCode problems</span>, won national-level DSA competitions, and hold{' '}
                  <span className="text-sky-400 font-semibold">AWS Cloud Foundations certification</span>.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-4 rounded-2xl cursor-default"
                  style={{
                    background: 'rgba(99,102,241,0.06)',
                    border: '1px solid rgba(99,102,241,0.12)',
                  }}
                >
                  <div
                    className="text-xl font-black mb-0.5"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/30 font-medium uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2.5 p-3 rounded-xl cursor-default transition-all duration-300"
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-white/70 leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
