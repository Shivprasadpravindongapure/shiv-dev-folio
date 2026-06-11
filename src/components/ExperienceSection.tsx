import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experience = {
  company: 'NTS Nihon Global',
  role: 'Software Developer Intern',
  duration: 'June 2025 – July 2025',
  location: 'Remote',
  type: 'Full-Stack',
  points: [
    'Built React.js frontend modules with reusable components integrated with Node.js + Express.js REST APIs.',
    'Designed JWT-authenticated APIs with structured validation for reliable data pipelines.',
    'Collaborated via Git/GitHub in Agile sprint environment with code reviews.',
  ],
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 100% 50%, rgba(124,110,250,0.05) 0%, transparent 70%)',
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
              Professional Experience
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Work{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience
            </span>
          </motion.h2>
        </div>

        {/* Single experience card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative rounded-2xl p-8 group transition-all duration-350"
            style={{
              background: '#10101A',
              border: '1px solid rgba(124,110,250,0.14)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,110,250,0.28)';
              (e.currentTarget as HTMLElement).style.background = '#181828';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,110,250,0.14)';
              (e.currentTarget as HTMLElement).style.background = '#10101A';
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-6 right-6 h-[1px] opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent, #7C6EFA, transparent)',
              }}
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              {/* Left info */}
              <div className="flex items-start gap-4">
                {/* Company icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(124,110,250,0.1)', border: '1px solid rgba(124,110,250,0.2)' }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: '#A78BFA' }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-0.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
                  >
                    {experience.role}
                  </h3>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: '#A78BFA', fontFamily: "'Inter', sans-serif" }}
                  >
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Right meta */}
              <div className="flex flex-col gap-1.5 items-start sm:items-end flex-shrink-0">
                <div
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.duration}
                </div>
                <div
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {experience.location}
                </div>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                  style={{
                    background: 'rgba(124,110,250,0.1)',
                    border: '1px solid rgba(124,110,250,0.2)',
                    color: '#A78BFA',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {experience.type}
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3">
              {experience.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#7C6EFA', boxShadow: '0 0 6px rgba(124,110,250,0.5)' }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
