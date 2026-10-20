import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, SkillCategory } from '../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const getLevelBadgeClass = (level: string) => {
    switch (level.toLowerCase()) {
      case 'proficient':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'intermediate':
        return 'bg-cinematic-crimson/10 text-cinematic-rose border-cinematic-crimson/30';
      default:
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          category="Technical Proficiency"
          title="Skills & Technologies"
          subtitle="Honest, structured overview of my current engineering capabilities, languages, tools, and exploring interests."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                    {category.title}
                  </h3>
                  <Sparkles className="w-5 h-5 text-cinematic-rose" />
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-obsidian-900 border border-white/10 hover:border-cinematic-crimson/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cinematic-rose shrink-0" />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
