import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code2, Trophy, Target, Zap, TrendingUp, Award } from 'lucide-react';

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
    rank: 'Newbie',
    maxRating: 0,
    contests: 0,
    rankColor: '#808080'
  });

  const [isLoading, setIsLoading] = useState(true);

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
          contests: 23,
          rankColor: '#03a89e'
        });
      } catch (error) {
        console.error('Error fetching coding stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const getRankColor = (rank: string) => {
    const colors: { [key: string]: string } = {
      'Newbie': '#808080',
      'Pupil': '#008000',
      'Specialist': '#03a89e',
      'Expert': '#0000ff',
      'Candidate Master': '#a0a',
      'Master': '#ff8c00',
      'International Master': '#ff0000',
      'Grandmaster': '#ff0000',
      'International Grandmaster': '#ff0000',
      'Legendary Grandmaster': '#ff0000'
    };
    return colors[rank] || '#808080';
  };

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
      <section id="coding-stats" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container-narrow mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Loading Coding Stats...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="coding-stats" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-500/20">
            <Code2 className="w-4 h-4 mr-2" />
            Competitive Programming
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Coding <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track my progress on competitive programming platforms and see how I'm improving my problem-solving skills.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LeetCode Stats */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200/50 dark:border-yellow-800/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 text-white">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">LeetCode</h3>
                    <p className="text-sm text-muted-foreground">@ShivprasadPravinDongapure</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      {leetcodeStats.totalSolved}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Solved</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      #{leetcodeStats.ranking.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Ranking</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Easy</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${(leetcodeStats.easySolved / 500) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">
                        {leetcodeStats.easySolved}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Medium</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500 rounded-full"
                          style={{ width: `${(leetcodeStats.mediumSolved / 1000) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                        {leetcodeStats.mediumSolved}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Hard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: `${(leetcodeStats.hardSolved / 500) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">
                        {leetcodeStats.hardSolved}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-yellow-200/50 dark:border-yellow-800/50">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Contribution Points</span>
                  </div>
                  <span className="font-bold">{leetcodeStats.contributionPoints}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Codeforces Stats */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Codeforces</h3>
                    <p className="text-sm text-muted-foreground">@BitShiv</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: getRankColor(codeforcesStats.rank) }}
                    >
                      {codeforcesStats.rating}
                    </div>
                    <div className="text-sm text-muted-foreground">Current Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: getRankColor(codeforcesStats.rank) }}
                    >
                      {codeforcesStats.maxRating}
                    </div>
                    <div className="text-sm text-muted-foreground">Max Rating</div>
                  </div>
                </div>

                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: getRankColor(codeforcesStats.rank) }}
                  >
                    {codeforcesStats.rank}
                  </div>
                  <div className="text-sm text-muted-foreground">Current Rank</div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{codeforcesStats.contests} contests</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Progress</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      +{codeforcesStats.rating - 1200} from Newbie
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Achievement</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      Specialist Level
                    </Badge>
                  </div>
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
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;
