import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code, Github, Linkedin, Mail, Phone, MapPin, Rocket, Star, Zap, Globe, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About', icon: Sparkles },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Rocket },
  { href: '#developer-profiles', label: 'Analytics', icon: Zap },
  { href: '#resume', label: 'Resume', icon: Star },
  { href: '#technical-achievements', label: 'Achievements', icon: Globe },
  { href: '#contact', label: 'Contact', icon: Heart },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Show dock after scrolling past hero top
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const adjustedScrollPosition = scrollPosition + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (adjustedScrollPosition >= offsetTop && adjustedScrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-2xl border-b border-border shadow-soft py-3 lg:py-4'
            : 'bg-background/40 backdrop-blur-md py-4 lg:py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo / Home Button */}
          <motion.a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 text-indigo-500 border border-indigo-500/30 shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Code className="w-5 h-5 flex-shrink-0" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 transition-all duration-300 group ${
                    isActive
                      ? 'text-indigo-500 font-semibold'
                      : 'text-muted-foreground hover:text-foreground font-medium'
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-1.5">
                    <link.icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-muted-foreground group-hover:text-indigo-300'}`} />
                    <span className="text-sm tracking-wide">{link.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-t-full"
                      layoutId="activeNavDockBackground"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block pl-2 border-l border-white/10">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium px-6 py-2 h-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">Hire Me</span>
              </div>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-card/60 border border-white/10 text-foreground hover:bg-secondary/80 shrink-0 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-indigo-400" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`w-full max-w-sm flex items-center justify-between p-4 rounded-3xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                        : 'bg-card/30 border border-white/5 text-foreground hover:bg-secondary/50'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl ${isActive ? 'bg-indigo-500/20 text-indigo-400' : 'bg-secondary border border-white/5'}`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-semibold text-lg tracking-wide">{link.label}</span>
                    </div>
                    {isActive && <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />}
                  </motion.a>
                );
              })}
              
              <motion.div
                 className="w-full max-w-sm mt-8 pt-8 border-t border-white/10"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: navLinks.length * 0.05 + 0.2, duration: 0.4 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-7 rounded-3xl shadow-xl shadow-indigo-500/20 border-none text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Hire Me Today
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
