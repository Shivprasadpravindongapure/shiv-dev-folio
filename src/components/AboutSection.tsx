import { Code2, Database, Cloud, Cpu, Sparkles, Target, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code2, label: 'Full Stack Development', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { icon: Database, label: 'Backend Systems & APIs', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Cloud, label: 'AWS Cloud & DevOps', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Cpu, label: 'AI/ML & Real-Time Apps', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Target, label: '200+ LeetCode Problems', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { icon: GitBranch, label: 'Open Source Contributor', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

const stats = [
  { value: '200+', label: 'DSA Problems' },
  { value: '8.05', label: 'CGPA' },
  { value: '2+', label: 'Internships' },
  { value: '6+', label: 'Projects Built' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.07)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="relative w-72 sm:w-80 md:w-[22rem] lg:w-[26rem] aspect-square">
              {/* Spinning rings */}
              <div className="absolute -inset-6 border border-indigo-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-12 border border-purple-500/10 rounded-full animate-[spin_45s_linear_infinite_reverse]" />

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />

              {/* Photo */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-card">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                <img
                  src="/DEV.JPG"
                  alt="Shivprasad P. Dongapure - Software Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-white/10 shadow-xl z-20"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-bold text-foreground">SDE Intern '25</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-white/10 shadow-xl z-20"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-foreground">Full Stack Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <motion.span
              className="inline-block text-xs font-bold text-indigo-500 uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              👋 About Me
            </motion.span>

            <motion.h2
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shivprasad
              </span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Computer Engineering student at <span className="text-foreground font-semibold">Government College of Engineering, Jalgaon</span> (CGPA: 8.05), with a passion for building scalable, production-ready systems.
              </p>
              <p>
                I specialize in <span className="text-indigo-400 font-semibold">Full-Stack Development</span> (MERN stack), <span className="text-purple-400 font-semibold">AI/ML integration</span> (YOLOv8, LLMs, RAG), and <span className="text-cyan-400 font-semibold">real-time systems</span> (WebSockets, Socket.io). I have interned as a Software Developer at NTS Nihon Global, building REST APIs and React features.
              </p>
              <p>
                Solved <span className="text-orange-400 font-semibold">200+ LeetCode problems</span>, won national-level DSA and programming competitions, and hold AWS Cloud Foundations certification.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-4 gap-4 mb-8 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border/50 hover:border-indigo-500/30 hover:bg-card/80 transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-xs font-medium text-foreground/80 leading-tight">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
