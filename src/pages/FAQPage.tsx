import React, { useEffect } from 'react';
import { FAQSection } from '../components/FAQSection';

export const FAQPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#0b0f17] py-8">
      <FAQSection />
    </div>
  );
};
