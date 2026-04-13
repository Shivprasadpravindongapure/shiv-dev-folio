import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-[45rem] h-[45rem] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-[40rem] h-[40rem] bg-gradient-to-tr from-pink-500/8 to-indigo-500/8 rounded-full blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f110_1px,transparent_1px),linear-gradient(to_bottom,#6366f110_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_80%)]" />
      </div>

      <motion.div
        className="container-narrow mx-auto px-6 lg:px-12 mt-24 sm:mt-28 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Availability badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/15 to-indigo-500/15 backdrop-blur-xl border border-emerald-500/25 shadow-[0_0_25px_rgba(16,185,129,0.15)] mb-10"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-foreground/90">
              Open to SDE Internships · Available 2025–2026
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05]"
            variants={itemVariants}
          >
            <span className="block text-foreground/70 font-medium text-xl sm:text-2xl md:text-3xl tracking-wide mb-3">
              Hello, I'm
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm pb-2 inline-block">
              Shivprasad
            </span>
            <br />
            <span className="text-foreground text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Dongapure
            </span>
          </motion.h1>

          {/* Role pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            variants={itemVariants}
          >
            {[
              { label: 'Full Stack Developer', color: 'border-indigo-500/30 text-indigo-300' },
              { label: 'AI/ML Engineer', color: 'border-purple-500/30 text-purple-300' },
              { label: 'Problem Solver', color: 'border-pink-500/30 text-pink-300' },
            ].map((role) => (
              <span
                key={role.label}
                className={`px-4 py-1.5 rounded-full border ${role.color} text-sm font-semibold bg-card/30 backdrop-blur-sm`}
              >
                {role.label}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Building scalable systems and intelligent applications — from AI traffic management with YOLOv8 to real-time communication platforms. Passionate about clean architecture and impactful engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-md mx-auto"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all duration-300 group"
            >
              <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-foreground/15 text-foreground bg-card/30 backdrop-blur-sm font-bold text-base hover:border-indigo-500/50 hover:bg-card/60 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/Shivprasadpravindongapure', label: 'GitHub', hoverColor: 'hover:text-white hover:border-white/30' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shivprasad-dongapure', label: 'LinkedIn', hoverColor: 'hover:text-blue-400 hover:border-blue-500/40' },
              { icon: Mail, href: 'mailto:Prasaddongapure7660@gmail.com', label: 'Email', hoverColor: 'hover:text-emerald-400 hover:border-emerald-500/40' },
              { icon: Code2, href: 'https://leetcode.com/u/ShivprasadPravinDongapure/', label: 'LeetCode', hoverColor: 'hover:text-orange-400 hover:border-orange-500/40' },
              { icon: Trophy, href: 'https://codeforces.com/profile/BitShiv', label: 'Codeforces', hoverColor: 'hover:text-blue-300 hover:border-blue-400/40' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/40 border border-white/8 backdrop-blur-sm text-muted-foreground ${social.hoverColor} transition-all duration-400`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <social.icon className="w-4 h-4" />
                <span className="text-xs font-semibold hidden sm:block">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-card/40 border border-white/10 backdrop-blur-sm text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-400"
        >
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
