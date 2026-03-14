import { Code, Globe, Database, Cloud, BookOpen, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['JavaScript', 'Django', 'Python', 'C++', 'SQL', 'Java'],
  },
  {
    icon: Globe,
    title: 'Frontend Technologies',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Backend Technologies',
    skills: ['Node.js', 'Express.js', 'Microservices', 'JWT'],
  },
  {
    icon: Cloud,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    icon: BookOpen,
    title: 'Cloud & DevOps',
    skills: ['AWS (S3, EC2, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    icon: Layers,
    title: 'AI/ML',
    skills: ['OpenAI APIs', 'LLM Integration', 'Whisper', 'NLP', 'Prompt Engineering'],
  },
  {
    icon: Code,
    title: 'Core Skills',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'Agile', 'Scrum'],
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4 block animate-fade-up">
            Technical Skills
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Skills & <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up text-lg" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit built through academic learning and real-world project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-indigo-500/30 shadow-soft transition-colors duration-500 animate-fade-up flex flex-col relative overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Soft highlight glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3.5 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-500">
                  <category.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-heading">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground bg-secondary/50 rounded-lg border border-border/50 hover:border-indigo-500/50 hover:bg-secondary hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
