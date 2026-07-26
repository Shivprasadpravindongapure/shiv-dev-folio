import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import githubData from '../data/github.json';
import { personalInfo } from '../data/portfolio';

const GITHUB_USER = 'Shivprasadpravindongapure';

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

export default function GitHubSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="github" className="section">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-label">🐙 GitHub</div>
          <h2 className="section-title">Open Source Activity</h2>
          <p className="section-subtitle">My GitHub profile reflects consistent shipping, experimentation, and open collaboration.</p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}
        >
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&title_color=8b5cf6&text_color=94a3b8&icon_color=6366f1&border_color=1e1e35&hide_border=false&count_private=true`}
              alt="GitHub Stats"
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}
            />
          </a>
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=transparent&hide_border=false&stroke=1e1e35&ring=8b5cf6&fire=6366f1&currStreakLabel=94a3b8&border=1e1e35&background=00000000`}
              alt="GitHub Streak"
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Language Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
            style={{ padding: '1.5rem' }}
          >
            <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '1.25rem', color: 'var(--text)' }}>
              Language Breakdown
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {githubData.languages.slice(0, 5).map(lang => (
                <div key={lang.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: LANG_COLORS[lang.name] ?? '#6366f1', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>{lang.name}</span>
                    </div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {lang.percentage}%
                    </span>
                  </div>
                  <div style={{ height: '5px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                      style={{ height: '100%', background: LANG_COLORS[lang.name] ?? '#6366f1', borderRadius: '3px' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Stats */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
              {[
                { label: 'Repos', value: githubData.profile.public_repos },
                { label: 'Followers', value: githubData.profile.followers },
                { label: 'Following', value: githubData.profile.following },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--primary-light)', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Repos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '1rem', color: 'var(--text)' }}>
              Recent Repositories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {githubData.topRepos.slice(0, 5).map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="card"
                  style={{ padding: '1rem 1.25rem', textDecoration: 'none', display: 'block' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-light)' }}>
                      {repo.name}
                    </span>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                    </div>
                  </div>
                  {repo.description && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.5rem', lineHeight: 1.5 }}>
                      {repo.description.length > 65 ? repo.description.slice(0, 65) + '...' : repo.description}
                    </p>
                  )}
                  {repo.language && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: LANG_COLORS[repo.language] ?? '#6366f1' }} />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{repo.language}</span>
                    </div>
                  )}
                </motion.a>
              ))}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ textDecoration: 'none', textAlign: 'center', fontSize: '0.875rem', marginTop: '0.25rem' }}
              >
                View All Repositories →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USER}&theme=react-dark&bg_color=transparent&color=8b5cf6&line=6366f1&point=a78bfa&hide_border=true&area=true&area_color=8b5cf6`}
            alt="Contribution Graph"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #github .container > div:last-of-type > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
