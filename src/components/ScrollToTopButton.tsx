import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isRtl } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`hidden md:flex fixed bottom-24 ${
        isRtl ? 'left-6' : 'right-6'
      } z-40 items-center justify-center w-10 h-10 rounded-full bg-slate-800/90 text-clinic-tealGlow border border-slate-700 shadow-xl hover:bg-clinic-teal hover:text-white transition-all duration-300 transform hover:scale-110`}
      aria-label="بازگشت به بالای صفحه / Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
