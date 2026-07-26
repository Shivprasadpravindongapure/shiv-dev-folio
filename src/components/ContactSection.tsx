import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';
  return errors;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(err => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');

    // Simulate send (replace with EmailJS integration)
    await new Promise(res => setTimeout(res, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactItems = [
    { icon: '✉️', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: '📞', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: '⚡', label: 'LeetCode', value: 'ShivprasadPravinDongapure', href: personalInfo.socials.leetcode },
    { icon: '🐙', label: 'GitHub', value: 'Shivprasadpravindongapure', href: personalInfo.socials.github },
    { icon: '💼', label: 'LinkedIn', value: 'shivprasad-dongapure', href: personalInfo.socials.linkedin },
    { icon: '📍', label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="section">
      {/* Background gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139,92,246,0.06), transparent)', pointerEvents: 'none' }} />

      <div className="container" ref={ref} style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 1rem' }}>✉️ Contact</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9375rem', marginBottom: '2rem' }}>
              I'm currently open to internship opportunities, freelance projects, and full-time roles. Whether you want to build something amazing or just chat about tech — drop me a message!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactItems.map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius)',
                    background: 'var(--card)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '0.875rem', color: 'var(--text)', textDecoration: 'none', transition: 'var(--transition)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize: '0.875rem', color: 'var(--text)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Available badge */}
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 0 3px rgba(16,185,129,0.2)', flexShrink: 0 }} />
              <p style={{ fontSize: '0.875rem', color: '#34d399', fontWeight: 600 }}>
                Currently available for new opportunities
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card"
                style={{ padding: '3rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                  Thanks for reaching out! I'll get back to you within 24–48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="input"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, job opportunity..."
                    className="input"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="input"
                    rows={5}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.9375rem', padding: '0.875rem', opacity: status === 'loading' ? 0.75 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-sans)' }}
                >
                  {status === 'loading' ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin-slow 0.7s linear infinite', display: 'inline-block' }} />
                      Sending...
                    </span>
                  ) : (
                    '✉️ Send Message'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div[style*="grid-template-columns: 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
