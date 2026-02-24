import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CodingStats from '@/components/CodingStats';
import GitHubRepos from '@/components/GitHubRepos';
import ResumeSection from '@/components/ResumeSection';
import TechnicalAchievements from '@/components/TechnicalAchievements';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingStats />
        <GitHubRepos />
        <ResumeSection />
        <TechnicalAchievements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
