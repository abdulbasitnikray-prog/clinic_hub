import React from 'react';
import { PhoneCall, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinic';

export const MobileContactBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav 
      aria-label="Mobile direct contact options"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phones[0]}`}
          className="flex items-center justify-center gap-2 bg-clinic-navy hover:bg-clinic-deep text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow transition-all active:scale-[0.98]"
          aria-label={t('callClinic')}
        >
          <PhoneCall className="w-4 h-4 text-clinic-tealLight animate-pulse" />
          <span>{t('callClinic')}</span>
        </a>
        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all active:scale-[0.98]"
          aria-label={t('getDirections')}
        >
          <Navigation className="w-4 h-4 text-emerald-600" />
          <span>{t('getDirections')}</span>
        </a>
      </div>
    </nav>
  );
};
