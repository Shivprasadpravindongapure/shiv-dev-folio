import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolio';

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label">💼 Experience</div>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-subtitle">Professional experience and meaningful projects that shaped my expertise.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '3.5rem' }}>
          {/* Vertical line */}
          <div className="timeline-line" style={{ left: '1.25rem' }} />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ position: 'relative', marginBottom: i < experience.length - 1 ? '2.5rem' : 0 }}
            >
              {/* Dot */}
              <div className="timeline-dot" style={{
                position: 'absolute', left: '-3.25rem', top: '1.25rem',
                background: exp.color,
                boxShadow: `0 0 0 4px rgba(0,0,0,0.5), 0 0 16px ${exp.color}40`,
              }} />

              <div className="card gradient-border" style={{ padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
                      <span style={{ fontSize: '1.375rem' }}>{exp.logo}</span>
                      <div>
                        <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text)', margin: 0 }}>
                          {exp.role}
                        </h3>
                        <p style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
                    <span className="badge" style={{ background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                      {exp.type}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul style={{ listStyle: 'none', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.achievements.map((ach, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: '1px' }}>▸</span>
                      {ach}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tech.map(t => (
                    <span key={t} className="badge badge-outline" style={{ fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
