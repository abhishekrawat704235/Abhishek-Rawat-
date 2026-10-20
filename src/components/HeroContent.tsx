import React from 'react';
import { ArrowDown, Sparkles, Code2, BrainCircuit } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HeroContent: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between pt-24 pb-8 pointer-events-none">
      {/* Top Banner Badge */}
      <div className="flex items-center justify-between pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cinematic-crimson/10 border border-cinematic-crimson/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cinematic-rose animate-pulse" />
          <span className="text-xs font-medium text-cinematic-rose tracking-wide">
            {portfolioData.personal.statusBadge}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <BrainCircuit className="w-3.5 h-3.5 text-cinematic-violet" />
            AI &amp; Neural Models
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-cinematic-crimson" />
            Full-Stack Systems
          </span>
        </div>
      </div>

      {/* Main Title & Hero Narrative */}
      <div className="max-w-2xl pointer-events-auto mt-auto mb-8">
        <h2 className="text-sm md:text-base uppercase tracking-widest text-cinematic-rose font-mono mb-2 font-semibold">
          {portfolioData.personal.title}
        </h2>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white mb-4 leading-none">
          {portfolioData.personal.name}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6">
          {portfolioData.personal.tagline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cinematic-crimson to-cinematic-violet hover:opacity-90 transition-all shadow-xl shadow-cinematic-crimson/25 cursor-pointer"
          >
            Explore Projects
          </button>
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all cursor-pointer"
          >
            About Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-cinematic-rose rounded-full animate-bounce" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-white font-medium">
              Scroll Down
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Controls portrait head-turning animation
            </span>
          </div>
        </div>

        <span className="text-xs text-slate-500 font-mono hidden sm:inline">
          Manipal University Jaipur • BCA
        </span>
      </div>
    </div>
  );
};
