import { motion } from 'framer-motion';

const stats = [
  { value: '200+', label: 'LeetCode', desc: 'Problems Solved' },
  { value: 'Elite+Gold', label: 'NPTEL', desc: 'ML & Deep Learning' },
  { value: '1st Place', label: 'Hackathon', desc: 'National Level' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: '#10101A' }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-dots-subtle opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(124,110,250,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">
            <span>✦</span>
            About Me
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* LEFT: Photo */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(124,110,250,0.15) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Photo frame */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid rgba(124,110,250,0.2)',
                  boxShadow: '0 0 40px rgba(124,110,250,0.1)',
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,15,0.3) 0%, transparent 50%)',
                  }}
                />
                <img
                  src="/DEV.JPG"
                  alt="Shivprasad Dongapure — Full-Stack Developer & AI/ML Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="px-4 py-2.5 rounded-xl flex items-center gap-2"
                  style={{
                    background: 'rgba(8,8,16,0.95)',
                    border: '1px solid rgba(124,110,250,0.25)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="pulse-dot" />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: '#F0EFF6', fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Open to Internships
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
              >
                Building AI-powered{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  full-stack systems
                </span>
              </h2>

              <p
                className="leading-relaxed text-base"
                style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
              >
                Final-year B.Tech Computer Engineering student at{' '}
                <span style={{ color: '#F0EFF6', fontWeight: 600 }}>
                  Government College of Engineering, Jalgaon
                </span>{' '}
                (graduating 2027). I build full-stack applications with AI integrations — from real-time computer
                vision systems to LLM pipelines. Open to remote internships.
              </p>
            </motion.div>

            {/* 3 stat pills */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 flex flex-col items-center text-center px-4 py-4 rounded-xl cursor-default"
                  style={{
                    background: 'rgba(124,110,250,0.06)',
                    border: '1px solid rgba(124,110,250,0.14)',
                  }}
                >
                  <span
                    className="text-lg font-bold mb-0.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: '#F0EFF6', fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-[10px] mt-0.5"
                    style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.desc}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Quick highlights */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              {[
                'Full-Stack Development',
                'AI/ML Integration',
                'Real-Time Systems',
                'LLM Pipelines',
                'Computer Vision',
                'REST APIs',
              ].map((tag) => (
                <span key={tag} className="skill-pill">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
