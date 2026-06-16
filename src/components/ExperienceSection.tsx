import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "NTS Nihon Global",
    location: "Remote",
    period: "June 2025 – July 2025",
    description: [
      "Worked on full stack development using React and Node.js.",
      "Built and optimized RESTful APIs for improved application performance.",
      "Collaborated in an Agile team environment to deliver features on schedule."
    ],
    tech: ["React.js", "Node.js", "Express.js", "JWT", "Git"]
  },
  {
    id: 2,
    role: "IoT Intern",
    company: "SIBIC",
    location: "On-site",
    period: "Previous",
    description: [
      "Developed IoT-based home automation systems.",
      "Integrated sensors, microcontrollers, and cloud dashboards for real-time monitoring."
    ],
    tech: ["IoT", "Microcontrollers", "Cloud Dashboards", "Sensors"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container-narrow px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-badge mb-4">03. Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold">Where I've worked.</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10 md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-6 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(124,110,250,0.6)] z-10" />
                
                {/* Connector line for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden z-0"></div>

                <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-text-muted mt-1">
                        <Briefcase size={16} />
                        <span className="font-medium text-white">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-sm font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="list-none space-y-2 mb-6">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="text-text-muted flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="skill-pill !bg-transparent !border-white/10 hover:!border-accent/30 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
