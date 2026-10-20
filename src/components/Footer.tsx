import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian-950 border-t border-white/5 py-12 md:py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cinematic-crimson to-cinematic-violet flex items-center justify-center text-xs font-mono">
              AR
            </span>
            <span>{portfolioData.personal.name}</span>
          </div>
          <p className="text-slate-400 text-xs max-w-sm text-center md:text-left">
            Aspiring AI Engineer • BCA at Manipal University Jaipur
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/10"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/10"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cinematic-crimson to-cinematic-violet text-white hover:opacity-90 transition-opacity ml-2 cursor-pointer shadow-lg shadow-cinematic-crimson/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        <p className="text-slate-500">
          &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-slate-500">
          Engineered with React, TypeScript &amp; GSAP ScrollTrigger
        </p>
      </div>
    </footer>
  );
};
