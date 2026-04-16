import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle, Code, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'prasaddongapure7660@gmail.com', href: 'mailto:prasaddongapure7660@gmail.com', color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.2)' },
  { icon: Phone, label: 'Phone', value: '+91 8956657409', href: 'tel:+918956657409', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.2)' },
  { icon: MapPin, label: 'Location', value: 'India', href: '#', color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Shivprasadpravindongapure', desc: 'Check out my code', color: '#e2e8f0', bg: 'rgba(226,232,240,0.06)', border: 'rgba(226,232,240,0.1)' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivprasad-dongapure', desc: "Let's connect professionally", color: '#60a5fa', bg: 'rgba(96,165,250,0.06)', border: 'rgba(96,165,250,0.1)' },
  { icon: Code, label: 'LeetCode', href: 'https://leetcode.com/u/ShivprasadPravinDongapure/', desc: '200+ problems solved', color: '#fb923c', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.1)' },
  { icon: Trophy, label: 'Codeforces', href: 'https://codeforces.com/profile/BitShiv', desc: 'Specialist rank', color: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.1)' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: 'hsl(220, 30%, 5%)' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.07)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div className="flex justify-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-badge"><span className="text-indigo-400">✦</span>Get In Touch</div>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Connect
            </span>
          </motion.h2>
          <motion.p className="text-white/40 max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Ready to build something amazing together? Always excited about new opportunities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info + socials */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                style={{ background: info.bg, border: `1px solid ${info.border}` }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: info.bg, border: `1px solid ${info.border}` }}>
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-xs text-white/30 mb-0.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{info.label}</div>
                  <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>// Connect</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-2xl transition-all duration-300 overflow-hidden"
                    style={{ background: link.bg, border: `1px solid ${link.border}` }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${link.color}15` }}>
                        <link.icon className="w-4 h-4" style={{ color: link.color }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/80" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{link.label}</p>
                        <p className="text-[10px] text-white/30">{link.desc}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3 className="text-xl font-black text-white/90 mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-black text-white/90 mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>Message Sent!</h4>
                  <p className="text-sm text-white/40">Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['name', 'email'].map((field) => (
                      <input
                        key={field}
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field === 'name' ? 'Your Name' : 'Your Email'}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(99,102,241,0.4)';
                          e.target.style.background = 'rgba(99,102,241,0.05)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.08)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                          e.target.style.background = 'rgba(255,255,255,0.04)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    ))}
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Space Grotesk', sans-serif" }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.4)'; e.target.style.background = 'rgba(99,102,241,0.05)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-300 resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Space Grotesk', sans-serif" }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.4)'; e.target.style.background = 'rgba(99,102,241,0.05)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                      boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 0 35px rgba(99,102,241,0.55)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
