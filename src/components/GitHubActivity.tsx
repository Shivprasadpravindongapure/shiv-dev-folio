import { useState, useEffect } from 'react';
import { Github, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f1e05a',
  Python:      '#3572A5',
  Java:        '#b07219',
  'C++':       '#f34b7d',
  HTML:        '#e34c26',
  CSS:         '#563d7c',
  Dockerfile:  '#384d54',
  Go:          '#00ADD8',
  Rust:        '#dea584',
};

export default function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/Shivprasadpravindongapure/repos?sort=updated&per_page=6')
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API error');
        return r.json();
      })
      .then((data: Repo[]) => {
        setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'today';
    if (days === 1) return '1 day ago';
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months === 1) return '1 month ago';
    return `${months} months ago`;
  };

  return (
    <section
      id="github"
      className="relative py-28 overflow-hidden"
      style={{ background: '#10101A' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots-subtle opacity-50 pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span>✦</span>
              Open Source Activity
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            GitHub{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Activity
            </span>
          </motion.h2>
          <motion.p
            className="text-base max-w-md mx-auto"
            style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            6 most recently updated public repositories — fetched live from the GitHub API.
          </motion.p>
        </div>

        {/* Error notice (non-blocking) */}
        {error && (
          <div
            className="text-center mb-8 px-4 py-2 rounded-lg text-sm inline-flex mx-auto"
            style={{
              background: 'rgba(251,146,60,0.07)',
              border: '1px solid rgba(251,146,60,0.2)',
              color: '#FB923C',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
            }}
          >
            ⚠ Could not load GitHub data — API rate limit may apply.
          </div>
        )}

        {/* Loading skeleton (non-blocking) */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 animate-pulse"
                style={{ background: '#080810', border: '1px solid rgba(124,110,250,0.08)', height: 140 }}
              />
            ))}
          </div>
        )}

        {/* Repo cards */}
        {!loading && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: '#080810',
                  border: '1px solid rgba(124,110,250,0.1)',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{
                  y: -3,
                  borderColor: 'rgba(124,110,250,0.28)',
                  background: '#10101A',
                }}
              >
                {/* Repo name */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: '#A78BFA' }}
                    />
                    <span
                      className="font-semibold text-sm truncate group-hover:text-[#A78BFA] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
                    >
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink
                    className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#A78BFA' }}
                  />
                </div>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed flex-1 mb-4 line-clamp-2"
                  style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
                >
                  {repo.description || 'No description provided.'}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Language badge */}
                  <div className="flex items-center gap-1.5">
                    {repo.language && (
                      <>
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: LANG_COLORS[repo.language] || '#8B8AA0' }}
                        />
                        <span
                          className="text-[11px]"
                          style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {repo.language}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" style={{ color: '#F59E0B' }} />
                      <span
                        className="text-[11px]"
                        style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {repo.stargazers_count}
                      </span>
                    </div>
                    {/* Updated */}
                    <span
                      className="text-[11px]"
                      style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {timeAgo(repo.updated_at)}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/Shivprasadpravindongapure?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-250"
            style={{
              background: 'rgba(124,110,250,0.07)',
              border: '1px solid rgba(124,110,250,0.18)',
              color: '#A78BFA',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Github className="w-4 h-4" />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
