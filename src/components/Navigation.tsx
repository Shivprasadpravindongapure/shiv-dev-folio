import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#experience',   label: 'Experience' },
  { href: '#github',       label: 'GitHub' },
  { href: '#profiles',     label: 'Profiles' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact',      label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollProgress = useRef(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Scroll progress bar
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${scrollProgress.current}%`;
      }

      // Active section detection
      const offset = window.scrollY + 140;
      for (const link of navLinks) {
        const id = link.href.replace('#', '');
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        ref={barRef}
        className="fixed top-0 left-0 h-[2px] z-[1001] transition-none pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #7C6EFA, #A78BFA)', width: '0%' }}
      />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: isScrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(124,110,250,0.1)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-narrow mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              S
            </div>
            <span
              className="hidden sm:block font-semibold text-white/70 group-hover:text-white transition-colors text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Shivprasad
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-250 ${
                    isActive
                      ? 'text-[#A78BFA]'
                      : 'text-white/40 hover:text-white/75'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      layoutId="nav-pill"
                      style={{ background: 'rgba(124,110,250,0.1)', border: '1px solid rgba(124,110,250,0.18)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://github.com/Shivprasadpravindongapure"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/35 hover:text-white hover:bg-white/5 transition-all duration-250"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold text-white transition-all duration-250"
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #7C3AED)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Mail className="w-3.5 h-3.5" />
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/50 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-4.5 h-4.5 text-[#A78BFA]" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'rgba(8,8,16,0.97)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-2 px-8 py-24">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="w-full max-w-xs flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-250"
                    style={{
                      background: isActive ? 'rgba(124,110,250,0.1)' : 'rgba(255,255,255,0.025)',
                      border: isActive ? '1px solid rgba(124,110,250,0.25)' : '1px solid rgba(255,255,255,0.05)',
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span
                      className={`font-semibold text-base ${isActive ? 'text-[#A78BFA]' : 'text-white/60'}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {link.label}
                    </span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#A78BFA', boxShadow: '0 0 8px rgba(167,139,250,0.8)' }} />}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="w-full max-w-xs mt-4 py-4 rounded-xl font-bold text-white text-center"
                style={{
                  background: 'linear-gradient(135deg, #7C6EFA, #7C3AED)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1 }}
              >
                Hire Me
              </motion.a>

              <motion.div
                className="flex items-center gap-3 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.2 }}
              >
                {[
                  { icon: Github, href: 'https://github.com/Shivprasadpravindongapure', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/shivprasad-dongapure-35760a290', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:Prasaddongapure7660@gmail.com', label: 'Email' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/35 hover:text-white transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
