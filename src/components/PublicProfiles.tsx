import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Code2, Trophy, Terminal, Activity } from 'lucide-react';

/* ─── Live data interfaces ─────────────────────────── */
interface GHData  { public_repos: number; followers: number; following: number; }
interface LCData  { totalSolved: number; easySolved: number; mediumSolved: number; hardSolved: number; ranking: number; }
interface CFResult { status: string; verdict: string; problem: { name: string }; }

/* ─── Static profile metadata ─────────────────────── */
const PROFILES = [
  {
    key: 'github',
    name: 'GitHub',
    handle: '@Shivprasadpravindongapure',
    href: 'https://github.com/Shivprasadpravindongapure',
    Icon: Github,
    accent: '#E2E8F0',
    glow: 'rgba(226,232,240,0.07)',
    border: 'rgba(226,232,240,0.14)',
    tagBg: 'rgba(226,232,240,0.06)',
    description: 'Open-source repositories, projects & contributions',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    handle: 'shivprasad-dongapure',
    href: 'https://www.linkedin.com/in/shivprasad-dongapure-35760a290',
    Icon: Linkedin,
    accent: '#60A5FA',
    glow: 'rgba(96,165,250,0.09)',
    border: 'rgba(96,165,250,0.18)',
    tagBg: 'rgba(96,165,250,0.07)',
    description: 'Professional network, recommendations & experience',
  },
  {
    key: 'leetcode',
    name: 'LeetCode',
    handle: 'ShivprasadPravinDongapure',
    href: 'https://leetcode.com/u/ShivprasadPravinDongapure/',
    Icon: Code2,
    accent: '#FB923C',
    glow: 'rgba(251,146,60,0.09)',
    border: 'rgba(251,146,60,0.18)',
    tagBg: 'rgba(251,146,60,0.07)',
    description: 'DSA mastery — 200+ problems across all difficulties',
  },
  {
    key: 'codeforces',
    name: 'Codeforces',
    handle: 'BitShiv',
    href: 'https://codeforces.com/profile/BitShiv',
    Icon: Trophy,
    accent: '#34D399',
    glow: 'rgba(52,211,153,0.09)',
    border: 'rgba(52,211,153,0.18)',
    tagBg: 'rgba(52,211,153,0.07)',
    description: 'Competitive programming — Specialist rank, Div.2',
  },
  {
    key: 'codingninjas',
    name: 'Coding Ninjas',
    handle: 'Shivprasad',
    href: 'https://www.naukri.com/code360/profile/c7ae98d1-8ec2-494b-bf10-d4ebd0b7fd1e',
    Icon: Terminal,
    accent: '#FBBF24',
    glow: 'rgba(251,191,36,0.09)',
    border: 'rgba(251,191,36,0.18)',
    tagBg: 'rgba(251,191,36,0.07)',
    description: '85+ problems solved, Advanced rank & certifications',
  },
];

