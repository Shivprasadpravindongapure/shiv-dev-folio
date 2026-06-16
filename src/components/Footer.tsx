import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-8 mt-12 bg-navy">
      <div className="container-narrow px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-text-muted text-sm font-medium">
          &copy; {currentYear} Built by <span className="text-white">Shivprasad Dongapure</span>.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors text-sm font-medium border border-white/5 hover:border-white/10"
        >
          <span>Back to top</span>
          <ArrowUp size={16} />
        </button>
        
      </div>
    </footer>
  );
};

export default Footer;
