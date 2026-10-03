import React, { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'About Our Australian Drone Operations | Camera Drone Sales Australia';
  }, []);

  return (
    <div className="bg-[#0b0f17]">
      <AboutSection />
    </div>
  );
};
