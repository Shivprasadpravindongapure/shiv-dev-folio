import { Code, Globe, Database, Cloud, BookOpen, Layers, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    color: 'from-indigo-500 to-blue-500',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    skills: ['Python', 'JavaScript', 'C++', 'Java', 'SQL'],
  },
  {
    icon: Globe,
    title: 'Frontend',
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'],
  },
  {
    icon: Database,
    title: 'Backend',
    color: 'from-violet-500 to-purple-500',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT Auth', 'WebSockets'],
  },
  {
    icon: Cloud,
    title: 'Databases',
    color: 'from-cyan-500 to-teal-500',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    icon: BookOpen,
    title: 'Cloud & DevOps',
    color: 'from-sky-500 to-blue-500',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    icon: Layers,
    title: 'AI/ML',
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    skills: ['YOLOv8', 'LLM/RAG', 'LangChain', 'OpenCV', 'Prompt Engineering'],
  },
  {
    icon: Cpu,
    title: 'Real-Time',
    color: 'from-emerald-500 to-green-500',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    skills: ['Socket.io', 'WebRTC', 'MQTT', 'Stream API', 'WebSocket'],
  },
  {
    icon: Zap,
    title: 'Core CS',
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'SDLC', 'Agile'],
  },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
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
            🛠️ Technical Skills
          </motion.span>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Skills &{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A production-ready toolkit built across full-stack development, AI systems, cloud infrastructure, and real-time applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group p-5 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Subtle inner glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl ${category.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground font-heading">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-lg border border-border/60 hover:border-indigo-500/40 hover:text-foreground hover:bg-secondary/80 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
