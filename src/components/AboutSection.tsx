import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, education } from '../data/portfolio';
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
      className="card gradient-border"
      style={{ padding: '1.25rem', textAlign: 'center' }}
    >
      <div style={{ fontSize: '1.875rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--primary-light)' }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.25rem' }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

const journeyTimeline = [
  {
    period: '2021 – 2024',
    title: 'Diploma in Computer Engineering',
    institution: 'ICRE, Gargoti',
    detail: 'First Class Distinction (80.81%). Core DSA & Software Fundamentals.',
    icon: '📜',
  },
  {
    period: '2024 – 2027',
    title: 'B.Tech in Computer Engineering',
    institution: 'GCE Jalgaon',
    detail: 'Final-Year Student. Current CGPA: 8.14/10. Full-Stack & AI Systems.',
    icon: '🎓',
  },
  {
    period: 'June 2025 – July 2025',
    title: 'Software Developer Intern',
    institution: 'NTS Nihon Global',
    detail: 'Built MERN stack web modules, JWT auth, and MongoDB REST APIs.',
    icon: '💼',
  },
  {
    period: 'July 2026 – Present',
    title: 'Full Stack MERN Intern',
    institution: 'ModelSuite.ai',
    detail: 'Engineering production web interfaces and scalable backend services.',
    icon: '🧠',
  },
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
            <h2 className="section-title">Who I Am & What I Do</h2>
            <p className="section-subtitle">
              Final-year Computer Engineering student building scalable web applications and AI/ML integrated systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left: Biography & Core Competencies */}
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

              {/* Quick Competency Chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}
              >
                {[
                  'Full-Stack Developer',
                  'MERN Stack Specialist',
                  'AI & Machine Learning',
                  'FastAPI & Python',
                  'Computer Vision (YOLOv8)',
                  '200+ LeetCode DSA',
                  'NPTEL Elite+Gold',
                ].map(fact => (
                  <span key={fact} className="badge">
                    {fact}
                  </span>
                ))}
              </motion.div>

              {/* Stat Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.875rem' }}>
                {personalInfo.stats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </div>

            {/* Right: Academic & Career Timeline */}
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎓 Academic & Career Pathway
              </h3>
              <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                {/* Timeline vertical bar */}
                <div className="timeline-line" style={{ left: '0.875rem' }} />

                {journeyTimeline.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    style={{ position: 'relative', paddingBottom: i < journeyTimeline.length - 1 ? '1.75rem' : 0 }}
                  >
                    {/* Timeline dot */}
                    <div className="timeline-dot" style={{ position: 'absolute', left: '-2.125rem', top: '6px' }} />

                    <div className="card gradient-border" style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>
                          {item.period}
                        </span>
                        <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                      </div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text)', margin: '0 0 0.15rem' }}>
                        {item.title}
                      </h4>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-light)', marginBottom: '0.35rem' }}>
                        {item.institution}
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                        {item.detail}
                      </p>
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
          #about .container > div > div[style*="grid-template-columns: 1.1fr 0.9fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
