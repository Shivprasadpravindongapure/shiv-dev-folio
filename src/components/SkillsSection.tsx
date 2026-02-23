import { Code, Globe, Database, Cloud, BookOpen, Layers } from 'lucide-react';

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
    <section id="skills" className="section-padding gradient-hero">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block animate-fade-up">
            Technical Skills
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit built through academic learning and real-world project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-heading">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-secondary rounded-lg border border-border/50 hover:border-accent/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
