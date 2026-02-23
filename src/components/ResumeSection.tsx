import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Calendar, MapPin, Mail, Phone, Globe, GraduationCap, Briefcase, Award, ChevronRight } from 'lucide-react';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills' | 'certifications'>('experience');

  const handleTabClick = (tabId: string) => {
    handleButtonClick(tabId);
    setActiveTab(tabId as any);
  };

  const handlePdfDownload = () => {
    handleButtonClick('download-pdf');
  };

  const handleDocxDownload = () => {
    handleButtonClick('download-docx');
  };

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

  const education = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Government College of Engineering, Jalgaon',
      location: 'Jalgaon',
      duration: '2024 – Present',
      gpa: '7.96/10',
      achievements: [
        'CGPA: 7.96',
        'Active in technical competitions and hackathons'
      ]
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'ICRE, Gargoti',
      location: 'Gargoti',
      duration: '2021 – 2024',
      gpa: '80.81% (Distinction)',
      achievements: [
        '80.81% with Distinction',
        'Strong foundation in computer engineering concepts'
      ]
    }
  ];

  const skills = {
    'Programming Languages': ['JavaScript', 'Django', 'Python', 'C++', 'SQL', 'Java'],
    'Frontend Technologies': ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs'],
    'Backend Technologies': ['Node.js', 'Express.js', 'Microservices', 'JWT'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Cloud & DevOps': ['AWS (S3, EC2, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
    'AI/ML': ['OpenAI APIs', 'LLM Integration', 'Whisper', 'NLP', 'Prompt Engineering'],
    'Core Skills': ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'Agile', 'Scrum']
  };

  const certifications = [
    {
      name: 'Machine Learning',
      issuer: 'NPTEL',
      credential: 'Elite',
      year: '2024',
      category: 'AI/ML'
    },
    {
      name: 'Deep Learning',
      issuer: 'NPTEL',
      credential: 'Elite',
      year: '2024',
      category: 'AI/ML'
    },
    {
      name: 'Cloud Fundamentals',
      issuer: 'Great Learning',
      credential: 'Certified',
      year: '2023',
      category: 'Cloud'
    },
    {
      name: 'AWS Solutions Architecture',
      issuer: 'AWS',
      credential: 'Certified',
      year: '2023',
      category: 'Cloud'
    },
    {
      name: 'Python Programming',
      issuer: 'Data Flair',
      credential: 'Certified',
      year: '2023',
      category: 'Programming'
    },
    {
      name: 'Java Programming',
      issuer: 'NPTEL',
      credential: 'Elite + Gold',
      year: '2023',
      category: 'Programming'
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
          <Badge className="mb-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-600 border-green-500/20">
            <FileText className="w-4 h-4 mr-2" />
            Resume
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my education, experience, and skills. Feel free to download my resume for more details.
          </p>

          {/* Resume Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'skills', label: 'Skills', icon: Award },
            { id: 'certifications', label: 'Certifications', icon: FileText }
          ].map((tab) => (
            <Button 
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleTabClick(tab.id)}
              className="transition-all duration-300 transform hover:scale-105"
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gradient-to-r from-card to-card/50 border-border/50 hover:shadow-lg hover:border-indigo-500/30 transition-all duration-300 hover-lift">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
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
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-to-r from-card to-card/50 border-border/50 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 hover-lift">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-medium text-foreground">{edu.institution}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.duration}
                        </Badge>
                        {edu.gpa && (
                          <Badge variant="outline" className="border-green-500/50 text-green-600">
                            GPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
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
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-gradient-to-r from-card to-card/50 border-border/50 hover:shadow-lg hover:border-green-500/30 transition-all duration-300 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-600 dark:text-green-400">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gradient-to-r from-card to-card/50 border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                          {cert.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-medium text-foreground">{cert.issuer}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                            {cert.credential}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert.year}
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-600">
                          {cert.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Get In Touch</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>Prasaddongapure7660@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span>8956657409</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <a href="https://github.com/Shivprasadpravindongapure" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Maharashtra, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
