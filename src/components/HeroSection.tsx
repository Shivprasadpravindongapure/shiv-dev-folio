import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const TYPEWRITER_WORDS = personalInfo.taglines;

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    if (!deleting) {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setWordIndex(i => (i + 1) % TYPEWRITER_WORDS.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, wordIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Animated grid background */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          {/* Left: Text Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Status Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.75rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 'var(--radius-full)', fontSize: '0.8125rem', fontWeight: 600,
                color: '#34d399',
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'ping-slow 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem' }}>
              Hi, I'm{' '}
              <span className="text-gradient-primary">
                {personalInfo.shortName}
              </span>
              <br />
              <span style={{ color: 'var(--text)' }}>
                {displayed}
                <span style={{ borderRight: '3px solid var(--primary)', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2.5rem' }}>
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
                style={{ fontSize: '0.9375rem', padding: '0.8rem 1.75rem' }}
              >
                View My Projects ↗
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-outline"
                style={{ fontSize: '0.9375rem', padding: '0.8rem 1.75rem', textDecoration: 'none' }}
              >
                Download Resume ↓
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {[
                { icon: '🐙', label: 'GitHub', href: personalInfo.socials.github },
                { icon: '💼', label: 'LinkedIn', href: personalInfo.socials.linkedin },
                { icon: '⚡', label: 'LeetCode', href: personalInfo.socials.leetcode },
                { icon: '✉️', label: 'Email', href: personalInfo.socials.email },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '44px', height: '44px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--card)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', textDecoration: 'none',
                    fontSize: '1.1rem', transition: 'var(--transition)',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
              <span style={{ width: '1px', height: '24px', background: 'var(--border)' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                {personalInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Avatar Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="hero-avatar-wrapper"
          >
            <div style={{ position: 'relative' }} className="float">
              {/* Rotating ring */}
              <div style={{
                position: 'absolute', inset: '-16px',
                borderRadius: '50%',
                border: '2px dashed rgba(139,92,246,0.25)',
                animation: 'spin-slow 20s linear infinite',
              }} />
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #8b5cf6, #6366f1, #06b6d4, #8b5cf6)',
                padding: '3px',
                animation: 'spin-slow 8s linear infinite',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg)' }} />
              </div>
              {/* Avatar */}
              <div style={{
                width: '220px', height: '220px', borderRadius: '50%',
                overflow: 'hidden', position: 'relative', zIndex: 1,
                border: '3px solid var(--bg)',
              }}>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating badge: Tech count */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-10px', right: '-20px',
                  background: 'var(--gradient-primary)', borderRadius: 'var(--radius)',
                  padding: '0.4rem 0.75rem', color: 'white',
                  fontSize: '0.75rem', fontWeight: 700,
                  boxShadow: '0 4px 15px rgba(139,92,246,0.4)',
                  whiteSpace: 'nowrap',
                }}
              >
                🚀 20+ Technologies
              </motion.div>

              {/* Floating badge: Experience */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                style={{
                  position: 'absolute', bottom: '-10px', left: '-25px',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '0.4rem 0.75rem',
                  fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)',
                  boxShadow: 'var(--shadow)',
                  whiteSpace: 'nowrap',
                }}
              >
                🏆 15+ Projects Built
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--border), transparent)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: '100%', height: '50%', background: 'var(--primary)', animation: 'scan-line 1.5s ease-in-out infinite' }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-avatar-wrapper { display: none !important; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
