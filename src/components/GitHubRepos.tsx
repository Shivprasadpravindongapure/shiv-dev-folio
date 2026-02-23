import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code, Calendar, Users } from 'lucide-react';

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
}

const GitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Replace with your actual GitHub username
        const username = 'Shivprasadpravindongapure';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        
        // Filter out archived repos and sort by stars
        const filteredRepos = data
          .filter((repo: GitHubRepo) => !repo.archived && repo.description)
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 9); // Show top 9 repos

        setRepos(filteredRepos);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError('Failed to load repositories. Showing demo data.');
        
        // Demo data as fallback with your actual projects
        setRepos([
          {
            id: 1,
            name: 'Developer-Portfolio',
            description: 'Modern responsive portfolio website built with React, Next.js, and Tailwind CSS featuring smooth animations and dark mode support.',
            html_url: 'https://github.com/Shivprasadpravindongapure/Developer-Portfolio',
            stargazers_count: 12,
            forks_count: 3,
            language: 'JavaScript',
            created_at: '2024-01-15T00:00:00Z',
            updated_at: '2024-02-20T00:00:00Z',
            topics: ['react', 'nextjs', 'tailwindcss', 'portfolio', 'framer-motion'],
            license: { name: 'MIT' },
            homepage: null,
            archived: false,
            size: 145
          },
          {
            id: 2,
            name: 'Chatify',
            description: 'Real-time messaging platform using Socket.io, React, Node.js with WebSocket optimization and end-to-end encryption.',
            html_url: 'https://github.com/Shivprasadpravindongapure/Chatify',
            stargazers_count: 8,
            forks_count: 2,
            language: 'JavaScript',
            created_at: '2023-08-10T00:00:00Z',
            updated_at: '2024-02-18T00:00:00Z',
            topics: ['react', 'nodejs', 'socket.io', 'websocket', 'encryption'],
            license: { name: 'MIT' },
            homepage: null,
            archived: false,
            size: 98
          },
          {
            id: 3,
            name: 'Nyay-AI',
            description: 'Enterprise legal advisor using Flask and LLaMA LLM with RAG architecture achieving 92% accuracy.',
            html_url: 'https://github.com/Shivprasadpravindongapure/Nyay-AI',
            stargazers_count: 15,
            forks_count: 4,
            language: 'Python',
            created_at: '2023-11-20T00:00:00Z',
            updated_at: '2024-02-15T00:00:00Z',
            topics: ['python', 'flask', 'llm', 'rag', 'nlp', 'legal-tech'],
            license: { name: 'MIT' },
            homepage: null,
            archived: false,
            size: 167
          },
          {
            id: 4,
            name: 'NotegenAI',
            description: 'AI-powered note-taking application with intelligent summarization and organization features.',
            html_url: 'https://github.com/Shivprasadpravindongapure/NotegenAI',
            stargazers_count: 6,
            forks_count: 1,
            language: 'Python',
            created_at: '2023-09-05T00:00:00Z',
            updated_at: '2024-02-10T00:00:00Z',
            topics: ['python', 'ai', 'nlp', 'openai', 'notes'],
            license: { name: 'MIT' },
            homepage: null,
            archived: false,
            size: 76
          },
          {
            id: 5,
            name: 'IoT-Home-Automation',
            description: 'IoT-based home automation system using Arduino/ESP32 with real-time device control and monitoring.',
            html_url: 'https://github.com/Shivprasadpravindongapure/IoT-Home-Automation',
            stargazers_count: 10,
            forks_count: 3,
            language: 'C++',
            created_at: '2023-10-12T00:00:00Z',
            updated_at: '2024-02-08T00:00:00Z',
            topics: ['arduino', 'esp32', 'iot', 'home-automation', 'mqtt'],
            license: { name: 'MIT' },
            homepage: null,
            archived: false,
            size: 54
          },
          {
            id: 6,
            name: 'DSA-Solver',
            description: 'Comprehensive Data Structures and Algorithms problem solver with solutions in multiple programming languages.',
            html_url: 'https://github.com/Shivprasadpravindongapure/DSA-Solver',
            stargazers_count: 18,
            forks_count: 5,
            language: 'Python',
            created_at: '2023-07-18T00:00:00Z',
            updated_at: '2024-02-05T00:00:00Z',
            topics: ['data-structures', 'algorithms', 'python', 'leetcode', 'competitive-programming'],
            license: { name: 'MIT' },
            homepage: null,
            archived: false,
            size: 89
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
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
              Loading GitHub Repositories...
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
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border-blue-500/20">
            <Github className="w-4 h-4 mr-2" />
            Open Source
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            GitHub <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore my open-source contributions and projects on GitHub. From web applications to competitive programming solutions.
          </p>
          {error && (
            <div className="text-sm text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 max-w-md mx-auto">
              {error}
            </div>
          )}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg hover:border-purple-500/20 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg font-semibold truncate group-hover:text-purple-600 transition-colors">
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
                          <Calendar className="w-3 h-3" />
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
