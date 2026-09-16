import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const switchLanguage = (newLang: 'fa' | 'en') => {
    if (newLang === language) return;
    setLanguage(newLang);

    const currentPath = location.pathname;
    const parts = currentPath.split('/').filter(Boolean);
    
    if (parts[0] === 'fa' || parts[0] === 'en' || parts[0] === 'da') {
      parts[0] = newLang;
      navigate(`/${parts.join('/')}`);
    } else {
      navigate(`/${newLang}${currentPath}`);
    }
  };

  return (
    <div className={`inline-flex items-center bg-slate-800/90 p-1 rounded-full border border-slate-700/80 shadow-inner ${className}`}>
      <button
        type="button"
        onClick={() => switchLanguage('fa')}
        className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
          language === 'fa'
            ? 'bg-clinic-teal text-white shadow-md'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-label="سوئیچ به زبان دری"
      >
        دری
      </button>
      <span className="text-slate-600 text-xs px-0.5">|</span>
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-clinic-teal text-white shadow-md'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};
