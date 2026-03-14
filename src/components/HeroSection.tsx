import { ArrowDown, Download, FolderOpen, Github, Linkedin, Mail, Code2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-20 w-[35rem] h-[35rem] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
      </div>

      <motion.div 
        className="container-narrow mx-auto px-6 lg:px-12 mt-24 sm:mt-28 lg:mt-32 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Enhanced Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-8 md:mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.span 
              className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold tracking-wide text-foreground">
              🚀 Seeking SDE Intern Opportunities
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1] relative"
            variants={itemVariants}
          >
            <span className="block text-foreground font-semibold mb-2 opacity-90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">Hello, I'm</span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm pb-2 inline-block filter hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-700">
              Shivprasad P. Dongapure
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p 
            className="text-lg md:text-2xl text-muted-foreground/90 mb-10 font-body font-light tracking-wide flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-4 gap-x-6"
            variants={itemVariants}
          >
            <span className="inline-flex items-center gap-2.5 bg-card/40 px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-indigo-400" />
              Computer Engineer
            </span>
            <span className="inline-flex items-center gap-2.5 bg-card/40 px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Github className="w-5 h-5 text-purple-400" />
              Full Stack Developer
            </span>
            <span className="inline-flex items-center gap-2.5 bg-card/40 px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Trophy className="w-5 h-5 text-pink-400" />
              AI/ML Enthusiast
            </span>
          </motion.p>

          {/* Enhanced Description */}
          <motion.p 
            className="text-base md:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-body"
            variants={itemVariants}
          >
            Passionate developer blending clean code architecture with pixel-perfect design. Building highly scalable web applications and intelligent systems that solve real-world problems.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 w-full max-w-lg mx-auto"
            variants={itemVariants}
          >
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="group w-full sm:w-auto flex-1 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg px-8 py-6 rounded-3xl transition-all duration-500 shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.5)] border-none relative"
            >
              <a href="#projects">
                <span className="relative flex items-center justify-center w-full z-10">
                  <FolderOpen className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  View Projects
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              asChild
              className="group w-full sm:w-auto flex-1 font-semibold text-lg px-8 py-6 rounded-3xl border-2 border-primary/20 hover:border-primary text-foreground bg-card/30 backdrop-blur-sm hover:bg-card/80 transition-all duration-500"
            >
              <a href="#resume">
                <Download className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/Shivprasadpravindongapure', color: 'hover:text-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shivprasad-dongapure-35760a290/', color: 'hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
              { icon: Mail, href: 'mailto:prasaddongapure7660@gmail.com', color: 'hover:text-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' },
              { icon: Code2, href: 'https://leetcode.com/u/ShivprasadPravinDongapure/', color: 'hover:text-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]' },
              { icon: Trophy, href: 'https://codeforces.com/profile/BitShiv', color: 'hover:text-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-card border border-white/5 hover:border-white/20 transition-all duration-500 text-muted-foreground ${social.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="flex items-center justify-center w-12 h-12 rounded-full bg-card/50 border border-white/5 backdrop-blur-sm text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
