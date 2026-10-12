import React, { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#0b0f17]">
      <AboutSection />
    </div>
  );
};
