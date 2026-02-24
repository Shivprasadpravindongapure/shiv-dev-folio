import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code, Github, Linkedin, Mail, Phone, MapPin, Rocket, Star, Zap, Globe, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About', icon: Sparkles },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Rocket },
  { href: '#coding-stats', label: 'Coding Stats', icon: Zap },
  { href: '#github-repos', label: 'GitHub', icon: Github },
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
      setIsScrolled(scrollPosition > 100); // Show header after scrolling past hero
      
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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-800/50 opacity-100'
          : 'bg-transparent opacity-0 pointer-events-none'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.995] }}
    >
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <motion.a
            href="#"
            className="group flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-slate-700/50 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-800/80 border border-slate-700/50 rounded-lg p-2">
                <Code className="w-5 h-5 text-slate-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg lg:text-xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors duration-300">
                Shivprasad
              </span>
              <span className="text-xs lg:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Full Stack Developer
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-slate-100 bg-slate-800/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{link.label}</span>
                </div>
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-400 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-slate-800/80 border border-slate-700/50 text-slate-200 font-medium px-5 py-2 rounded-lg hover:bg-slate-700/80 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Get In Touch</span>
                </div>
              </Button>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:bg-slate-700/80 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
