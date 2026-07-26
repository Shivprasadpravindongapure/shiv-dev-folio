import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

function StatCard({ stat, index }: { stat: typeof personalInfo.stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useAnimatedCounter(stat.value, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
      style={{ padding: '1.5rem', textAlign: 'center' }}
    >
      <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--primary-light)' }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.25rem' }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

const timeline = [
  { year: '2022', event: 'Started B.E. in Computer Engineering', icon: '🎓' },
  { year: '2024', event: 'Built first full-stack project — LinkLoom (MERN + WebRTC)', icon: '🚀' },
  { year: '2025', event: 'Ventured into AI/ML — shipped AI Traffic Management System', icon: '🤖' },
  { year: '2025', event: 'Joined DoCodeAgo as Full Stack Developer', icon: '💼' },
  { year: '2026', event: 'Building AI-powered SaaS products & open source tools', icon: '⚡' },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.12 } }),
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">✦ About Me</div>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-subtitle">
              A passionate builder who loves turning complex problems into elegant, user-friendly solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left: Story + Stats */}
            <div>
              {personalInfo.about.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.9375rem' }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1.5rem' }}
              >
                {['Full Stack Dev', 'AI Enthusiast', 'Open Source Contributor', 'TypeScript Lover', 'React Expert', 'Python Dev'].map(fact => (
                  <span key={fact} className="badge">
                    {fact}
                  </span>
                ))}
              </motion.div>

              {/* Stat Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.875rem', marginTop: '2rem' }}>
                {personalInfo.stats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '1.75rem', color: 'var(--text)' }}>
                My Journey
              </h3>
              <div style={{ position: 'relative', paddingLeft: '3rem' }}>
                {/* Timeline line */}
                <div className="timeline-line" />

                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    style={{ position: 'relative', paddingBottom: i < timeline.length - 1 ? '2rem' : 0 }}
                  >
                    {/* Dot */}
                    <div className="timeline-dot" style={{ position: 'absolute', left: '-2.875rem', top: '4px' }} />

                    <div className="card" style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{item.year}</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
