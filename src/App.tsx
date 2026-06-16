import Navigation from './components/Navigation';
import AnimatedCursor from './components/AnimatedCursor';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import GitHubActivity from './components/GitHubActivity';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 selection:text-white font-body relative cursor-none">
      <div className="bg-noise"></div>
      <AnimatedCursor />
      {/* Global Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full mix-blend-screen -translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <AchievementsSection />
          <GitHubActivity />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
