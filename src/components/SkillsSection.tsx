import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

function SkillBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        style={{ height: '100%', background: 'var(--gradient-primary)', borderRadius: '2px' }}
      />
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const activeSkills = skills.find(s => s.category === activeCategory)!;

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">⚡ Skills</div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">A curated stack of technologies I use to ship production-grade applications.</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {skills.map(s => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === s.category ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeCategory === s.category ? 'var(--accent-glow)' : 'var(--card)',
                color: activeCategory === s.category ? 'var(--primary-light)' : 'var(--text-secondary)',
                fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
                transition: 'var(--transition)', fontFamily: 'var(--font-sans)',
              }}
            >
              <span>{s.emoji}</span> {s.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}
        >
          {activeSkills.items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card gradient-border"
              style={{ padding: '1.25rem 1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <span style={{ fontSize: '1.375rem' }}>{skill.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text)' }}>{skill.name}</span>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontWeight: 600 }}>
                  {skill.level}%
                </span>
              </div>
              <SkillBar level={skill.level} inView={inView} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.25rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
            Also experienced with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem' }}>
            {['Next.js', 'GraphQL', 'AWS', 'Jest', 'Prisma', 'Redux', 'Three.js', 'Electron', 'Flutter'].map(tech => (
              <span key={tech} className="badge badge-outline" style={{ fontSize: '0.8125rem', padding: '0.3rem 0.75rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