/* ─── Stat pill ────────────────────────────────────── */
function StatPill({
  label,
  value,
  accent,
  tagBg,
  border,
}: {
  label: string;
  value: string;
  accent: string;
  tagBg: string;
  border: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center px-3 py-2 rounded-xl flex-1"
      style={{ background: tagBg, border: `1px solid ${border}` }}
    >
      <span
        className="text-sm font-bold leading-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: accent }}
      >
        {value}
      </span>
      <span
        className="text-[10px] mt-0.5 text-center leading-tight"
        style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function PublicProfiles() {
  const [gh, setGh] = useState<GHData | null>(null);
  const [lc, setLc] = useState<LCData | null>(null);
  const [cfSolved, setCfSolved] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Fetch all in parallel, fail silently
    Promise.allSettled([
      fetch('https://api.github.com/users/Shivprasadpravindongapure')
        .then(r => r.ok ? r.json() : null)
        .then(d => d && setGh(d)),

      fetch('https://leetcode-api-faisalshohag.vercel.app/ShivprasadPravinDongapure')
        .then(r => r.ok ? r.json() : null)
        .then(d => d?.totalSolved !== undefined && setLc(d)),

      fetch('https://codeforces.com/api/user.status?handle=BitShiv')
        .then(r => r.ok ? r.json() : null)
        .then(d => {
          if (d?.status === 'OK') {
            const unique = new Set(
              (d.result as CFResult[])
                .filter(s => s.verdict === 'OK')
                .map(s => s.problem.name)
            );
            setCfSolved(unique.size);
          }
        }),
    ]).finally(() => setReady(true));
  }, []);

  /* Build stats per card from live data + fallbacks */
  const getStats = (key: string) => {
    switch (key) {
      case 'github':
        return [
          { label: 'Public Repos', value: gh ? `${gh.public_repos}` : '25+' },
          { label: 'Followers',    value: gh ? `${gh.followers}`    : '—' },
          { label: 'Following',    value: gh ? `${gh.following}`    : '—' },
        ];
      case 'linkedin':
        return [
          { label: 'Connections',  value: '500+' },
          { label: 'Posts',        value: '20+' },
          { label: 'Endorsements', value: '15+' },
        ];
      case 'leetcode':
        return [
          { label: 'Total Solved', value: lc ? `${lc.totalSolved}` : '200+' },
          { label: 'Easy',         value: lc ? `${lc.easySolved}`  : '85' },
          { label: 'Med / Hard',   value: lc ? `${lc.mediumSolved}/${lc.hardSolved}` : '90/25' },
        ];
      case 'codeforces':
        return [
          { label: 'Rating',       value: '1456' },
          { label: 'AC Problems',  value: cfSolved !== null ? `${cfSolved}` : '180+' },
          { label: 'Max Rating',   value: '1523' },
        ];
      case 'codingninjas':
        return [
          { label: 'Problems',     value: '85+' },
          { label: 'Rank',         value: 'Advanced' },
          { label: 'Contests',     value: '12' },
        ];
      default:
        return [];
    }
  };

  const getBadge = (key: string) => {
    const badges: Record<string, string> = {
      github:      'Open Source',
      linkedin:    'Professional',
      leetcode:    '200+ Solved',
      codeforces:  'Specialist',
      codingninjas:'Advanced',
    };
    return badges[key] ?? '';
  };

  return (
    <section
      id="profiles"
      className="relative py-28 overflow-hidden"
      style={{ background: '#0D0D14' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,89,247,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <Activity className="w-3 h-3 text-emerald-400" style={{ animation: 'pulse 2s infinite' }} />
              Live Profiles
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
            Public{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #A78BFA, #C4B5FD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Profiles
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
            Real-time statistics fetched live from GitHub, LeetCode &amp; Codeforces APIs.
          </motion.p>

          {/* Live indicator */}
          {ready && (
            <motion.div
              className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full text-[11px]"
              style={{
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.2)',
                color: '#34D399',
                fontFamily: "'JetBrains Mono', monospace",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
              Data loaded live
            </motion.div>
          )}
        </div>

        {/* ── Profile Cards ───────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PROFILES.map((p, i) => {
            const stats = getStats(p.key);
            const badge = getBadge(p.key);

            return (
              <motion.a
                key={p.key}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-350"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(108,99,255,0.1)',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  borderColor: p.border,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${p.glow}`,
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-[1px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
                  }}
                />

                {/* Hover bg tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${p.glow}, transparent)` }}
                />

                <div className="relative z-10 p-5 flex flex-col h-full gap-4">
                  {/* ── Card header ── */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {/* Platform icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: p.tagBg, border: `1px solid ${p.border}` }}
                      >
                        <p.Icon className="w-5 h-5" style={{ color: p.accent }} />
                      </div>
                      <div>
                        <h3
                          className="text-sm font-bold leading-tight"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
                        >
                          {p.name}
                        </h3>
                        <span
                          className="text-[11px]"
                          style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          @{p.handle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {/* Badge */}
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{
                          background: p.tagBg,
                          border: `1px solid ${p.border}`,
                          color: p.accent,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {badge}
                      </span>
                      <ExternalLink
                        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity"
                        style={{ color: p.accent }}
                      />
                    </div>
                  </div>

                  {/* ── Description ── */}
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.description}
                  </p>

                  {/* ── Live stats row ── */}
                  <div className="flex gap-2">
                    {stats.map(s => (
                      <StatPill
                        key={s.label}
                        label={s.label}
                        value={s.value}
                        accent={p.accent}
                        tagBg={p.tagBg}
                        border={p.border}
                      />
                    ))}
                  </div>

                  {/* ── CTA footer ── */}
                  <div
                    className="mt-auto pt-3 flex items-center justify-between border-t"
                    style={{ borderColor: 'rgba(108,99,255,0.08)' }}
                  >
                    <span
                      className="text-[11px] font-semibold transition-colors duration-250 group-hover:opacity-100 opacity-60"
                      style={{ color: p.accent, fontFamily: "'Inter', sans-serif" }}
                    >
                      View Profile →
                    </span>
                    <span
                      className="text-[10px]"
                      style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {p.key === 'github' || p.key === 'leetcode' || p.key === 'codeforces'
                        ? 'live'
                        : 'static'}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
