import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shivprasad.dongapure@email.com',
    href: 'mailto:shivprasad.dongapure@email.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Maharashtra, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/shivprasad-dongapure',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shivprasad-dongapure',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding gradient-hero">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block animate-fade-up">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Open to internship and software development opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="text-xl font-semibold text-foreground font-heading mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent/10">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-secondary hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300 group"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="h-full p-8 rounded-2xl gradient-accent text-primary-foreground shadow-elevated flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary-foreground/20 mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">
                    Let's Work Together
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    I'm actively seeking internship and full-time software development opportunities. 
                    If you have an exciting project or role, I'd love to hear from you!
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="mailto:shivprasad.dongapure@email.com">
                      <Mail className="w-5 h-5" />
                      Send an Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
