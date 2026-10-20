import React from 'react';

interface SectionHeadingProps {
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  category,
  title,
  subtitle,
  align = 'left'
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-cinematic-rose mb-3`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cinematic-crimson" />
        {category}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
