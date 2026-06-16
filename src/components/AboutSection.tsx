import { motion } from 'framer-motion';
import { BookOpen, Trophy, Github, GraduationCap } from 'lucide-react';
import githubData from '../data/github.json';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container-narrow px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-badge mb-4">01. About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold">Discover my journey.</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Avatar / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative group">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-accent blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -inset-4 rounded-full border border-accent/30 scale-[1.02] animate-[spin_10s_linear_infinite]"></div>
              
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-surface-2 border-2 border-accent/20 flex items-center justify-center overflow-hidden z-10 glass">
                <img src="/DEV.JPG" alt="Shivprasad Dongapure" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Bio and Stats Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="text-text-muted leading-relaxed space-y-4 text-lg">
              <p>
                I am a motivated <strong className="text-white">Computer Engineering student</strong> with strong fundamentals in 
                Data Structures and Algorithms. My expertise spans across <strong className="text-white">Full Stack Development, Cloud Computing, and IoT.</strong>
              </p>
              <p>
                My passion lies in building scalable architectures, integrating AI/LLMs to solve real-world problems, and constantly 
                pushing the boundaries of what modern web technologies can achieve.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Github size={20} />
                  </div>
                  <span className="text-sm font-medium text-text-dim uppercase tracking-wider">Repos</span>
                </div>
                <div className="text-3xl font-bold text-white">{githubData.profile.public_repos}+</div>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/5 hover:border-amber/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber/10 rounded-lg text-amber group-hover:bg-amber group-hover:text-white transition-colors">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-sm font-medium text-text-dim uppercase tracking-wider">LeetCode</span>
                </div>
                <div className="text-3xl font-bold text-white">200+</div>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/5 hover:border-rose/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-rose/10 rounded-lg text-rose group-hover:bg-rose group-hover:text-white transition-colors">
                    <Trophy size={20} />
                  </div>
                  <span className="text-sm font-medium text-text-dim uppercase tracking-wider">Hackathons</span>
                </div>
                <div className="text-2xl font-bold text-white">1st Place</div>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/5 hover:border-cyan/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan/10 rounded-lg text-cyan group-hover:bg-cyan group-hover:text-white transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-sm font-medium text-text-dim uppercase tracking-wider">CGPA</span>
                </div>
                <div className="text-3xl font-bold text-white">8.05</div>
                <div className="text-xs text-text-muted mt-1">B.Tech 2024-27</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
