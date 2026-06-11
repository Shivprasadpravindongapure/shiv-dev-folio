import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden py-10 px-6"
      style={{
        background: '#080810',
        borderTop: '1px solid rgba(124,110,250,0.08)',
      }}
    >
      {/* Subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(124,110,250,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              S
            </div>
            <div>
              <div
                className="text-sm font-semibold"
                style={{ color: '#F0EFF6', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Shivprasad Dongapure
              </div>
              <div
                className="text-[10px]"
                style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
              >
                Full-Stack · AI/ML Engineer
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="text-xs text-center"
            style={{ color: '#8B8AA0', fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {year} Shivprasad Dongapure · Built with React & ❤️
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
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
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-250 hover:text-[#A78BFA] hover:-translate-y-0.5"
                style={{
                  color: '#8B8AA0',
                  border: '1px solid rgba(124,110,250,0.1)',
                  background: 'rgba(124,110,250,0.04)',
                }}
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
