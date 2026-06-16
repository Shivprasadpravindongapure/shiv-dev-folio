import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with CSS dot grid */}
      <div className="absolute inset-0 z-0 bg-dots-subtle opacity-50" />
      
      {/* Subtle glowing orbs in background with parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-glow rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none" />

      <div className="container-narrow relative z-10 px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="section-badge mb-6">Hello, World!</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-tight font-bold mb-4 tracking-tight"
        >
          I'm <span className="text-white">Shivprasad Dongapure</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-text-muted mb-6 h-12 flex items-center justify-center space-x-2"
        >
          <span className="text-cyan">{">"}</span>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'AI/LLM Engineer',
              2000,
              'React + Node.js Dev',
              2000,
              'Open Source Contributor',
              2000
            ]}
            wrapper="span"
            speed={50}
            className="gradient-text-animated font-bold"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-text-dim text-lg mb-10 leading-relaxed"
        >
          I build scalable, real-world web applications and intelligent systems. Passionate about 
          Data Structures, Cloud Computing, and crafting exceptional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-bright transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transform hover:-translate-y-1"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          
          <a
            href="https://github.com/Shivprasadpravindongapure"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all transform hover:-translate-y-1"
          >
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted float-scroll"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown size={20} className="animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
