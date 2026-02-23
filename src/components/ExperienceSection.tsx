import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'NTS Nihon Global',
    period: 'June 2025 – July 2025',
    location: 'Remote',
    description: [
      'Architected enterprise-grade full-stack applications using React, TypeScript, Node.js serving 10K+ daily users',
      'Engineered production-ready REST APIs with 99.9% uptime, JWT authentication, and rate limiting',
      'Collaborated in Agile/Scrum teams, improved test coverage to 85%',
      'Implemented microservices architecture for scalable solutions'
    ],
    type: 'Full-time',
  },
  {
    title: 'IoT Development Intern',
    company: 'SIBIC',
    period: 'June 2022 – July 2022',
    location: 'Kolhapur',
    description: [
      'Designed IoT-based home automation systems using Arduino/ESP32 with real-time device control',
      'Integrated sensors and cloud monitoring dashboards for real-time data visualization',
      'Developed automation workflows and remote monitoring modules with MQTT protocol',
      'Created comprehensive documentation for system architecture'
    ],
    type: 'Internship',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block animate-fade-up">
            Career Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Professional experience that has shaped my skills and approach to software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-0 md:pl-20 pb-12 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 top-0 w-5 h-5 rounded-full bg-accent border-4 border-card shadow-lg items-center justify-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-heading group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
