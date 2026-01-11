import { ArrowDown, Download, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-12 pt-20 lg:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border shadow-soft mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Open to Opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="gradient-text">Shivprasad Dongapure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 animate-fade-up font-body" style={{ animationDelay: '0.2s' }}>
            Computer Engineering Undergraduate • Software Developer • Full Stack Developer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up font-body" style={{ animationDelay: '0.3s' }}>
            Motivated Computer Engineering student with strong fundamentals in Data Structures and Algorithms and hands-on experience in Full Stack Development, Cloud Computing, and IoT. Passionate about building scalable, real-world software solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                <FolderOpen className="w-5 h-5" />
                View Projects
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
<<<<<<< HEAD
              <a href="/SDEShiv.pdf" download>
=======
              <a href="/resume.pdf" download>
>>>>>>> 1752ef08abe6e62d447a95ec4f87501e83ae5408
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
