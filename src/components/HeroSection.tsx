import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const roles = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'Problem Solver',
  'System Architect',
  'Open Source Builder',
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Shivprasadpravindongapure', label: 'GitHub', color: 'hover:text-white hover:border-white/30 hover:bg-white/5' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shivprasad-dongapure', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5' },
  { icon: Mail, href: 'mailto:Prasaddongapure7660@gmail.com', label: 'Email', color: 'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5' },
];

const stats = [
  { value: '200+', label: 'DSA Problems' },
  { value: '6+', label: 'Projects Built' },
  { value: '8.05', label: 'CGPA' },
  { value: '2+', label: 'Internships' },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const progress = Math.min(window.scrollY / winHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'hsl(220, 30%, 4%)' }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[1000] transition-all duration-100"
        style={{
          width: `${scrollProgress * 100}%`,
          background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)',
          boxShadow: '0 0 10px rgba(99,102,241,0.7)',
        }}
      />

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(220,30%,4%)_80%)] pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)' }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container-narrow mx-auto px-6 lg:px-12 pt-32 pb-16 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass animate-border-glow cursor-default select-none"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
              <div className="pulse-dot" />
              <span className="text-emerald-400 font-semibold tracking-widest uppercase">
                Open to SDE Internships · 2025–2026
              </span>
            </div>
          </motion.div>

          {/* Name block */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-base font-mono text-indigo-400/70 mb-3 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              &lt;Hello, World /&gt;
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.0] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #818cf8 40%, #a78bfa 60%, #c084fc 80%, #e879f9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Shivprasad Dongapure
              </span>
              <span className="block text-[65%] text-white/50 font-semibold tracking-wide">
                Software Engineer · Full Stack · AI/ML
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-muted-foreground">
              <span className="text-indigo-400/50">[</span>
              <span
                className="min-w-[280px] text-left"
                style={{
                  background: 'linear-gradient(90deg, #818cf8, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {displayText}
              </span>
              <span className="w-0.5 h-7 bg-indigo-400 cursor-blink inline-block" />
              <span className="text-indigo-400/50">]</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-center text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            Building scalable systems and intelligent applications — from AI traffic management with YOLOv8 to real-time communication platforms. CE student @ GCE Jalgaon (CGPA: 8.05).
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 25px rgba(99,102,241,0.4)',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white/80 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              whileHover={{ scale: 1.04, background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.4)', color: '#818cf8' }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 text-white/40 transition-all duration-300 ${s.color}`}
                style={{ background: 'rgba(255,255,255,0.03)' }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon className="w-4 h-4" />
                <span className="text-xs font-semibold hidden sm:block tracking-wide">{s.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative text-center p-5 rounded-2xl cursor-default group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.05)' }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/35 font-medium tracking-wide uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll CTA */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/20 hover:text-indigo-400 transition-colors duration-300 group"
        >
          <div className="text-[10px] font-mono tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>scroll</div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/5 transition-all duration-300">
            <ArrowDown className="w-4 h-4" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
