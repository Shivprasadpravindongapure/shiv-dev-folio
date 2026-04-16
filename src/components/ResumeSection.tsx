import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Briefcase, GraduationCap, BookOpen, Trophy, Code2, Award, Cloud, FileText } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'NTS Nihon Global',
    location: 'Remote',
    duration: 'June 2025 – July 2025',
    type: 'Full-Stack',
    typeColor: '#818cf8',
    points: [
      'Built and shipped full-stack features using React and Node.js with clean, maintainable code',
      'Designed and integrated RESTful APIs with JWT-based authentication and backend business logic',
      'Collaborated in an Agile/Scrum environment, debugging and improving feature stability',
    ],
  },
  {
    title: 'IoT Development Intern',
    company: 'SIBIC',
    location: 'Kolhapur',
    duration: 'June 2022 – July 2022',
    type: 'IoT',
    typeColor: '#34d399',
    points: [
      'Developed IoT-based home automation system using Arduino with real-time monitoring',
      'Integrated sensors with cloud dashboards for remote device control and data visualization',
      'Implemented MQTT protocol for efficient device-to-backend communication',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'Government College of Engineering, Jalgaon',
    duration: '2024 – Present',
    score: 'CGPA: 8.05',
    icon: GraduationCap,
    color: '#818cf8',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'ICRE, Gargoti',
    duration: '2021 – 2024',
    score: '80.81%',
    icon: BookOpen,
    color: '#a78bfa',
  },
];

const achievements = [
  { icon: Code2, text: 'Solved 200+ DSA problems on LeetCode', color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.15)' },
  { icon: Trophy, text: '2nd Prize – National Level DSA Competition', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.15)' },
  { icon: Award, text: '2nd Prize – C Programming & Project Competition', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.15)' },
  { icon: Trophy, text: 'National Level Hackathon (36-hour participant)', color: '#818cf8', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.15)' },
  { icon: Cloud, text: 'AWS Academy Cloud Foundations Certified (2026)', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.15)' },
  { icon: BookOpen, text: 'NPTEL: Machine Learning, Deep Learning; Java (Elite + Gold)', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.15)' },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 5%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.07)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span className="text-indigo-400">✦</span>
              Professional Profile
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Resume
            </span>
          </motion.h2>
          <motion.p
            className="text-white/40 max-w-xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            CE student with hands-on experience in Full-Stack, AI/ML, and Real-Time Systems. Open to SDE internship opportunities.
          </motion.p>

          {/* Download button */}
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              boxShadow: '0 0 25px rgba(99,102,241,0.4)',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.6)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Download className="w-4 h-4" />
            Download Resume (PDF)
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-5xl mx-auto">
          {/* LEFT: Experience + Education */}
          <div className="space-y-10">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.2)' }}
                >
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                </div>
                <h3 className="text-lg font-black text-white/90" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Experience
                </h3>
              </div>

              <div className="relative space-y-5">
                {/* Timeline line */}
                <div
                  className="absolute left-[15px] top-0 bottom-0 w-[1px]"
                  style={{ background: 'linear-gradient(to bottom, #6366f1, #a855f7, transparent)' }}
                />

                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-10 group"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-2 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-indigo-500 group-hover:bg-indigo-500/10"
                      style={{
                        background: 'hsl(220, 30%, 5%)',
                        border: '1px solid rgba(99,102,241,0.4)',
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500" style={{ boxShadow: '0 0 8px rgba(99,102,241,0.8)' }} />
                    </div>

                    <div
                      className="p-5 rounded-2xl transition-all duration-400 group"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.25)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)';
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-sm font-bold text-white/90 mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-white/40">
                            <span className="font-semibold text-white/60">{exp.company}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-1.5 text-[11px] font-bold rounded-full px-3 py-1 whitespace-nowrap self-start"
                          style={{
                            background: `${exp.typeColor}18`,
                            border: `1px solid ${exp.typeColor}30`,
                            color: exp.typeColor,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-white/40">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/60 flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
                >
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg font-black text-white/90" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ borderColor: `${edu.color}30`, background: `${edu.color}05` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}30` }}
                    >
                      <edu.icon className="w-5 h-5" style={{ color: edu.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white/85 mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-white/35 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="text-xs font-bold rounded-full px-2.5 py-0.5"
                          style={{ background: `${edu.color}18`, color: edu.color, border: `1px solid ${edu.color}30` }}
                        >
                          {edu.score}
                        </span>
                        <span className="text-xs text-white/30 flex items-center gap-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
                >
                  <Trophy className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="text-lg font-black text-white/90" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Achievements
                </h3>
              </div>

              <div className="space-y-3">
                {achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
                    style={{ background: ach.bg, border: `1px solid ${ach.border}` }}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.02, x: 2 }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: ach.bg }}
                    >
                      <ach.icon className="w-4 h-4" style={{ color: ach.color }} />
                    </div>
                    <p className="text-xs text-white/55 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {ach.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <motion.div
                className="mt-6 p-5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.05))',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  // Summary
                </p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Software developer focused on problem solving, backend systems, and real-time applications. Strong DSA skills with hands-on experience in MERN, Django, and cloud technologies.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
