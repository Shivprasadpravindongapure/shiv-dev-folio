import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code2, Trophy, Target, Zap, TrendingUp, Award, Terminal, Flame } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

interface CodeforcesStats {
  rating: number;
  rank: string;
  maxRating: number;
  contests: number;
  rankColor: string;
}

interface CodingNinjasStats {
  problemsSolved: number;
  contests: number;
  rank: string;
  points: number;
  streak: number;
}

const CodingStats = () => {
  const [leetcodeStats, setLeetCodeStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    contributionPoints: 0,
    reputation: 0
  });

  const [codeforcesStats, setCodeforcesStats] = useState<CodeforcesStats>({
    rating: 0,
    rank: '',
    maxRating: 0,
    contests: 0,
    rankColor: ''
  });

  const [codingNinjasStats, setCodingNinjasStats] = useState<CodingNinjasStats>({
    problemsSolved: 85,
    contests: 12,
    rank: 'Advanced',
    points: 1250,
    streak: 7
  });

  const [isLoading, setIsLoading] = useState(true);

  const getRankColor = (rank: string) => {
    const colors: { [key: string]: string } = {
      'Pupil': '#008000',
      'Specialist': '#03A89E',
      'Expert': '#0000FF',
      'Candidate Master': '#AA00AA',
      'Master': '#FF8C00',
      'International Master': '#FF0000',
      'Grandmaster': '#FF0000',
      'International Grandmaster': '#FF0000',
      'Legendary Grandmaster': '#FF0000'
    };
    return colors[rank] || '#6366f1';
  };

  useEffect(() => {
    // Simulate API calls - replace with actual API calls
    const fetchStats = async () => {
      try {
        // Mock LeetCode data - replace with actual API call
        setLeetCodeStats({
          totalSolved: 120,
          easySolved: 55,
          mediumSolved: 40,
          hardSolved: 25,
          ranking: 120000,
          contributionPoints: 200,
          reputation: 950
        });

        // Mock Codeforces data - replace with actual API call
        setCodeforcesStats({
          rating: 1456,
          rank: 'Specialist',
          maxRating: 1523,
          contests: 25,
          rankColor: getRankColor('Specialist')
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.995] as const
      }
    }
  };

  if (isLoading) {
    return (
      <section id="coding-stats" className="section-padding gradient-hero">
        <div className="container-narrow mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading coding statistics...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="coding-stats" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border-orange-500/20 backdrop-blur-sm">
            <Terminal className="w-4 h-4 mr-2" />
            Coding Statistics
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">Coding</span> Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track my progress across competitive programming platforms and open-source contributions
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LeetCode Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg hover:border-orange-300/50 transition-all duration-300 hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                    <Code2 className="w-4 h-4 mr-2" />
                    LeetCode
                  </Badge>
                  <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">{leetcodeStats.totalSolved}</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">{leetcodeStats.easySolved}</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Easy</div>
                    </div>
                    <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                      <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">{leetcodeStats.mediumSolved}</div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400">Medium</div>
                    </div>
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <div className="text-lg font-semibold text-red-600 dark:text-red-400">{leetcodeStats.hardSolved}</div>
                      <div className="text-xs text-red-600 dark:text-red-400">Hard</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ranking</span>
                      <span className="text-foreground font-medium">#{leetcodeStats.ranking.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reputation</span>
                      <span className="text-foreground font-medium">{leetcodeStats.reputation}</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href="https://leetcode.com/u/ShivprasadPravinDongapure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-center font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Profile
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Codeforces Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:border-blue-300/50 transition-all duration-300 hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    <Trophy className="w-4 h-4 mr-2" />
                    Codeforces
                  </Badge>
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{codeforcesStats.rating}</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                    <Badge className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                      {codeforcesStats.rank}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Rating</span>
                      <span className="text-foreground font-medium">{codeforcesStats.maxRating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contests</span>
                      <span className="text-foreground font-medium">{codeforcesStats.contests}</span>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: getRankColor(codeforcesStats.rank) }}
                    >
                      {codeforcesStats.rank}
                    </div>
                    <div className="text-sm text-muted-foreground">Current Rank</div>
                  </div>

                  <div className="pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
                    <motion.a
                      href="https://codeforces.com/profile/BitShiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Target className="w-4 h-4" />
                      View Codeforces Profile
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coding Ninjas Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-800/50 hover:shadow-lg hover:border-green-300/50 transition-all duration-300 hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    <Terminal className="w-4 h-4 mr-2" />
                    Coding Ninjas
                  </Badge>
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{codingNinjasStats.problemsSolved}</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {codingNinjasStats.rank}
                    </div>
                    <div className="text-sm text-muted-foreground">Current Rank</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">{codingNinjasStats.points}</div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                    <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">{codingNinjasStats.streak}</div>
                      <div className="text-xs text-muted-foreground">Day Streak</div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                      {codingNinjasStats.contests}
                    </div>
                    <div className="text-sm text-muted-foreground">Contests Participated</div>
                  </div>

                  <div className="pt-4 border-t border-green-200/50 dark:border-green-800/50">
                    <motion.a
                      href="https://www.naukri.com/code360/profile/c7ae98d1-8ec2-494b-bf10-d4ebd0b7fd1e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Target className="w-4 h-4" />
                      View Coding Ninjas Profile
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;
