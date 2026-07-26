import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label">🏆 Achievements</div>
          <h2 className="section-title">Milestones & Certifications</h2>
          <p className="section-subtitle">Key accomplishments and recognized qualifications across my developer journey.</p>
        </motion.div>

        {/* Achievement Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card gradient-border"
              style={{ padding: '1.5rem' }}
            >
              {/* Icon + stat */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: 'var(--radius)',
                  background: `linear-gradient(135deg, ${a.color})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                }}>
                  {a.icon}
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.25rem',
                  background: `linear-gradient(135deg, ${a.color})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {a.stat}
                </span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--text)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📜 Certifications
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="card"
                style={{ padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none' }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{cert.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text)', marginBottom: '0.25rem' }}>{cert.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cert.issuer}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{cert.date}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
