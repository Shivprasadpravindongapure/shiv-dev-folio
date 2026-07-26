import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, navLinks, projects } from '../data/portfolio';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: string;
  action: () => void;
  category: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  const commands: CommandItem[] = [
    ...navLinks.map(link => ({
      id: link.href,
      label: `Go to ${link.label}`,
      icon: '→',
      category: 'Navigation',
      action: () => {
        const el = document.querySelector(link.href);
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    })),
    {
      id: 'github',
      label: 'Open GitHub Profile',
      description: 'github.com/Shivprasadpravindongapure',
      icon: '🐙',
      category: 'Social',
      action: () => { window.open(personalInfo.socials.github, '_blank'); onClose(); },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      description: 'linkedin.com/in/shivprasadpravindongapure',
      icon: '💼',
      category: 'Social',
      action: () => { window.open(personalInfo.socials.linkedin, '_blank'); onClose(); },
    },
    {
      id: 'email',
      label: 'Send Email',
      description: personalInfo.email,
      icon: '✉️',
      category: 'Social',
      action: () => { window.open(personalInfo.socials.email); onClose(); },
    },
    {
      id: 'resume',
      label: 'Download Resume',
      icon: '📄',
      category: 'Actions',
      action: () => { window.open(personalInfo.resumeUrl, '_blank'); onClose(); },
    },
    ...projects.slice(0, 4).map(p => ({
      id: `project-${p.id}`,
      label: p.title,
      description: p.description.slice(0, 60) + '...',
      icon: p.image,
      category: 'Projects',
      action: () => {
        const el = document.getElementById('projects');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    })),
  ];

  const filtered = query
    ? commands.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.description?.toLowerCase().includes(query.toLowerCase()) ||
        c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const categories = [...new Set(filtered.map(c => c.category))];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = '';
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)', zIndex: 9990,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-50%)',
              width: '90%', maxWidth: '560px', zIndex: 9991,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
              overflow: 'hidden',
            }}
            role="dialog"
            aria-label="Command Palette"
            aria-modal="true"
          >
            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '1rem', opacity: 0.5 }}>🔍</span>
              <input
                autoFocus
                type="text"
                placeholder="Search commands, pages, projects..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  color: 'var(--text)', fontSize: '0.9375rem', fontFamily: 'var(--font-sans)',
                }}
              />
              <kbd style={{ padding: '0.2rem 0.5rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>ESC</kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '0.5rem' }}>
              {filtered.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  No results for "{query}"
                </div>
              ) : (
                categories.map(cat => (
                  <div key={cat}>
                    <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {cat}
                    </div>
                    {filtered.filter(c => c.category === cat).map(cmd => (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.875rem',
                          width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)',
                          background: 'transparent', border: 'none', cursor: 'pointer',
                          color: 'var(--text)', textAlign: 'left', transition: 'var(--transition)',
                          fontFamily: 'var(--font-sans)',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--card)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                      >
                        <span style={{ fontSize: '1.1rem', width: '1.5rem', textAlign: 'center', flexShrink: 0 }}>{cmd.icon}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{cmd.label}</div>
                          {cmd.description && (
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cmd.description}</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: '0.625rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span><kbd style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '3px', padding: '1px 5px' }}>↵</kbd> Select</span>
              <span><kbd style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '3px', padding: '1px 5px' }}>ESC</kbd> Close</span>
              <span><kbd style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '3px', padding: '1px 5px' }}>⌘K</kbd> Toggle</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
