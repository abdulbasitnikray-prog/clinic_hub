import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof TRANSLATIONS) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('shahrwand_lang');
    if (saved === 'en' || saved === 'fa') {
      return saved;
    }
    return 'fa'; // Default Dari
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('shahrwand_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'fa' ? 'en' : 'fa';
    setLanguage(nextLang);
  };

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (language === 'fa') {
      htmlEl.setAttribute('lang', 'fa-AF');
      htmlEl.setAttribute('dir', 'rtl');
    } else {
      htmlEl.setAttribute('lang', 'en');
      htmlEl.setAttribute('dir', 'ltr');
    }
  }, [language]);

  const t = (key: keyof typeof TRANSLATIONS): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) return key as string;
    if (typeof entry === 'object' && 'en' in entry && 'fa' in entry) {
      return (entry as { en: string; fa: string })[language];
    }
    return key as string;
  };

  const isRtl = language === 'fa';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
