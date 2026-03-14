import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, Sparkles, Rocket, Code, Heart, Star, Zap, Globe, Calendar, Clock, CheckCircle, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prasaddongapure7660@gmail.com',
      href: 'mailto:prasaddongapure7660@gmail.com',
      color: 'from-orange-500 to-red-500' // Using existing Tailwind colors for the icon enclosure
    },
    {
      icon: Phone,
      label: 'Call Me',
      value: '+91 8956657409',
      href: 'tel:+918956657409',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: 'https://maps.google.com/?q=India',
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Shivprasadpravindongapure',
      color: 'hover:from-gray-700 hover:to-gray-900',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shivprasad-dongapure-35760a290/',
      color: 'hover:from-blue-600 hover:to-blue-800',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/ShivprasadPravinDongapure/',
      color: 'hover:from-orange-500 hover:to-red-500',
      description: '120+ problems solved'
    },
    {
      icon: Trophy,
      label: 'Codeforces',
      href: 'https://codeforces.com/profile/BitShiv',
      color: 'hover:from-blue-500 hover:to-purple-500',
      description: 'Specialist rank'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset subject field
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.995] as const
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-500 border-indigo-500/20">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to build something amazing together? I'm always excited to hear about new opportunities and collaborations!
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? "_blank" : "_self"}
                rel={info.href.startsWith('http') ? "noopener noreferrer" : ""}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:shadow-elevated hover:border-indigo-500/30 transition-all duration-500 group"
                variants={itemVariants}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-10 text-white shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{info.label}</div>
                  <div className="font-semibold text-foreground group-hover:text-indigo-500 transition-colors">{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:border-slate-600/50 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{link.label}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="h-full bg-gradient-to-br from-card to-card/50 border-border/50 shadow-soft">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold font-heading">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name" 
                          className="bg-background/50 border-border/50 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-12 rounded-xl transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email" 
                          className="bg-background/50 border-border/50 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-12 rounded-xl transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject" 
                        className="bg-background/50 border-border/50 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-12 rounded-xl transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message..." 
                        className="min-h-[120px] bg-background/50 border-border/50 focus:border-indigo-500/50 focus:ring-indigo-500/20 rounded-xl transition-all resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4 animate-bounce" /> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Removed redundant secondary Call To Action block */}
      </div>
    </section>
  );
};

export default ContactSection;
