import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5'],
    color: '#A78BFA',
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'REST APIs', 'Socket.IO', 'JWT'],
    color: '#818CF8',
  },
  {
    label: 'AI / ML',
    skills: ['YOLOv8', 'OpenCV', 'LangChain', 'Gemini API', 'OpenAI API', 'TensorFlow'],
    color: '#C4B5FD',
  },
  {
    label: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQLite'],
    color: '#A78BFA',
  },
  {
    label: 'Tools & Cloud',
    skills: ['Git', 'GitHub', 'Docker', 'AWS EC2', 'AWS S3', 'Vercel'],
    color: '#818CF8',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-80 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 0% 100%, rgba(124,110,250,0.05) 0%, transparent 70%)',
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
              Technical Arsenal
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
            Skills &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Expertise
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
            A production-ready toolkit built across full-stack, AI systems, cloud, and real-time applications.
          </motion.p>
        </div>

        {/* Skill groups as pill tags */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="rounded-2xl p-6"
              style={{
                background: '#10101A',
                border: '1px solid rgba(124,110,250,0.12)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
            >
              {/* Group label */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${group.color}, ${group.color}66)` }}
                />
                <span
                  className="tag-group-label"
                  style={{ color: group.color }}
                >
                  {group.label}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      borderColor: `${group.color}20`,
                      color: `${group.color}CC`,
                      background: `${group.color}08`,
                    }}
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
}
