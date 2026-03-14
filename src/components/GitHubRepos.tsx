import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code, Calendar, Users, GitBranch, Package, Eye, Clock } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  license: {
    name: string;
  } | null;
  homepage: string | null;
  archived: boolean;
  size: number;
  watchers_count: number;
  open_issues_count: number;
  default_branch: string;
}

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalWatchers: number;
  totalIssues: number;
  languages: { [key: string]: number };
  contributions: number;
  followers: number;
  following: number;
  publicGists: number;
  lastUpdated: string;
}

const GitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = 'Shivprasadpravindongapure';
        
        // Fetch user stats and repos in parallel
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        // Process repositories
        const filteredRepos = reposData
          .filter((repo: GitHubRepo) => !repo.archived && repo.description)
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 9);

        // Calculate statistics
        const languages: { [key: string]: number } = {};
        let totalStars = 0;
        let totalForks = 0;
        let totalWatchers = 0;
        let totalIssues = 0;

        filteredRepos.forEach((repo: GitHubRepo) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
          totalWatchers += repo.watchers_count;
          totalIssues += repo.open_issues_count;
          
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        const githubStats: GitHubStats = {
          totalRepos: userData.public_repos,
          totalStars,
          totalForks,
          totalWatchers,
          totalIssues,
          languages,
          contributions: 0, // Would need GraphQL API for this
          followers: userData.followers,
          following: userData.following,
          publicGists: userData.public_gists,
          lastUpdated: userData.updated_at
        };

        setRepos(filteredRepos);
        setStats(githubStats);
        
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to load GitHub data. Showing demo data.');
        
        // Fallback demo data
        setStats({
          totalRepos: 25,
          totalStars: 156,
          totalForks: 42,
          totalWatchers: 89,
          totalIssues: 18,
          languages: { 'JavaScript': 8, 'Python': 6, 'TypeScript': 4, 'C++': 3, 'HTML': 2, 'CSS': 2 },
          contributions: 847,
          followers: 234,
          following: 89,
          publicGists: 12,
          lastUpdated: new Date().toISOString()
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'Go': '#00ADD8',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Shell': '#89e051',
      'Dockerfile': '#384d54',
    };
    return colors[language] || '#666';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
      <section id="github-repos" className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container-narrow mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Loading GitHub Statistics...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-repos" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-indigo-500 border-indigo-500/20">
            <Github className="w-4 h-4 mr-2" />
            Real-time Statistics
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Analytics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Live GitHub statistics including contributions, repository analytics, and development activity tracking.
          </p>
          {error && (
            <div className="text-sm text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 max-w-md mx-auto">
              {error}
            </div>
          )}
        </motion.div>

        {/* Statistics Dashboard */}
        {stats && (
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-indigo-500/20 transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <Package className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{formatNumber(stats.totalRepos)}</div>
                <div className="text-sm font-medium text-muted-foreground">Repositories</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-yellow-500/20 transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-yellow-500/10 rounded-xl">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{formatNumber(stats.totalStars)}</div>
                <div className="text-sm font-medium text-muted-foreground">Total Stars</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-emerald-500/20 transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <GitFork className="w-6 h-6 text-emerald-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{formatNumber(stats.totalForks)}</div>
                <div className="text-sm font-medium text-muted-foreground">Total Forks</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-purple-500/20 transition-all duration-500">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{formatNumber(stats.followers)}</div>
                <div className="text-sm font-medium text-muted-foreground">Followers</div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Language Distribution */}
        {stats && Object.keys(stats.languages).length > 0 && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-orange-500" />
                  Language Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(stats.languages)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 6)
                    .map(([language, count]) => (
                      <div key={language} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(language) }}
                          />
                          <span className="text-sm font-medium">{language}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div 
                              className="h-2 rounded-full"
                              style={{ 
                                backgroundColor: getLanguageColor(language),
                                width: `${(count / Math.max(...Object.values(stats.languages))) * 100}%`
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(count / Math.max(...Object.values(stats.languages))) * 100}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8 text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Repository Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-indigo-500/30 transition-all duration-500 group flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold text-foreground truncate group-hover:text-indigo-500 transition-colors">
                        {repo.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            />
                            <span className="text-xs text-muted-foreground">{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {formatDate(repo.updated_at)}
                        </div>
                      </div>
                    </div>
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {repo.description}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{repo.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <GitFork className="w-4 h-4 text-blue-500" />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Eye className="w-4 h-4 text-green-500" />
                        <span>{repo.watchers_count}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <motion.a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-green-600" />
                        </motion.a>
                      )}
                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code className="w-3.5 h-3.5 text-purple-600" />
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="group border-indigo-500/50 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
            asChild
          >
            <a 
              href="https://github.com/Shivprasadpravindongapure?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Repositories
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubRepos;
