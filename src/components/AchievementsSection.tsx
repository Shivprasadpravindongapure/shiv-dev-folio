import { Trophy, Award, Medal, GraduationCap } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '80+ DSA Problems Solved',
    description: 'Consistent problem-solving practice on competitive programming platforms',
    category: 'Coding',
  },
  {
    icon: Award,
    title: 'State-Level Project Selection',
    description: 'Project selected for state-level technical competition',
    category: 'Achievement',
  },
  {
    icon: Medal,
    title: '2nd Prize - C Programming',
    description: 'Second position in college-level C programming competition',
    category: 'Competition',
  },
  {
    icon: GraduationCap,
    title: 'NPTEL Elite + Gold',
    description: 'Machine Learning, Deep Learning, and Java certifications',
    category: 'Certification',
  },
];

const certifications = [
  'Machine Learning (NPTEL - Elite)',
  'Deep Learning (NPTEL - Gold)',
  'Java Programming (NPTEL - Elite)',
  'Cloud Computing Fundamentals',
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block animate-fade-up">
            Recognition
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Milestones and recognitions that mark my journey in technology
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card hover:border-accent/30 transition-all duration-300 text-center animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                {achievement.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground font-heading mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications List */}
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-xl font-semibold text-foreground font-heading text-center mb-6">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
