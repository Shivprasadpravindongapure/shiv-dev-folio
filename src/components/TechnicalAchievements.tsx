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
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      items: [
        '40% query optimization improvement',
        '99.9% API uptime achieved',
        '95% user satisfaction rate'
      ]
    },
    {
      year: '2024',
      title: 'Coding Excellence',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      items: [
        '2nd Prize in C Programming Competition (Softclone)',
        'Successfully cleared Coding Clash Round 1',
        'Strong algorithmic thinking skills'
      ]
    },
    {
      year: '2024',
      title: 'Open Source Contributions',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      items: [
        'Active GitHub contributor with 10+ commits',
        '3+ stars across projects',
        'Community engagement and collaboration'
      ]
    },
    {
      year: '2024',
      title: 'Competition Success',
      icon: Medal,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      items: [
        '1st consolation prize in Codex competition',
        'Among 297 participants nationwide',
        'Demonstrated competitive coding skills'
      ]
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
          <Badge className="mb-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-600 border-yellow-500/20">
            <Trophy className="w-4 h-4 mr-2" />
            Technical Achievements
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Achievements</span>
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
              <Card className="h-full bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg hover:border-indigo-500/30 transition-all duration-300 hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {achievement.year}
                    </Badge>
                    <div className={`p-2 rounded-lg ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-indigo-600 transition-colors">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {achievement.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
