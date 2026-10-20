import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { education, experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          category="Journey & Credentials"
          title="Education & Experience"
          subtitle="Formal education, independent technical milestones, and engineering background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cinematic-violet/20 border border-cinematic-violet/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cinematic-violet" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-8 rounded-3xl relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-cinematic-rose flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="text-xl font-heading font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {edu.highlights && (
                    <ul className="space-y-2 border-t border-white/10 pt-4">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cinematic-crimson mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cinematic-crimson/20 border border-cinematic-crimson/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-cinematic-crimson" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Experience &amp; Milestones
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-8 rounded-3xl relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-cinematic-rose flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="text-xl font-heading font-bold text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/10 pt-4">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cinematic-crimson mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
