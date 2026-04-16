import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Trophy, ExternalLink, Activity } from 'lucide-react';

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

interface LeetCodeData {
  totalSolved: number;
  ranking: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

interface CodeforcesData {
  solvedProblems: number;
}

export default function LiveProfiles() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeData | null>(null);
  const [codeforcesData, setCodeforcesData] = useState<CodeforcesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const ghRes = await fetch('https://api.github.com/users/Shivprasadpravindongapure');
        if (ghRes.ok) setGithubData(await ghRes.json());
      } catch (e) { /* silent */ }

      try {
        const lcRes = await fetch('https://leetcode-api-faisalshohag.vercel.app/ShivprasadPravinDongapure');
        if (lcRes.ok) {
          const lcJson = await lcRes.json();
          if (lcJson.totalSolved !== undefined) setLeetcodeData(lcJson);
        }
      } catch (e) { /* silent */ }

      try {
        const cfRes = await fetch('https://codeforces.com/api/user.status?handle=BitShiv');
        if (cfRes.ok) {
          const cfJson = await cfRes.json();
          if (cfJson.status === 'OK') {
            const unique = new Set(
              cfJson.result
                .filter((s: any) => s.verdict === 'OK')
                .map((s: any) => s.problem.name)
            );
            setCodeforcesData({ solvedProblems: unique.size });
          }
        }
      } catch (e) { /* silent */ }

      setIsLoading(false);
    };

    fetchProfiles();
  }, []);

  const profiles = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Shivprasadpravindongapure',
      accentColor: '#e2e8f0',
      glowColor: 'rgba(226,232,240,0.08)',
      borderColor: 'rgba(226,232,240,0.12)',
      stats: [
        { label: 'Public Repos', value: githubData ? `${githubData.public_repos}` : '—' },
        { label: 'Followers', value: githubData ? `${githubData.followers}` : '—' },
        { label: 'Following', value: githubData ? `${githubData.following}` : '—' },
      ],
    },
    {
      name: 'LeetCode',
      icon: Code2,
      href: 'https://leetcode.com/u/ShivprasadPravinDongapure/',
      accentColor: '#fb923c',
      glowColor: 'rgba(251,146,60,0.1)',
      borderColor: 'rgba(251,146,60,0.18)',
      stats: [
        { label: 'Total Solved', value: leetcodeData ? `${leetcodeData.totalSolved}` : '—' },
        { label: 'Global Rank', value: leetcodeData ? `#${leetcodeData.ranking?.toLocaleString()}` : '—' },
        { label: 'Easy / Med / Hard', value: leetcodeData ? `${leetcodeData.easySolved} / ${leetcodeData.mediumSolved} / ${leetcodeData.hardSolved}` : '—' },
      ],
    },
    {
      name: 'Codeforces',
      icon: Trophy,
      href: 'https://codeforces.com/profile/BitShiv',
      accentColor: '#60a5fa',
      glowColor: 'rgba(96,165,250,0.1)',
      borderColor: 'rgba(96,165,250,0.18)',
      stats: [
        { label: 'Problems Solved', value: codeforcesData ? `${codeforcesData.solvedProblems}` : '—' },
        { label: 'Rating', value: '1456' },
        { label: 'Rank', value: 'Specialist' },
      ],
    },
  ];

  return (
    <section id="developer-profiles" className="relative py-24 overflow-hidden" style={{ background: 'hsl(220, 30%, 4%)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div className="flex justify-center mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-badge">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              Live Analytics
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Developer{' '}
            <span style={{ background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Profiles
            </span>
          </motion.h2>
          <motion.p className="text-white/35 text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Real-time statistics fetched live from my active platforms.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="flex items-center gap-3 text-white/30" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>
              <div className="w-4 h-4 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
              Fetching live data...
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {profiles.map((profile, i) => (
              <motion.a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden block transition-all duration-400"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -4,
                  borderColor: profile.borderColor,
                  boxShadow: `0 16px 50px rgba(0,0,0,0.4), 0 0 20px ${profile.glowColor}`,
                }}
              >
                {/* Top accent */}
                <div className="h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${profile.accentColor}, transparent)` }} />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: profile.glowColor, border: `1px solid ${profile.borderColor}` }}>
                        <profile.icon className="w-4 h-4" style={{ color: profile.accentColor }} />
                      </div>
                      <h3 className="text-sm font-black text-white/80" style={{ fontFamily: "'Syne', sans-serif" }}>{profile.name}</h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>

                  <div className="space-y-3">
                    {profile.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between">
                        <span className="text-xs text-white/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.label}</span>
                        <span className="text-sm font-bold" style={{ color: profile.accentColor, fontFamily: "'JetBrains Mono', monospace" }}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
