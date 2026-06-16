import { motion } from 'framer-motion';
import { Trophy, Medal, Lightbulb, Cloud, Code2 } from 'lucide-react';

const achievements = [
  {
    title: "1st Place",
    subtitle: "National 36-Hour Hackathon",
    icon: <Trophy size={24} />,
    color: "text-amber",
    bg: "bg-amber/10",
    border: "hover:border-amber/40"
  },
  {
    title: "2nd Prize",
    subtitle: "National DSA Competition",
    icon: <Medal size={24} />,
    color: "text-slate-300",
    bg: "bg-slate-300/10",
    border: "hover:border-slate-300/40"
  },
  {
    title: "Elite+Gold",
    subtitle: "NPTEL ML & Deep Learning",
    icon: <Lightbulb size={24} />,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "hover:border-yellow-400/40"
  },
  {
    title: "Cloud Foundations",
    subtitle: "AWS Academy (2026)",
    icon: <Cloud size={24} />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "hover:border-orange-500/40"
  },
  {
    title: "200+ Solved",
    subtitle: "LeetCode Problems",
    icon: <Code2 size={24} />,
    color: "text-amber",
    bg: "bg-amber/10",
    border: "hover:border-amber/40"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container-narrow px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-badge mb-4">05. Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold">Milestones & Certifications.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass p-6 rounded-2xl border border-white/5 ${item.border} transition-all duration-300 flex items-center gap-4 group cursor-default`}
            >
              <div className={`p-4 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-text-muted text-sm">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AchievementsSection;
