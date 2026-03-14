import { Code2, Database, Cloud, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code2, label: 'Full Stack Development' },
  { icon: Database, label: 'Backend Systems & APIs' },
  { icon: Cloud, label: 'Cloud Computing' },
  { icon: Cpu, label: 'IoT Solutions' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card overflow-hidden">
      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image with High-End Animations */}
          <motion.div 
            className="relative flex items-center justify-center order-2 lg:order-1 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[28rem] aspect-square transition-transform duration-700 hover:scale-[1.02]">
              {/* Outer decorative ring */}
              <div className="absolute -inset-6 border border-indigo-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-10 border border-purple-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Glow back */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />

              {/* The Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 dark:border-white/5 shadow-2xl bg-card">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                <img
                  src="/DEV.JPG"
                  alt="Shivprasad P. Dongapure"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Element 1 - Sparkles */}
              <motion.div 
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 shadow-xl z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </motion.div>

              {/* Floating Element 2 - backend */}
              <motion.div 
                className="absolute top-1/2 -left-8 p-3.5 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 shadow-xl z-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Code2 className="w-7 h-7 text-indigo-500" />
              </motion.div>

              {/* Floating Element 3 - Data */}
              <motion.div 
                className="absolute -bottom-4 right-12 p-3.5 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 shadow-xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Database className="w-6 h-6 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4 block animate-fade-up">
              About Me
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Shivprasad P. Dongapure</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p>
                Results-driven Computer Engineering student with expertise in Full-Stack Development, AI/ML applications, and scalable system architecture. Built production-ready applications serving 10K+ daily users.
              </p>
              <p>
                Currently pursuing B.Tech in Computer Engineering at Government College of Engineering, Jalgaon with a CGPA of 7.96. Passionate about competitive programming, having solved 120+ LeetCode problems and achieved Specialist rank on Codeforces.
              </p>
              <p>
                Seeking SDE Intern opportunities to apply my skills in React, Node.js, Python, and cloud technologies to build innovative solutions that make a real impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-indigo-500/30 hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300 transform-gpu">
                    <item.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
