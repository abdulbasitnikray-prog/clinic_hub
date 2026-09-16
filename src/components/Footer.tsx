import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MedicalDisclaimer } from './MedicalDisclaimer';
import { CLINIC_INFO } from '../data/clinic';
import { HeartPulse, MapPin, PhoneCall, Calendar, Navigation } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const prefix = `/${language}`;

  const navLinks = [
    { path: prefix, label: t('navHome') },
    { path: `${prefix}/about`, label: t('navAbout') },
    { path: `${prefix}/services`, label: t('navServices') },
    { path: `${prefix}/endocrine-care`, label: t('navEndocrine') },
    { path: `${prefix}/patient-care`, label: t('navPatientCare') },
    { path: `${prefix}/contact`, label: t('navContact') },
    { path: `${prefix}/faq`, label: t('navFaq') },
    { path: `${prefix}/privacy`, label: t('navPrivacy') },
  ];

  return (
    <footer className="bg-[#040914] text-slate-300 pt-14 pb-20 md:pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Clinic Branding & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-clinic-teal to-emerald-500 text-white flex items-center justify-center font-extrabold text-xl shadow-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">
                  {CLINIC_INFO.name[language]}
                </h3>
                <p className="text-xs text-clinic-tealGlow font-medium">
                  {CLINIC_INFO.tagline[language]}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'fa'
                ? 'مرکز صحی بیمارمحور متعهد به ارائه خدمات مسلکی، قابل دسترس و دلسوزانه در شهر کابل، افغانستان.'
                : 'A patient-centered healthcare clinic committed to delivering professional, accessible, and respectful medical care in Kabul, Afghanistan.'}
            </p>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {language === 'fa' ? 'بخش‌های وبسایت' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-clinic-tealGlow transition-colors flex items-center gap-1.5 text-slate-400 hover:text-white"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact Info */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {language === 'fa' ? 'اطلاعات تماس' : 'Clinic Contact'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-clinic-tealGlow flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">{CLINIC_INFO.address[language]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-clinic-tealGlow flex-shrink-0" />
                <span>{CLINIC_INFO.workingDays[language]}</span>
              </li>
              <li className="pt-1 space-y-1.5">
                {CLINIC_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-white font-bold hover:text-clinic-tealGlow transition-colors ltr-text"
                  >
                    <PhoneCall className="w-4 h-4 text-clinic-tealGlow" />
                    <span>{phone}</span>
                  </a>
                ))}
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Directions */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              {language === 'fa' ? 'موقعیت و مسیر' : 'Location & Directions'}
            </h4>
            <p className="text-xs text-slate-400">
              {CLINIC_INFO.location[language]}
            </p>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-clinic-tealGlow border border-slate-700 font-semibold text-xs py-2.5 px-4 rounded-xl transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>{t('getDirections')}</span>
            </a>
          </div>

        </div>

        {/* Medical Disclaimer Block */}
        <div className="mt-8 mb-6">
          <MedicalDisclaimer />
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-4">
          <p>{t('footerCopyright')}</p>
          <p className="mt-2 sm:mt-0 text-[11px]">
            {language === 'fa' ? 'کابل، افغانستان' : 'Kabul, Afghanistan'}
          </p>
        </div>
      </div>
    </footer>
  );
};
