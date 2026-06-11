import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'AI App Compiler',
    description:
      '7-stage LLM pipeline that converts natural language prompts into validated app configurations with an automated repair loop. Integrates Gemini/OpenAI APIs with 10-rule validation engine.',
    tech: ['Python', 'FastAPI', 'React.js', 'Gemini API', 'OpenAI API', 'SQLite'],
    github: 'https://github.com/Shivprasadpravindongapure/AI-App-Compiler',
    accent: '#7C6EFA',
    accentSoft: 'rgba(124,110,250,0.12)',
    number: '01',
  },
  {
    id: 2,
    title: 'AI Traffic Management System',
    description:
      'Real-time computer vision system using YOLOv8 for vehicle detection, lane-load estimation, and emergency vehicle identification. Streams live analytics via Socket.IO to an interactive dashboard.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'React.js', 'Socket.IO'],
    github: 'https://github.com/Shivprasadpravindongapure',
    accent: '#A78BFA',
    accentSoft: 'rgba(167,139,250,0.12)',
    number: '02',
  },
  {
    id: 3,
    title: 'Crowdsourced Civic Issue Reporting',
    description:
      'Full-stack MERN platform with role-based dashboards for Citizens, Workers, and Admins. JWT authentication, geo-tagged issue mapping with Leaflet.js, and analytics tracking resolution metrics.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Leaflet.js', 'Cloudinary'],
    github: 'https://github.com/Shivprasadpravindongapure',
    accent: '#818CF8',
    accentSoft: 'rgba(129,140,248,0.12)',
    number: '03',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
      style={{ background: '#10101A' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots-subtle opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 100% 100%, rgba(124,110,250,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span>✦</span>
              Featured Work
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Selected{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-base max-w-lg mx-auto"
            style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Three flagship projects that demonstrate my depth across AI/ML and full-stack engineering.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl flex flex-col overflow-hidden cursor-default"
              style={{
                background: '#080810',
                border: '1px solid rgba(124,110,250,0.1)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -4,
                borderColor: `${project.accent}35`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.accentSoft}`,
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                }}
              />

              {/* Hover background tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${project.accentSoft}, transparent)`,
                }}
              />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Project number */}
                <div
                  className="text-5xl font-bold mb-4 select-none opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: project.accent,
                  }}
                >
                  {project.number}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3 leading-snug group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-medium"
                      style={{
                        background: `${project.accent}0D`,
                        border: `1px solid ${project.accent}20`,
                        color: `${project.accent}CC`,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#8B8AA0',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${project.accent}14`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}30`;
                    (e.currentTarget as HTMLElement).style.color = project.accent;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#8B8AA0';
                  }}
                >
                  <Github className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/Shivprasadpravindongapure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-250"
            style={{
              background: 'rgba(124,110,250,0.07)',
              border: '1px solid rgba(124,110,250,0.18)',
              color: '#A78BFA',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
