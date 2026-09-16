import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinic';

export const FloatingCallButton: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <a
      href={`tel:${CLINIC_INFO.phones[0]}`}
      className={`hidden md:flex fixed bottom-6 ${
        isRtl ? 'left-6' : 'right-6'
      } z-40 items-center gap-2.5 bg-gradient-to-r from-clinic-navy to-clinic-deep text-white py-3 px-5 rounded-full shadow-2xl hover:shadow-clinic-teal/30 hover:scale-105 transition-all duration-300 border border-white/20 group`}
      aria-label={t('callClinic')}
    >
      <div className="w-8 h-8 rounded-full bg-clinic-teal flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
        <Phone className="w-4 h-4 fill-current" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-teal-200 font-bold">{t('callNow')}</span>
        <span className="text-sm font-extrabold dir-ltr">{CLINIC_INFO.phones[0]}</span>
      </div>
    </a>
  );
};
