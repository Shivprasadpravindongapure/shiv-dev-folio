import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden py-12 px-6"
      style={{
        background: 'hsl(220, 30%, 3%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                fontFamily: "'Syne', sans-serif",
              }}
            >
              S
            </div>
            <div>
              <div className="text-sm font-bold text-white/70" style={{ fontFamily: "'Syne', sans-serif" }}>
                Shivprasad Dongapure
              </div>
              <div className="text-[10px] text-white/25 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Full Stack · AI/ML · Open Source
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white/20 text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © {year} Shivprasad Dongapure · Built with React & ❤️
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Shivprasadpravindongapure', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shivprasad-dongapure', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:prasaddongapure7660@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-white/70 hover:bg-white/5 transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
