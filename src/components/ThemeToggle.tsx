import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="btn btn-ghost"
      style={{
        width: '40px',
        height: '40px',
        padding: '0',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        background: 'var(--card)',
        color: 'var(--text-secondary)',
        transition: 'var(--transition)',
        fontSize: '1rem',
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
