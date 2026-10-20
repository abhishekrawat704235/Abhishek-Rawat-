import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, Project } from '../data/portfolioData';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-obsidian-900 border-t border-white/5 overflow-hidden">
      <div className="ambient-glow-crimson top-1/2 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          category="Featured Work"
          title="Engineered Projects"
          subtitle="A selection of software systems, machine learning prototypes, and interactive web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col group"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-obsidian-950 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cinematic-crimson text-white text-[11px] font-mono uppercase tracking-wider font-semibold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-cinematic-rose">
                      {project.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-cinematic-rose transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-cinematic-rose" />
                    <span>View Repository</span>
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors ml-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
