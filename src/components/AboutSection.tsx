import { Code2, Database, Cloud, Cpu } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full Stack Development' },
  { icon: Database, label: 'Backend Systems & APIs' },
  { icon: Cloud, label: 'Cloud Computing' },
  { icon: Cpu, label: 'IoT Solutions' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-3xl -rotate-3" />
              
              {/* Profile image */}
              <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden shadow-elevated aspect-square">
                <img
                  src="/DEV.JPG"
                  alt="Shivprasad Pravin Dongapure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block animate-fade-up">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Hi, I'm <span className="gradient-text">Shivprasad Pravin Dongapure</span>
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
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/30 transition-colors"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <item.icon className="w-5 h-5 text-accent" />
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
