import React, { useState } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import GitHubSection from './components/GitHubSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function PortfolioApp() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', position: 'relative' }}>
      {/* Global overlays */}
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Navigation */}
      <Navigation onCommandOpen={() => setCmdOpen(true)} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
