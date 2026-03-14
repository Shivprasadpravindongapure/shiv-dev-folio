import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Code, Award, Users, TrendingUp, Calendar, Star, Medal } from 'lucide-react';

const TechnicalAchievements = () => {
  const achievements = [
    {
      year: '2024',
      title: 'Competitive Programming Excellence',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      items: [
        'Solved 120+ LeetCode problems (Hard: 25, Medium: 40)',
        'Active participant in coding competitions',
        'Strong problem-solving skills'
      ]
    },
    {
      year: '2024',
      title: 'Project Recognition',
      icon: Star,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      items: [
        'Selected for State-Level Project Competition for NotegenAI',
        'Innovative AI-powered note-taking solution',
        'Recognition among top projects'
      ]
    },
    {
      year: '2024',
      title: 'Performance Excellence',
      category: 'Software Optimization',
      description: 'Achieved 40% query optimization improvement, 99.9% API uptime, and a 95% user satisfaction rate through diligent performance tuning.',
      icon: TrendingUp,
      color: 'from-green-500 to-lime-500'
    },
    {
      title: 'Coding Excellence',
      category: 'Programming Competitions',
      description: 'Awarded 2nd Prize in C Programming Competition (Softclone) and successfully cleared Coding Clash Round 1, showcasing strong algorithmic thinking.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Open Source Contributions',
      category: 'Community & Collaboration',
      description: 'Active GitHub contributor with 10+ commits and 3+ stars across projects, fostering community engagement and collaboration.',
      icon: Users,
      color: 'from-indigo-500 to-violet-500'
    },
    {
      title: 'Competition Success',
      category: 'Competitive Coding',
      description: 'Secured 1st consolation prize in the Codex competition among 297 participants nationwide, demonstrating competitive coding skills.',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

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

  return (
    <section id="technical-achievements" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-500 border-indigo-500/20">
            <Trophy className="w-4 h-4 mr-2" />
            Achievements
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Milestones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my technical accomplishments, competition successes, and recognition in the field of computer engineering and software development.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-indigo-500/30 transition-all duration-500 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${achievement.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} bg-opacity-10 text-white shadow-sm mt-1 group-hover:scale-110 transition-transform duration-500`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-indigo-500 transition-colors mb-2">
                        {achievement.title}
                      </CardTitle>
                      <div className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {achievement.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground/90 leading-relaxed font-body">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalAchievements;
