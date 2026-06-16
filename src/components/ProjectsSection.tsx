import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import githubData from '../data/github.json';

// Define featured projects with extra metadata not always in GitHub
const featuredProjects = [
  {
    id: 'linkloom',
    name: 'LinkLoom',
    description: 'Real-time chat and video calling app with end-to-end encryption.',
    tech: ['React', 'Node.js', 'Stream API', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/Shivprasadpravindongapure/LinkLoom',
    live: '#',
    featured: true
  },
  {
    id: 'civic',
    name: 'Crowdsourced Civic Issue Reporting',
    description: 'A smart city issue reporting system with role-based dashboards.',
    tech: ['MERN', 'Leaflet.js', 'Cloudinary', 'AWS S3'],
    category: 'Full Stack',
    github: 'https://github.com/Shivprasadpravindongapure/smart-civic-reporting',
    live: '#',
    featured: true
  },
  {
    id: 'traffic',
    name: 'AI Traffic Management',
    description: 'Intelligent traffic management system using real-time CCTV data to dynamically control signals.',
    tech: ['YOLOv8', 'FastAPI', 'Socket.IO', 'React'],
    category: 'AI/ML',
    github: 'https://github.com/Shivprasadpravindongapure/AI-Based-Intelligent-Traffic-Managment-System',
    live: '#',
    featured: true
  },
  {
    id: 'compiler',
    name: 'AI App Compiler',
    description: 'An intelligent compiler application leveraging LLMs to analyze and generate code.',
    tech: ['Python', 'FastAPI', 'React', 'Gemini API'],
    category: 'AI/ML',
    github: 'https://github.com/Shivprasadpravindongapure/AI-App-Compiler',
    live: '#',
    featured: true
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  // Combine featured with fetched repos, avoiding duplicates
  const featuredIds = featuredProjects.map(p => p.github.split('/').pop()?.toLowerCase());
  
  const githubRepos = githubData.topRepos
    .filter(repo => !featuredIds.includes(repo.name.toLowerCase()) && repo.name !== 'Shivprasadpravindongapure' && repo.name !== 'shiv-dev-folio')
    .map(repo => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || 'No description provided.',
      tech: [repo.language || 'Code'],
      category: repo.language === 'Python' || repo.topics?.includes('ai') ? 'AI/ML' : 'Backend', // Simplified logic
      github: repo.html_url,
      live: null,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      featured: false
    }));

  const allProjects = [...featuredProjects, ...githubRepos];
  
  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const filters = ['All', 'Full Stack', 'AI/ML', 'Backend'];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container-narrow px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-badge mb-4">04. Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold">Some things I've built.</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f 
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                    : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                variants={item}
                key={project.id}
                className="group h-full"
              >
                <div className="glass h-full p-6 rounded-2xl border border-white/5 hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] flex flex-col">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {project.featured ? <Star size={20} /> : <Github size={20} />}
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {project.live && project.live !== '#' && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-text-muted hover:text-cyan transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-text-muted text-sm mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Optional GitHub Stats */}
                  {(project.stars !== undefined || project.forks !== undefined) && !project.featured && (
                    <div className="flex items-center gap-4 text-xs text-text-dim mb-4 font-mono">
                      {project.stars > 0 && (
                        <span className="flex items-center gap-1"><Star size={12} /> {project.stars}</span>
                      )}
                      {project.forks > 0 && (
                        <span className="flex items-center gap-1"><GitFork size={12} /> {project.forks}</span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-cyan">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
