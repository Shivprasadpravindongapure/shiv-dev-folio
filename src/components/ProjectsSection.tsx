import { ExternalLink, Github, Sparkles, ShoppingCart, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: Sparkles,
    title: 'Nyay-AI',
    subtitle: 'Legal Assistant System',
    description: 'Enterprise legal advisor using Flask and LLaMA LLM with RAG architecture achieving 92% accuracy.',
    tech: ['Python', 'Flask', 'LLaMA', 'RAG', 'NLP'],
    highlights: [
      'LLM-powered legal assistance',
      'RAG architecture implementation',
      '92% accuracy achieved',
      'Context-aware conversations'
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    githubLink: 'https://github.com/Shivprasadpravindongapure/Nyay-AI',
  },
  {
    icon: ShoppingCart,
    title: 'Chatify',
    subtitle: 'Real-Time Messaging Platform',
    description: 'Engineered scalable messaging platform using Socket.io, React, Node.js with WebSocket optimization and end-to-end encryption.',
    tech: ['React', 'Node.js', 'Socket.io', 'WebSocket', 'Encryption'],
    highlights: [
      'Real-time messaging',
      'WebSocket optimization',
      'End-to-end encryption',
      'JWT authentication'
    ],
    color: 'from-pink-500/20 to-orange-500/20',
    githubLink: 'https://github.com/Shivprasadpravindongapure/Chatify',
  },
  {
    icon: Building2,
    title: 'Developer Portfolio',
    subtitle: 'Personal Portfolio Website',
    description: 'Modern responsive portfolio website built with React, Next.js, and Tailwind CSS featuring smooth animations and dark mode support.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Responsive design',
      'Dark mode support',
      'Smooth animations',
      'Modern UI/UX'
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    githubLink: 'https://github.com/Shivprasadpravindongapure/shiv-dev-folio',
  },
  {
    icon: Github,
    title: 'IoT Home Automation',
    subtitle: 'Smart Home System',
    description: 'IoT-based home automation system using Arduino/ESP32 with real-time device control and monitoring dashboards.',
    tech: ['Arduino', 'ESP32', 'MQTT', 'Cloud Dashboard'],
    highlights: [
      'Real-time device control',
      'Sensor integration',
      'MQTT protocol',
      'Cloud monitoring'
    ],
    color: 'from-pink-500/20 to-orange-500/20',
    githubLink: 'https://github.com/Shivprasadpravindongapure/IoT-Home-Automation',
  },
  {
    icon: Sparkles,
    title: 'NotegenAI',
    subtitle: 'AI-Powered Note Taking',
    description: 'AI-powered note-taking application with intelligent summarization and organization features.',
    tech: ['Python', 'OpenAI APIs', 'NLP', 'Summarization'],
    highlights: [
      'AI-powered summarization',
      'Intelligent organization',
      'OpenAI integration',
      'Note management'
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    githubLink: 'https://github.com/Shivprasadpravindongapure/NotegenAI',
  },
  {
    icon: Building2,
    title: 'DSA Solver',
    subtitle: 'Algorithm Practice Platform',
    description: 'Comprehensive Data Structures and Algorithms problem solver with solutions in multiple programming languages.',
    tech: ['Python', 'Data Structures', 'Algorithms', 'LeetCode'],
    highlights: [
      'Multiple language support',
      'Algorithm visualization',
      'Problem solutions',
      'Competitive programming'
    ],
    color: 'from-pink-500/20 to-orange-500/20',
    githubLink: 'https://github.com/Shivprasadpravindongapure/DSA-Solver',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4 block animate-fade-up">
            Featured Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up text-lg" style={{ animationDelay: '0.2s' }}>
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
              
              <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-soft group-hover:shadow-elevated transition-all duration-500 flex flex-col z-10">
                {/* Icon */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <project.icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground font-heading mb-1 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground/90 text-sm leading-relaxed mb-6 font-body">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70" />
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
                <div className="flex gap-3 mt-auto">
                  <Button variant="default" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white transition-all shadow-md" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Repository
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
