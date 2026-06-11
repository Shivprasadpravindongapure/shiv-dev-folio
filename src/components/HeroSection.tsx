import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-100 pointer-events-none" />

      {/* Radial ambient glow — static, no animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,110,250,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container-narrow mx-auto px-6 lg:px-12 pt-28 pb-16 w-full"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* Status pill */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full"
              style={{
                background: 'rgba(124,110,250,0.07)',
                border: '1px solid rgba(124,110,250,0.18)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
              }}
            >
              <div className="pulse-dot" />
              <span className="text-emerald-400 font-medium tracking-wider uppercase">
                Open to Remote Internships
              </span>
            </div>
          </motion.div>

          {/* Name with aurora gradient border */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Wrapper that applies aurora border only to the name */}
            <div className="inline-block relative">
              {/* Aurora glowing border behind name */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(270deg, #7C6EFA, #A78BFA, #C4B5FD, #818CF8, #7C3AED, #A78BFA)',
                  backgroundSize: '300% 300%',
                  animation: 'aurora-border 4s ease infinite',
                  padding: '2px',
                  borderRadius: '16px',
                  filter: 'blur(0px)',
                  opacity: 0.6,
                  zIndex: 0,
                }}
              />
              <div
                className="relative z-10 px-6 py-2 rounded-[14px]"
                style={{ background: '#080810' }}
              >
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #F0EFF6 0%, #A78BFA 45%, #C4B5FD 70%, #F0EFF6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Shivprasad Dongapure
                  </span>
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Role subtitle */}
          <motion.p
            className="text-lg md:text-xl font-medium mb-4"
            style={{ color: '#A78BFA', fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Full-Stack Developer &amp; AI/ML Engineer
          </motion.p>

          {/* One-liner */}
          <motion.p
            className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            Building AI-powered systems that solve real-world problems.
          </motion.p>

          {/* 4 CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/Shivprasadpravindongapure"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-btn"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white/75 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shivprasad-dongapure-35760a290"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-btn"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white/75 hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              LinkedIn
            </a>

            {/* View / Download Resume — two actions */}
            <div className="flex items-center gap-2 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(124,110,250,0.4)', boxShadow: '0 0 24px rgba(124,110,250,0.18)' }}>
              {/* View in browser */}
              <a
                href="/resume-shivprasad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-resume-view-btn"
                className="flex items-center gap-2 px-4 py-3 font-semibold text-sm text-white transition-all duration-250 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #7C6EFA, #6D28D9)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Eye className="w-4 h-4" />
                View Resume
              </a>
              {/* Divider */}
              <div className="w-px h-6 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }} />
              {/* Download */}
              <a
                href="/resume-shivprasad.pdf"
                download="Shivprasad_Dongapure_Resume.pdf"
                id="hero-resume-download-btn"
                className="flex items-center justify-center px-3 py-3 text-white transition-all duration-250 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #7C6EFA, #6D28D9)',
                  fontFamily: "'Inter', sans-serif",
                }}
                title="Download Resume"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Email Me */}
            <a
              href="mailto:Prasaddongapure7660@gmail.com"
              id="hero-email-btn"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#A78BFA] hover:text-white transition-all duration-250 hover:-translate-y-0.5"
              style={{
                background: 'rgba(124,110,250,0.08)',
                border: '1px solid rgba(124,110,250,0.22)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </motion.div>

          {/* Minimal stat row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { value: '200+', label: 'LeetCode' },
              { value: 'GCE', label: 'Jalgaon' },
              { value: '2027', label: 'Graduating' },
              { value: '1st', label: 'Hackathon' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5">
                <span
                  className="font-bold text-[#A78BFA]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </span>
                <span style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="float-scroll absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-[#A78BFA] transition-colors duration-300 group"
        style={{ transform: 'translateX(-50%)' }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          scroll
        </span>
        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/8 group-hover:border-[#7C6EFA]/30 transition-colors">
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </a>
    </section>
  );
}
