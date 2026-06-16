import { motion } from 'framer-motion';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cplusplus" },
      { name: "C", icon: "c" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" }
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" }
    ]
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Amazon Web Services", icon: "amazonwebservices" },
      { name: "LLM Integrations", icon: "vscode" } // Fallback icon
    ]
  }
];

const radarData = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'Algorithms', A: 95, fullMark: 100 },
  { subject: 'Cloud/DevOps', A: 75, fullMark: 100 },
  { subject: 'AI Integration', A: 80, fullMark: 100 },
  { subject: 'Databases', A: 85, fullMark: 100 },
];

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container-narrow px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-badge mb-4">02. Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold">Technologies I work with.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          
          {/* Skill Groups */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={item}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
              >
                <h3 className="font-heading font-semibold text-white mb-4 text-lg">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="skill-pill flex items-center gap-2 group"
                    >
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                        alt={skill.name}
                        className="w-4 h-4 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                        onError={(e) => {
                          // Fallback for missing devicons
                          (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg";
                        }}
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[350px] md:h-[400px] w-full flex justify-center items-center glass rounded-3xl border border-white/5 p-4"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#8A89A0', fontSize: 12, fontFamily: 'JetBrains Mono' }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#7C6EFA"
                  strokeWidth={2}
                  fill="#7C6EFA"
                  fillOpacity={0.3}
                  activeDot={{ r: 6, fill: '#22D3EE' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#10101A', 
                    border: '1px solid rgba(124, 110, 250, 0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: 'Inter'
                  }}
                  itemStyle={{ color: '#22D3EE' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
