import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Smooth hash scroll support
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 flex flex-col overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Multi-Section Content */}
      <main className="flex-1">
        {/* Section B: Hero with Main Head-Turn Animation */}
        <HeroSection />

        {/* Section C: About Me */}
        <AboutSection />

        {/* Section D: Technical Skills */}
        <SkillsSection />

        {/* Section E: Featured Projects */}
        <ProjectsSection />

        {/* Section F: Experience and Education */}
        <ExperienceSection />

        {/* Section G: Certificates */}
        <CertificatesSection />

        {/* Section H: Contact */}
        <ContactSection />
      </main>

      {/* Section I: Footer */}
      <Footer />
    </div>
  );
};

export default App;
