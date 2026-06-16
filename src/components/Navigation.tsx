import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/80 backdrop-blur-[12px] border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-narrow px-6 py-4 flex items-center justify-between">
        {/* Logo Monogram */}
        <a href="#" className="relative group">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center transition-all group-hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <span className="font-heading font-bold text-lg text-white">SD</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-muted hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a
            href="/shivprasad_dongapure.pdf"
            download="shivprasad_dongapure.pdf"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all font-medium text-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-muted hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-[12px] border-b border-white/5 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-white text-base font-medium py-2 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <a
                href="/shivprasad_dongapure.pdf"
                download="shivprasad_dongapure.pdf"
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all font-medium text-sm w-full mr-4"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <button
                onClick={toggleTheme}
                className="p-3 text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-colors border border-white/5"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
