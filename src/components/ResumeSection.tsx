import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'NTS Nihon Global',
      location: 'Remote',
      duration: 'June 2025 – July 2025',
      description: 'Architected enterprise-grade full-stack applications using React, TypeScript, Node.js serving 10K+ daily users. Engineered production-ready REST APIs with 99.9% uptime, JWT authentication, and rate limiting.',
      achievements: [
        'Architected enterprise-grade full-stack applications serving 10K+ daily users',
        'Engineered production-ready REST APIs with 99.9% uptime',
        'Implemented JWT authentication and rate limiting',
        'Collaborated in Agile/Scrum teams, improved test coverage to 85%'
      ]
    },
    {
      title: 'IoT Development Intern',
      company: 'SIBIC',
      location: 'Kolhapur',
      duration: 'June 2022 – July 2022',
      description: 'Designed IoT-based home automation systems using Arduino/ESP32 with real-time device control. Integrated sensors and cloud monitoring dashboards for real-time data visualization.',
      achievements: [
        'Designed IoT-based home automation systems using Arduino/ESP32',
        'Implemented real-time device control and monitoring',
        'Developed automation workflows with MQTT protocol',
        'Created cloud monitoring dashboards for data visualization'
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
    <section id="resume" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-500 border-indigo-500/20 hover:bg-indigo-500/20 transition-colors">
            <FileText className="w-4 h-4 mr-2" />
            Resume
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            An overview of my professional experience. Feel free to download my resume for more details.
          </p>

          {/* Resume Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              asChild
            >
              <a href="/resume.pdf" download className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume (PDF)
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              asChild
            >
              <a href="/resume.pdf" download className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Download Resume (DOCX)
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Experience Content */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elevated hover:border-indigo-500/30 transition-all duration-500 hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-indigo-500 transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
