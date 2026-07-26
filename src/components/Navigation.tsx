import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { personalInfo, navLinks } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

const sectionIds = ['about', 'skills', 'experience', 'projects', 'github', 'contact'];

export default function Navigation({ onCommandOpen }: { onCommandOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onCommandOpen();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onCommandOpen]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'var(--transition)',
          background: scrolled
            ? theme === 'dark'
              ? 'rgba(8,8,15,0.85)'
              : 'rgba(250,250,250,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'var(--gradient-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.875rem', color: 'white',
              boxShadow: '0 4px 12px rgba(139,92,246,0.4)',
            }}>
              {personalInfo.initials}
            </div>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
              {personalInfo.shortName}
              <span style={{ color: 'var(--primary)' }}>.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map(link => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ y: -1 }}
                  style={{
                    background: isActive ? 'var(--card)' : 'transparent',
                    border: isActive ? '1px solid var(--border)' : '1px solid transparent',
                    color: isActive ? 'var(--primary-light)' : 'var(--text-secondary)',
                    padding: '0.4rem 0.875rem',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    fontFamily: 'var(--font-sans)',
                    position: 'relative',
                  }}
                >
                  {link.label}
                </motion.button>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            {/* Cmd+K Button */}
            <motion.button
              onClick={onCommandOpen}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 0.875rem',
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', color: 'var(--text-muted)',
                fontSize: '0.8125rem', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                transition: 'var(--transition)',
              }}
              className="cmd-k-btn"
            >
              <span>⌘</span><span>K</span>
            </motion.button>

            <ThemeToggle />

            {/* Resume Button */}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary resume-btn"
              style={{ padding: '0.45rem 1rem', fontSize: '0.875rem', textDecoration: 'none' }}
            >
              Resume
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              style={{
                display: 'none', background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '0.5rem', cursor: 'pointer',
                color: 'var(--text)', fontSize: '1.1rem',
              }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
              background: 'var(--surface)', borderLeft: '1px solid var(--border)',
              zIndex: 999, padding: '5rem 1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.5rem', cursor: 'pointer', color: 'var(--text)', fontSize: '1rem' }}
              >✕</button>
            </div>
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'transparent', border: 'none', color: 'var(--text)',
                  padding: '0.875rem 1rem', borderRadius: 'var(--radius)',
                  fontSize: '1rem', fontWeight: 500, cursor: 'pointer',
                  textAlign: 'left', transition: 'var(--transition)', fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--card)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {link.label}
              </button>
            ))}
            <div style={{ marginTop: 'auto' }}>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .cmd-k-btn { display: none !important; }
          .resume-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
