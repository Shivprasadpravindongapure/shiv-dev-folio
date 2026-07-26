import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects } from '../data/portfolio';

type Project = typeof projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', zIndex: 9980, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', maxWidth: '620px', width: '100%',
            maxHeight: '90vh', overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Modal Header */}
          <div style={{
            background: `linear-gradient(135deg, ${project.color})`,
            padding: '2.5rem 2rem 1.5rem',
            borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
            position: 'relative',
          }}>
            <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.3)', border: 'none', borderRadius: 'var(--radius)', width: '32px', height: '32px', color: 'white', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{project.image}</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.25rem' }}>{project.title}</h2>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}>{project.category}</span>
          </div>

          {/* Modal Body */}
          <div style={{ padding: '2rem' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
              {project.longDescription}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Key Features</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {project.highlights.map(h => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--primary)', fontSize: '0.75rem' }}>✓</span> {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Tech Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, textDecoration: 'none', justifyContent: 'center', fontSize: '0.875rem' }}>
                🐙 View Source
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, textDecoration: 'none', justifyContent: 'center', fontSize: '0.875rem' }}>
                  ↗ Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      onClick={() => onSelect(project)}
      className="card gradient-border"
      style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
    >
      {/* Top */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ fontSize: '2rem' }}>{project.image}</div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {project.featured && (
            <span className="badge" style={{ fontSize: '0.6875rem', background: 'rgba(139,92,246,0.12)', color: 'var(--primary-light)', border: '1px solid rgba(139,92,246,0.2)' }}>
              ★ Featured
            </span>
          )}
          <span className="badge badge-outline" style={{ fontSize: '0.6875rem' }}>{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{project.title}</h3>
      <p style={{ fontSize: '0.8625rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
        {project.description.length > 110 ? project.description.slice(0, 110) + '...' : project.description}
      </p>

      {/* Tech */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="badge badge-outline" style={{ fontSize: '0.6875rem' }}>{t}</span>
        ))}
        {project.tech.length > 4 && <span className="badge badge-outline" style={{ fontSize: '0.6875rem' }}>+{project.tech.length - 4}</span>}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.625rem', marginTop: 'auto' }} onClick={e => e.stopPropagation()}>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'var(--transition)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >🐙 Code</a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.8125rem', color: 'var(--primary-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >↗ Live</a>
        )}
        <span style={{ marginLeft: 'auto', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Click for details →</span>
      </div>
    </motion.div>
  );
}

const FILTERS = ['All', 'Featured', 'AI & ML', 'Full Stack', 'Backend'];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    return p.category === filter;
  });

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label">🚀 Projects</div>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">A showcase of real-world applications, AI tools, and open-source contributions.</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              style={{
                padding: '0.4rem 0.875rem',
                borderRadius: 'var(--radius-full)',
                border: filter === f ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: filter === f ? 'var(--accent-glow)' : 'var(--card)',
                color: filter === f ? 'var(--primary-light)' : 'var(--text-secondary)',
                fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer',
                transition: 'var(--transition)', fontFamily: 'var(--font-sans)',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onSelect={setSelected} />
          ))}
        </div>

        {/* Show More */}
        {filtered.length > 6 && (
          <div style={{ textAlign: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {showAll ? '↑ Show Less' : `↓ Show All ${filtered.length} Projects`}
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
