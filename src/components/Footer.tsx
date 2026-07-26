import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../data/portfolio';

const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: personalInfo.socials.github },
  { icon: '💼', label: 'LinkedIn', href: personalInfo.socials.linkedin },
  { icon: '✉️', label: 'Email', href: personalInfo.socials.email },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      padding: '3rem 0 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%,-50%)',
        width: '400px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.875rem', color: 'white',
              }}>SP</div>
              <span style={{ fontWeight: 700, fontSize: '1.0625rem', letterSpacing: '-0.02em' }}>
                Shivprasad<span style={{ color: 'var(--primary)' }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '220px' }}>
              Building premium web experiences & AI-powered products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--text-secondary)', fontSize: '0.875rem',
                    textAlign: 'left', padding: 0,
                    fontFamily: 'var(--font-sans)', transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    color: 'var(--text-secondary)', fontSize: '0.875rem',
                    textDecoration: 'none', transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            © {year} Shivprasad Pravindongapure. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with <span style={{ color: '#e25555' }}>♥</span> in TypeScript & React
          </p>
        </div>
      </div>
    </footer>
  );
}
