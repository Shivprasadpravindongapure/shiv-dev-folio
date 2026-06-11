import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Prasaddongapure7660@gmail.com',
    href: 'mailto:Prasaddongapure7660@gmail.com',
    desc: 'Best way to reach me',
    accent: '#FB923C',
    glow: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.18)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/shivprasad-dongapure-35760a290',
    href: 'https://www.linkedin.com/in/shivprasad-dongapure-35760a290',
    desc: 'Professional network',
    accent: '#60A5FA',
    glow: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.18)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Shivprasadpravindongapure',
    href: 'https://github.com/Shivprasadpravindongapure',
    desc: 'Code & projects',
    accent: '#A78BFA',
    glow: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.18)',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: '#10101A' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(124,110,250,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span>✦</span>
              Get In Touch
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let&apos;s{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Connect
            </span>
          </motion.h2>
          <motion.p
            className="text-base max-w-md mx-auto"
            style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Open to remote internships, collaborations, and interesting projects. Let's build something great.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : '_self'}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: s.glow,
                  border: `1px solid ${s.border}`,
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.accent}15`, border: `1px solid ${s.border}` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.accent }} />
                </div>
                <span
                  className="font-bold text-sm mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F0EFF6' }}
                >
                  {s.label}
                </span>
                <span
                  className="text-[11px] mb-1.5 truncate w-full"
                  style={{ color: s.accent, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[11px]"
                  style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
                >
                  {s.desc}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <a
              href="mailto:Prasaddongapure7660@gmail.com"
              id="contact-send-email-btn"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-250 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7C6EFA, #7C3AED)',
                boxShadow: '0 0 24px rgba(124,110,250,0.25)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/shivprasad-dongapure-35760a290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-250 hover:text-[#A78BFA]"
                style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
              <span style={{ color: '#8B8AA0' }}>·</span>
              <a
                href="https://github.com/Shivprasadpravindongapure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-250 hover:text-[#A78BFA]"
                style={{ color: '#8B8AA0', fontFamily: "'Inter', sans-serif" }}
              >
                <Github className="w-4 h-4" style={{ color: '#A78BFA' }} />
                GitHub
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
