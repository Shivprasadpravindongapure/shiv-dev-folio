import { motion } from 'framer-motion';
import { Code2, Trophy, Terminal, Flame, Target, TrendingUp } from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    handle: 'ShivprasadPravinDongapure',
    href: 'https://leetcode.com/u/ShivprasadPravinDongapure/',
    icon: Code2,
    accentColor: '#fb923c',
    glowColor: 'rgba(251,146,60,0.12)',
    borderColor: 'rgba(251,146,60,0.2)',
    primaryStat: '200+',
    primaryLabel: 'Problems Solved',
    stats: [
      { label: 'Easy', value: '85', color: '#34d399' },
      { label: 'Medium', value: '90', color: '#fbbf24' },
      { label: 'Hard', value: '25', color: '#f87171' },
    ],
    extras: [
      { label: 'Global Ranking', value: '#120,000' },
      { label: 'Topics Covered', value: '15+' },
    ],
  },
  {
    name: 'Codeforces',
    handle: 'BitShiv',
    href: 'https://codeforces.com/profile/BitShiv',
    icon: Trophy,
    accentColor: '#60a5fa',
    glowColor: 'rgba(96,165,250,0.12)',
    borderColor: 'rgba(96,165,250,0.2)',
    primaryStat: '1456',
    primaryLabel: 'Rating',
    stats: [
      { label: 'Rank', value: 'Specialist', color: '#22d3ee' },
      { label: 'Max Rating', value: '1523', color: '#60a5fa' },
      { label: 'Contests', value: '25', color: '#818cf8' },
    ],
    extras: [
      { label: 'Division', value: 'Div. 2' },
      { label: 'Problems AC', value: '180+' },
    ],
  },
  {
    name: 'Coding Ninjas',
    handle: 'Shivprasad',
    href: 'https://www.naukri.com/code360/profile/c7ae98d1-8ec2-494b-bf10-d4ebd0b7fd1e',
    icon: Terminal,
    accentColor: '#34d399',
    glowColor: 'rgba(52,211,153,0.12)',
    borderColor: 'rgba(52,211,153,0.2)',
    primaryStat: '85+',
    primaryLabel: 'Problems Solved',
    stats: [
      { label: 'Rank', value: 'Advanced', color: '#34d399' },
      { label: 'Points', value: '1250', color: '#a78bfa' },
      { label: 'Day Streak', value: '7', color: '#fb923c' },
    ],
    extras: [
      { label: 'Contests', value: '12' },
      { label: 'Certifications', value: '3' },
    ],
  },
];

export default function CodingStats() {
  return (
    <section id="coding-stats" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 4%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div className="flex justify-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-badge">
              <span className="text-indigo-400">✦</span>
              Coding Journey
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Competitive{' '}
            <span style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 50%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Programming
            </span>
          </motion.h2>
          <motion.p className="text-white/40 max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            My competitive programming journey across major platforms.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              className="group relative rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{
                y: -6,
                borderColor: platform.borderColor,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${platform.glowColor}`,
              }}
            >
              {/* Top accent */}
              <div className="h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${platform.accentColor}, transparent)` }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${platform.glowColor}, transparent)` }} />

              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: platform.glowColor, border: `1px solid ${platform.borderColor}` }}>
                      <platform.icon className="w-5 h-5" style={{ color: platform.accentColor }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white/90" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {platform.name}
                      </h3>
                      <p className="text-xs text-white/30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        @{platform.handle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary stat */}
                <div className="text-center py-4 mb-5 rounded-2xl"
                  style={{ background: platform.glowColor, border: `1px solid ${platform.borderColor}` }}>
                  <div className="text-4xl font-black mb-0.5"
                    style={{ fontFamily: "'Syne', sans-serif", color: platform.accentColor }}>
                    {platform.primaryStat}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {platform.primaryLabel}
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {platform.stats.map((stat) => (
                    <div key={stat.label} className="text-center py-2.5 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="text-sm font-bold mb-0.5" style={{ color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/25 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Extras */}
                <div className="space-y-2 mb-5">
                  {platform.extras.map((extra) => (
                    <div key={extra.label} className="flex items-center justify-between text-xs">
                      <span className="text-white/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{extra.label}</span>
                      <span className="font-semibold text-white/60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{extra.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl text-center text-xs font-bold transition-all duration-300"
                  style={{
                    background: platform.glowColor,
                    border: `1px solid ${platform.borderColor}`,
                    color: platform.accentColor,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  View {platform.name} Profile →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
