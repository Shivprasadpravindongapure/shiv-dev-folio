import { motion } from 'framer-motion';
import { Trophy, BookOpen, Cloud, Code2, Award, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '1st Place — National-Level 36-Hour Hackathon',
    description: 'Won first place at a national-level 36-hour hackathon building an AI project under pressure.',
    badge: '🥇 1st Place',
    accent: '#F59E0B',
    glow: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: Award,
    title: '2nd Prize — National-Level DSA Competition',
    description: 'Secured 2nd prize in a national-level Data Structures & Algorithms competition against top engineering students.',
    badge: '🥈 2nd Prize',
    accent: '#818CF8',
    glow: 'rgba(129,140,248,0.1)',
    border: 'rgba(129,140,248,0.2)',
  },
  {
    icon: BookOpen,
    title: 'NPTEL Elite+Gold — Machine Learning & Deep Learning',
    description: 'Achieved Elite+Gold distinction in NPTEL Machine Learning and Deep Learning — top 5% nationally.',
    badge: '⭐ Elite+Gold',
    accent: '#A78BFA',
    glow: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    icon: Zap,
    title: 'NPTEL Elite — Programming in Java',
    description: 'Earned Elite distinction in NPTEL Programming in Java certification.',
    badge: '⭐ Elite',
    accent: '#C4B5FD',
    glow: 'rgba(196,181,253,0.1)',
    border: 'rgba(196,181,253,0.2)',
  },
  {
    icon: Cloud,
    title: 'AWS Academy Cloud Foundations Badge',
    description: 'Earned AWS Academy Cloud Foundations certification (2026), demonstrating cloud computing proficiency.',
    badge: '☁ AWS 2026',
    accent: '#38BDF8',
    glow: 'rgba(56,189,248,0.1)',
    border: 'rgba(56,189,248,0.2)',
  },
  {
    icon: Code2,
    title: '200+ DSA Problems on LeetCode',
    description: 'Solved 200+ problems on LeetCode across Arrays, Trees, Graphs, DP, and competitive programming.',
    badge: '🔢 LeetCode',
    accent: '#FB923C',
    glow: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.2)',
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-28 overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots-subtle opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(245,158,11,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span>✦</span>
              Recognition
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Achievements &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Certifications
            </span>
          </motion.h2>
          <motion.p
            className="text-base max-w-md mx-auto"
            style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            National-level recognitions, competitive excellence, and certified cloud expertise.
          </motion.p>
        </div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: '#10101A',
                border: '1px solid rgba(124,110,250,0.1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -4,
                borderColor: ach.border,
                boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 24px ${ach.glow}`,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: `linear-gradient(90deg, transparent, ${ach.accent}, transparent)`,
                }}
              />

              {/* Hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${ach.glow}, transparent)` }}
              />

              <div className="relative z-10 p-6">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: ach.glow, border: `1px solid ${ach.border}` }}
                  >
                    <ach.icon className="w-5 h-5" style={{ color: ach.accent }} />
                  </div>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex-shrink-0"
                    style={{
                      background: ach.glow,
                      border: `1px solid ${ach.border}`,
                      color: ach.accent,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {ach.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-bold leading-snug mb-2 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
                >
                  {ach.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
                >
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
