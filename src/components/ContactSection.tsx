import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, Sparkles, Rocket, Code, Heart, Star, Zap, Globe, Calendar, Clock, CheckCircle, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Prasaddongapure7660@gmail.com',
      href: 'mailto:Prasaddongapure7660@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8956657409',
      href: 'tel:+918956657409',
      color: 'from-green-500 to-emerald-500',
      description: 'Available for opportunities'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maharashtra, India',
      href: null,
      color: 'from-purple-500 to-pink-500',
      description: 'Open to remote work'
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
      setFormData({ name: '', email: '', message: '' });
      
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
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-500/20 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to build something amazing together? I'm always excited to hear about new opportunities and collaborations!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Reach Out Anytime
            </motion.h3>
            
            {contactInfo.map((item, index) => (
              <motion.div 
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover-lift group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{item.label}</h4>
                        {item.href ? (
                          <motion.a
                            href={item.href}
                            className="text-muted-foreground hover:text-white transition-colors duration-300 block"
                            whileHover={{ x: 5 }}
                          >
                            {item.value}
                          </motion.a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground/70 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6"
                  variants={itemVariants}
                >
                  Send Me a Message
                </motion.h3>
                
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    
                    <motion.div variants={itemVariants}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="inline-flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="inline-flex items-center gap-2">
                                <Send className="w-5 h-5" />
                                Send Message
                                <Rocket className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-700/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Ready to Build Something Amazing?</h3>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                I'm always excited to collaborate on innovative projects and challenging opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:Prasaddongapure7660@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shivprasad-dongapure-35760a290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
