import { useState } from 'react';
import { motion } from 'framer-motion';
import githubData from '../data/github.json';

const GitHubActivity = () => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <section id="github" className="py-24 relative">
      <div className="container-narrow px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-badge mb-4">06. Open Source</span>
            <h2 className="text-3xl md:text-4xl font-bold">GitHub Activity.</h2>
          </div>
          
          <div className="flex gap-6 text-text-muted">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">{githubData.profile.public_repos}</span>
              <span className="text-sm uppercase tracking-widest font-mono">Repos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-accent">{githubData.profile.followers}</span>
              <span className="text-sm uppercase tracking-widest font-mono">Followers</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-4 border border-white/5 relative min-h-[195px] flex items-center justify-center overflow-hidden"
          >
            {!img1Loaded && (
              <div className="absolute inset-4 skeleton rounded-xl"></div>
            )}
            <img 
              src="https://github-readme-stats.vercel.app/api?username=Shivprasadpravindongapure&theme=tokyonight&hide_border=true&bg_color=00000000" 
              alt="GitHub Stats" 
              className={`w-full h-auto object-contain transition-opacity duration-500 relative z-10 ${img1Loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImg1Loaded(true)}
              loading="lazy"
            />
          </motion.div>

          {/* Top Langs Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-4 border border-white/5 relative min-h-[195px] flex items-center justify-center overflow-hidden"
          >
            {!img2Loaded && (
              <div className="absolute inset-4 skeleton rounded-xl"></div>
            )}
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shivprasadpravindongapure&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" 
              alt="Top Languages" 
              className={`w-full h-auto object-contain transition-opacity duration-500 relative z-10 ${img2Loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImg2Loaded(true)}
              loading="lazy"
            />
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default GitHubActivity;
