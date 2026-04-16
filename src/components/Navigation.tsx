import { useState } from 'react';
import { Menu, X, Code, Github, Mail, Zap, Rocket, Star, Globe, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About', icon: Sparkles },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Rocket },
  { href: '#developer-profiles', label: 'Analytics', icon: Zap },
  { href: '#resume', label: 'Resume', icon: Star },
  { href: '#achievements', label: 'Awards', icon: Globe },
  { href: '#contact', label: 'Contact', icon: Heart },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 80);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      const offset = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    }, { passive: true });
  }

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? 'rgba(10, 12, 20, 0.85)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(99,102,241,0.12)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-narrow mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                fontFamily: "'Syne', sans-serif",
              }}
            >
              S
            </div>
            <span
              className="hidden sm:block font-bold text-white/80 group-hover:text-white transition-colors"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em' }}
            >
              hivprasad
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-indigo-400'
                      : 'text-white/40 hover:text-white/80'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.01em' }}
                  whileHover={{ y: -1 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      layoutId="nav-active-pill"
                      style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop hire me */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="https://github.com/Shivprasadpravindongapure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 border border-white/8"
              whileHover={{ scale: 1.08, y: -1 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 16px rgba(99,102,241,0.3)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-3.5 h-3.5" />
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white/60 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5 text-indigo-400" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{
              background: 'rgba(8, 10, 18, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Grid bg */}
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-3 px-8 py-24">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="w-full max-w-sm flex items-center justify-between p-5 rounded-2xl transition-all duration-300"
                    style={{
                      background: isActive ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.03)',
                      border: isActive ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: isActive ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <link.icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-white/40'}`} />
                      </div>
                      <span
                        className={`font-bold text-lg ${isActive ? 'text-indigo-400' : 'text-white/70'}`}
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {link.label}
                      </span>
                    </div>
                    {isActive && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#818cf8', boxShadow: '0 0 10px rgba(129,140,248,0.8)' }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="w-full max-w-sm mt-4 py-5 rounded-2xl font-bold text-white text-lg text-center transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.4)',
                  fontFamily: "'Syne', sans-serif",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1 }}
              >
                Hire Me Today
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
