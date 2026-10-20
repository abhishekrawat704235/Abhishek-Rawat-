import React from 'react';
import { PortraitScrollAnimation } from '../animations/PortraitScrollAnimation';
import { HeroContent } from '../components/HeroContent';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full">
      <PortraitScrollAnimation>
        <HeroContent />
      </PortraitScrollAnimation>
    </section>
  );
};
