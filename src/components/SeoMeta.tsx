import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinic';

interface SeoMetaProps {
  title?: {
    en: string;
    fa: string;
  };
  description?: {
    en: string;
    fa: string;
  };
}

export const SeoMeta: React.FC<SeoMetaProps> = ({ title, description }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const pageTitle = title
      ? `${title[language]} | ${CLINIC_INFO.name[language]}`
      : `${CLINIC_INFO.name[language]} - ${CLINIC_INFO.tagline[language]}`;

    document.title = pageTitle;

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description[language]);
      }
    }
  }, [title, description, language]);

  return null;
};
