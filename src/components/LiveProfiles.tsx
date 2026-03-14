import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Github, Code2, Trophy, ExternalLink, Activity } from 'lucide-react';

interface GitHubData {
  public_repos: number;
  followers: number;
  public_gists: number;
}

interface LeetCodeData {
  status: string;
  totalSolved: number;
  ranking: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

interface CodeforcesData {
  solvedProblems: number;
}

const LiveProfiles = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeData | null>(null);
  const [codeforcesData, setCodeforcesData] = useState<CodeforcesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      // Fetch GitHub
      try {
        const ghResponse = await fetch('https://api.github.com/users/Shivprasadpravindongapure');
        if (ghResponse.ok) setGithubData(await ghResponse.json());
      } catch (err) {
        console.error("Error fetching GitHub:", err);
      }

      // Fetch LeetCode
      try {
        const lcResponse = await fetch('https://leetcode-api-faisalshohag.vercel.app/ShivprasadPravinDongapure');
        if (lcResponse.ok) {
          const lcJson = await lcResponse.json();
          if (lcJson.totalSolved !== undefined) {
            setLeetcodeData(lcJson);
          }
        }
      } catch (err) {
        console.error("Error fetching LeetCode:", err);
      }

      // Fetch Codeforces (Problems Solved)
      try {
        const cfResponse = await fetch('https://codeforces.com/api/user.status?handle=BitShiv');
        if (cfResponse.ok) {
          const cfJson = await cfResponse.json();
          if (cfJson.status === "OK") {
            const uniqueProblems = new Set(
              cfJson.result
                .filter((submission: any) => submission.verdict === 'OK')
                .map((submission: any) => submission.problem.name)
            );
            setCodeforcesData({ solvedProblems: uniqueProblems.size });
          }
        }
      } catch (err) {
        console.error("Error fetching Codeforces:", err);
      }

      setIsLoading(false);
    };

    fetchProfiles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="developer-profiles" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 border-y border-border/50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
            <Activity className="w-4 h-4 mr-2" />
            Live Analytics
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Developer <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics fetched directly from my active competitive programming and open-source platforms.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* GitHub Card */}
            <motion.a 
              variants={itemVariants}
              href="https://github.com/Shivprasadpravindongapure"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-indigo-500/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-white group-hover:scale-110 transition-transform">
                        <Github className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg text-white">GitHub</h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-slate-700/50 pb-3">
                      <span className="text-sm text-slate-400">Repositories</span>
                      <span className="text-2xl font-bold text-white">{githubData?.public_repos || '-'}</span>
                    </div>
                    <div className="flex justify-between items-end pb-1">
                      <span className="text-sm text-slate-400">Followers</span>
                      <span className="text-2xl font-bold text-white">{githubData?.followers || '-'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.a>

            {/* LeetCode Card */}
            <motion.a 
              variants={itemVariants}
              href="https://leetcode.com/u/ShivprasadPravinDongapure/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg text-white">LeetCode</h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-slate-700/50 pb-3">
                      <span className="text-sm text-slate-400">Problems Solved</span>
                      <span className="text-2xl font-bold text-orange-400">{leetcodeData?.totalSolved || '-'}</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-slate-700/50 pb-3">
                      <span className="text-sm text-slate-400">Global Rank</span>
                      <span className="text-xl font-bold text-white">#{leetcodeData?.ranking?.toLocaleString() || '-'}</span>
                    </div>
                    <div className="flex justify-between items-end pb-1 text-sm">
                      <span className="text-green-400">Easy: {leetcodeData?.easySolved || '-'}</span>
                      <span className="text-yellow-400">Med: {leetcodeData?.mediumSolved || '-'}</span>
                      <span className="text-red-400">Hard: {leetcodeData?.hardSolved || '-'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.a>

            {/* Codeforces Card */}
            <motion.a 
              variants={itemVariants}
              href="https://codeforces.com/profile/BitShiv"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg text-white">Codeforces</h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end pb-1">
                      <span className="text-sm text-slate-400">Problems Solved</span>
                      <span className="text-2xl font-bold text-blue-400">{codeforcesData?.solvedProblems || '-'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LiveProfiles;
