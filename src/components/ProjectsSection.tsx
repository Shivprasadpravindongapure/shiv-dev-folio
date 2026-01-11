import { ExternalLink, Github, Sparkles, ShoppingCart, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: Sparkles,
    title: 'NotegenAI',
    subtitle: 'AI-Powered Lecture Summarizer',
    description: 'An intelligent platform that converts lectures and PDF documents into structured, easy-to-review notes using AI technology.',
    tech: ['React', 'Node.js', 'MongoDB', 'Whisper AI', 'LLM'],
    highlights: [
      'Audio transcription using Whisper',
      'LLM-powered summarization',
      'PDF parsing and processing',
      'MERN stack architecture',
    ],
    color: 'from-primary/20 to-accent/20',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platform',
    subtitle: 'Amazon Clone',
    description: 'A full-featured e-commerce application with complete shopping functionality, user authentication, and payment integration.',
    tech: ['React', 'Node.js', 'MySQL', 'REST API'],
    highlights: [
      'User authentication & sessions',
      'Shopping cart & checkout',
      'Product catalog management',
      'Order tracking system',
    ],
    color: 'from-accent/20 to-primary/20',
  },
  {
    icon: Building2,
    title: 'CivicConnect',
    subtitle: 'Smart City Issue Reporting System',
    description: 'A comprehensive civic engagement platform enabling citizens to report and track urban issues with role-based dashboards.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    highlights: [
      'Role-based access control',
      'AWS S3 image uploads',
      'Optimized MongoDB queries',
      'Real-time status tracking',
    ],
    color: 'from-primary/20 to-accent/20',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding gradient-hero">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block animate-fade-up">
            Featured Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A selection of projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-soft group-hover:shadow-elevated transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-accent/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground font-heading mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
<<<<<<< HEAD
                    <a href="https://github.com/Shivprasadpravindongapure" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
=======
                    <a href="#">
                      <Github className="w-4 h-4" />
                      Code
>>>>>>> 1752ef08abe6e62d447a95ec4f87501e83ae5408
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href="#">
                      <ExternalLink className="w-4 h-4" />
<<<<<<< HEAD
                      Live Demo
=======
                      Demo
>>>>>>> 1752ef08abe6e62d447a95ec4f87501e83ae5408
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
