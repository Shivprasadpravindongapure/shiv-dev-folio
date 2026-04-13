import { motion } from 'framer-motion';
import { Download, FileText, Calendar, MapPin, ChevronRight, GraduationCap, Briefcase, Trophy, Award, BookOpen, Code2 } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'NTS Nihon Global',
      location: 'Remote',
      duration: 'June 2025 – July 2025',
      type: 'Full-Stack',
      points: [
        'Built and shipped full-stack features using React and Node.js with clean, maintainable code standards',
        'Designed and integrated RESTful APIs with JWT-based authentication and backend business logic',
        'Collaborated in an Agile/Scrum environment, contributing to debugging and improving feature stability',
      ],
    },
    {
      title: 'IoT Development Intern',
      company: 'SIBIC',
      location: 'Kolhapur',
      duration: 'June 2022 – July 2022',
      type: 'IoT',
      points: [
        'Developed an IoT-based home automation system using Arduino with real-time monitoring capabilities',
        'Integrated sensors with cloud dashboards for remote device control and data visualization',
        'Implemented MQTT protocol for efficient communication between devices and backend systems',
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
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'ICRE, Gargoti',
      duration: '2021 – 2024',
      score: '80.81%',
      icon: BookOpen,
    },
  ];

  const achievements = [
    { icon: Code2, text: 'Solved 200+ DSA problems on LeetCode', color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { icon: Trophy, text: '2nd Prize – National Level DSA Competition', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { icon: Award, text: '2nd Prize – C Programming & Project Competition', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { icon: Trophy, text: 'National Level Hackathon (36-hour participant)', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { icon: FileText, text: 'AWS Academy Cloud Foundations Certified (2026)', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: BookOpen, text: 'NPTEL: Machine Learning, Deep Learning; Java (Elite + Gold)', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold text-indigo-500 uppercase tracking-[0.2em] mb-4">
            📄 Professional Profile
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5 tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Computer Engineering student with hands-on experience in Full-Stack Development, AI/ML, and Real-Time Systems. Open to Software Development Engineer (SDE) internship opportunities.
          </p>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base shadow-[0_8px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download Resume (PDF)
          </a>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_380px] gap-8">
          {/* LEFT: Experience + Education */}
          <div className="space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-heading">Experience</h3>
              </div>

              <div className="space-y-5 relative">
                <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative pl-10 group"
                  >
                    <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 border-indigo-500/50 bg-card flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    </div>

                    <div className="p-5 rounded-2xl bg-card/70 border border-border/50 group-hover:border-indigo-500/30 group-hover:bg-card/90 transition-all duration-400 backdrop-blur-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-base font-bold text-foreground group-hover:text-indigo-400 transition-colors">{exp.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                            <span className="font-semibold text-foreground/80">{exp.company}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 whitespace-nowrap self-start">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/70 flex-shrink-0" />
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-heading">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-card/70 border border-border/50 hover:border-purple-500/30 hover:bg-card/90 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-all">
                      <edu.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-foreground mb-0.5">{edu.degree}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-0.5">{edu.score}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-heading">Achievements</h3>
              </div>

              <div className="space-y-3">
                {achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card/70 border border-border/50 hover:border-indigo-500/30 hover:bg-card/90 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className={`w-8 h-8 rounded-lg ${ach.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <ach.icon className={`w-4 h-4 ${ach.color}`} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ach.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Summary card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-500/20 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold text-indigo-400 mb-2">Summary</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Software developer focused on problem solving, backend systems, and real-time applications. Strong in DSA with hands-on experience building scalable applications using MERN stack, Django, and cloud technologies.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
