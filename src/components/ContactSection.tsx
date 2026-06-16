import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EMAILJS SETUP INSTRUCTIONS:
  // 1. Create an account at https://www.emailjs.com/
  // 2. Create an Email Service and note the SERVICE_ID
  // 3. Create an Email Template and note the TEMPLATE_ID
  // 4. Get your PUBLIC_KEY from Account -> API Keys
  // 5. Replace the placeholder strings below with your actual IDs
  
  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      alert("Please configure EmailJS credentials in the source code first.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const socials = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/Shivprasadpravindongapure', color: 'hover:text-white hover:bg-white/10' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/shivprasad-dongapure-35760a290', color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10' },
    { name: 'LeetCode', icon: <Code2 size={20} />, url: '#', color: 'hover:text-amber hover:bg-amber/10' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:prasaddongapure7660@gmail.com', color: 'hover:text-cyan hover:bg-cyan/10' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container-narrow px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="section-badge mb-4">07. Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch.</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          
          {/* Social Links Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                I'm currently looking for new opportunities and internships. Whether you have a question, 
                a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl glass border border-white/5 transition-all duration-300 group ${social.color}`}
                >
                  <div className="text-text-muted transition-colors group-hover:text-inherit">
                    {social.icon}
                  </div>
                  <span className="font-medium text-white transition-colors group-hover:text-inherit">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 flex flex-col space-y-6">
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-surface-2 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Hello Shivprasad..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent text-white font-medium hover:bg-accent-bright transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center font-medium">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-rose text-sm text-center font-medium">Something went wrong. Please try again.</p>
              )}

            </form>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
