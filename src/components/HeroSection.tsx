import { ArrowDown, Download, FolderOpen, Github, Linkedin, Mail, Code2, Trophy, ExternalLink } from 'lucide-react';
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
          className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
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
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div 
        className="container-narrow mx-auto px-6 lg:px-12 pt-20 lg:pt-0 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 shadow-soft mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.span 
              className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-foreground">
              🚀 Seeking SDE Intern Opportunities
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="block text-foreground">Hi, I'm</span>
            <span className="gradient-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shivprasad Pravin Dongapure
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 font-body"
            variants={itemVariants}
          >
            <span className="inline-flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-500" />
              Computer Engineering Student
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-2">
              <Github className="w-5 h-5 text-purple-500" />
              Full Stack Developer
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-2">
              <Trophy className="w-5 h-5 text-pink-500" />
              AI/ML Enthusiast
            </span>
          </motion.p>

          {/* Enhanced Description */}
          <motion.p 
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-body"
            variants={itemVariants}
          >
            Results-driven Computer Engineering student with expertise in Full-Stack Development, 
            AI/ML applications, and scalable system architecture. Built production-ready applications 
            serving 10K+ daily users.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#projects">
                <FolderOpen className="w-5 h-5 mr-2" />
                View Projects
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              asChild
              className="border-2 border-indigo-500/50 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
            >
              <a href="#resume">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/Shivprasadpravindongapure"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/60 backdrop-blur-sm border border-border hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shivprasad-dongapure-35760a290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/60 backdrop-blur-sm border border-border hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:Prasaddongapure7660@gmail.com"
              className="p-3 rounded-full bg-card/60 backdrop-blur-sm border border-border hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/ShivprasadPravinDongapure/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/60 backdrop-blur-sm border border-border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://codeforces.com/profile/BitShiv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/60 backdrop-blur-sm border border-border hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
