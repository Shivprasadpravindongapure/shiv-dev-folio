import { motion } from 'framer-motion';
import { Trophy, Code2, Award, BookOpen, Cloud, Target, Zap, Star } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: '200+ DSA Problems',
    description: 'Solved 200+ problems on LeetCode covering Arrays, Trees, Graphs, Dynamic Programming, and more.',
    badge: 'LeetCode',
    color: 'from-orange-500 to-amber-500',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
  {
    icon: Trophy,
    title: '2nd Prize – National DSA Competition',
    description: 'Secured 2nd Prize in a National Level Data Structures & Algorithms competition, competing against top engineering students.',
    badge: 'National Level',
    color: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Award,
    title: '2nd Prize – C Programming & Project',
    description: 'Awarded 2nd Prize in a national-level C Programming and Project competition, showcasing deep systems-level understanding.',
    badge: 'National Level',
    color: 'from-amber-500 to-yellow-500',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
  {
    icon: Zap,
    title: 'National Level Hackathon',
    description: 'Participated in an intensive 36-hour National Level Hackathon, building and pitching a competing product under pressure.',
    badge: '36-Hour Sprint',
    color: 'from-indigo-500 to-purple-500',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Foundations Certified',
    description: 'Earned AWS Academy Cloud Foundations certification (2026), demonstrating proficiency in cloud computing concepts and services.',
    badge: 'AWS · 2026',
    color: 'from-sky-500 to-blue-500',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-400',
  },
  {
    icon: BookOpen,
    title: 'NPTEL Elite + Gold',
    description: 'Achieved Elite + Gold distinction in NPTEL courses: Machine Learning, Deep Learning, and Java — top 5% nationally.',
    badge: 'Elite + Gold',
    color: 'from-purple-500 to-violet-500',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
];

const TechnicalAchievements = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
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
            🏆 Recognition
          </motion.span>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Achievements &{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Milestones
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            National-level recognitions, competitive programming excellence, and certified cloud expertise.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border/50 hover:border-transparent bg-card/70 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] overflow-hidden"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              {/* Gradient top accent */}
              <div className={`h-1 bg-gradient-to-r ${ach.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ach.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />

              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${ach.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-400`}>
                    <ach.icon className={`w-5 h-5 ${ach.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground font-heading leading-tight mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${ach.color} bg-opacity-10 text-white/90`}>
                      <Star className="w-3 h-3 fill-current" />
                      {ach.badge}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalAchievements;
