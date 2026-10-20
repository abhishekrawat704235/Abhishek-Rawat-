import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Brain, Terminal, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  const cards = [
    {
      icon: GraduationCap,
      title: 'Academic Foundations',
      description: 'Currently pursuing BCA at Manipal University Jaipur with focused study in computing algorithms, software design, and databases.'
    },
    {
      icon: Brain,
      title: 'AI & Data Focus',
      description: 'Passionate about machine learning workflows, data preprocessing, and understanding how modern neural networks transform raw data into decisions.'
    },
    {
      icon: Terminal,
      title: 'Full Stack Engineering',
      description: 'Hands-on experience developing modular, responsive web applications in React, TypeScript, and Java Spring Boot backend services.'
    },
    {
      icon: Compass,
      title: 'Career Aspirations',
      description: 'Aiming to work alongside world-class engineering teams building high-impact AI products and scalable software architectures.'
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-obsidian-900 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-crimson top-10 left-[-100px] w-[400px] h-[400px]" />
      <div className="ambient-glow-violet bottom-10 right-[-100px] w-[500px] h-[500px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          category="Biography & Background"
          title={about.heading}
          subtitle={about.intro}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-base leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="bg-obsidian-950/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                {p}
              </p>
            ))}

            {/* Quick stats / Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {about.highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs uppercase font-mono text-cinematic-rose mb-1">
                    {h.label}
                  </span>
                  <span className="font-semibold text-white text-sm">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cinematic-crimson/20 to-cinematic-violet/20 border border-cinematic-crimson/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-cinematic-rose" />
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold text-lg mb-1">
                      {c.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
