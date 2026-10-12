import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { FAQSection } from '../components/FAQSection';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#0b0f17]">
      <ContactSection />
      <FAQSection />
    </div>
  );
};
