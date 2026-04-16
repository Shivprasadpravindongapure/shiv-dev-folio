import { motion } from 'framer-motion';
import { Trophy, Code2, Award, BookOpen, Cloud, Zap, Star } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: '200+ DSA Problems',
    description: 'Solved 200+ problems on LeetCode covering Arrays, Trees, Graphs, Dynamic Programming, and more.',
    badge: 'LeetCode · Expert',
    accentColor: '#fb923c',
    glowColor: 'rgba(251,146,60,0.12)',
    borderColor: 'rgba(251,146,60,0.2)',
  },
  {
    icon: Trophy,
    title: '2nd Prize – National DSA Competition',
    description: 'Secured 2nd Prize in a National Level Data Structures & Algorithms competition, competing against top engineering students.',
    badge: 'National Level',
    accentColor: '#fbbf24',
    glowColor: 'rgba(251,191,36,0.12)',
    borderColor: 'rgba(251,191,36,0.2)',
  },
  {
    icon: Award,
    title: '2nd Prize – C Programming & Project',
    description: 'Awarded 2nd Prize in a national-level C Programming and Project competition, showcasing deep systems-level understanding.',
    badge: 'National Level',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.12)',
    borderColor: 'rgba(245,158,11,0.2)',
  },
  {
    icon: Zap,
    title: 'National Level Hackathon',
    description: 'Participated in an intensive 36-hour National Level Hackathon, building and pitching a product under pressure.',
    badge: '36-Hour Sprint',
    accentColor: '#818cf8',
    glowColor: 'rgba(129,140,248,0.12)',
    borderColor: 'rgba(129,140,248,0.2)',
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Foundations Certified',
    description: 'Earned AWS Academy Cloud Foundations certification (2026), demonstrating proficiency in cloud computing concepts.',
    badge: 'AWS · 2026',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.12)',
    borderColor: 'rgba(56,189,248,0.2)',
  },
  {
    icon: BookOpen,
    title: 'NPTEL Elite + Gold',
    description: 'Achieved Elite + Gold distinction in NPTEL courses: Machine Learning, Deep Learning, and Java — top 5% nationally.',
    badge: 'Elite + Gold',
    accentColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.12)',
    borderColor: 'rgba(167,139,250,0.2)',
  },
];

export default function TechnicalAchievements() {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 4%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.04)_0%,transparent_60%)] pointer-events-none" />

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
              Recognition
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
            Achievements &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Milestones
            </span>
          </motion.h2>
          <motion.p
            className="text-white/40 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            National-level recognitions, competitive programming excellence, and certified cloud expertise.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{
                y: -6,
                borderColor: ach.borderColor,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${ach.glowColor}`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${ach.accentColor}, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${ach.glowColor}, transparent)` }}
              />

              <div className="relative z-10 p-6">
                {/* Icon row */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: ach.glowColor, border: `1px solid ${ach.borderColor}` }}
                  >
                    <ach.icon className="w-5 h-5" style={{ color: ach.accentColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-black leading-tight mb-2 text-white/85 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {ach.title}
                    </h3>
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: ach.glowColor,
                        border: `1px solid ${ach.borderColor}`,
                        color: ach.accentColor,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      <Star className="w-2.5 h-2.5 fill-current" />
                      {ach.badge}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
