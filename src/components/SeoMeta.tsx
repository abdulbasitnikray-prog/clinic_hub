import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO, CLINIC_WEBSITE_URL } from '../data/clinic';
import { MEDIA_ASSETS } from '../data/media';

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
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title
      ? `${title[language]} | ${CLINIC_INFO.name[language]}`
      : `${CLINIC_INFO.name[language]} - ${CLINIC_INFO.tagline[language]}`;
    const pageDescription = description?.[language] ?? CLINIC_INFO.tagline[language];
    const canonicalUrl = `${CLINIC_WEBSITE_URL}/#${location.pathname}`;

    document.title = pageTitle;

    const setMeta = (key: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(key, value);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const socialImage = new URL(MEDIA_ASSETS.hero.src, window.location.origin).href;
    setMeta('name', 'description', pageDescription);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', socialImage);
    setMeta('property', 'og:locale', language === 'fa' ? 'fa_AF' : 'en_US');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDescription);
    setMeta('name', 'twitter:image', socialImage);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.querySelector<HTMLScriptElement>('script[data-clinic-schema]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.dataset.clinicSchema = 'true';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: CLINIC_INFO.name.en,
      alternateName: CLINIC_INFO.name.fa,
      url: CLINIC_WEBSITE_URL,
      telephone: CLINIC_INFO.phones,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CLINIC_INFO.address.en,
        addressLocality: 'Kabul',
        addressCountry: 'AF'
      }
    });
  }, [title, description, language, location.pathname]);

  return null;
};
