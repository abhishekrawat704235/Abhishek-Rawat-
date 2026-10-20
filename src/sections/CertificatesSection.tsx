import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, CertificateItem } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const { certificates } = portfolioData;
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="relative py-24 md:py-32 bg-obsidian-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          category="Verified Credentials"
          title="Certificates & Accreditations"
          subtitle="Specialized training, coursework, and verified developer certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden cursor-pointer group flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-obsidian-950 border-b border-white/5 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                    Click to Preview
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cinematic-rose mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cinematic-rose transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-white pt-4 mt-4 border-t border-white/5">
                  <Award className="w-4 h-4 text-cinematic-rose" />
                  <span>Inspect Certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-xl">
          <div className="relative max-w-2xl w-full bg-obsidian-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-heading font-bold text-white mb-1">
              {activeCert.title}
            </h3>
            <p className="text-xs font-mono text-cinematic-rose mb-4">
              {activeCert.issuer} • {activeCert.date}
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-obsidian-950 mb-6">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
