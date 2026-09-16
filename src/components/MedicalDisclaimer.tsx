import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Info } from 'lucide-react';

export const MedicalDisclaimer: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useLanguage();

  return (
    <aside className={`bg-[#0A182C] border border-slate-800 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 ${className}`} aria-label={t('disclaimerTitle')}>
      <Info className="w-5 h-5 text-clinic-tealGlow flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-white mb-1">{t('disclaimerTitle')}</h4>
        <p className="leading-relaxed">{t('disclaimerText')}</p>
      </div>
    </aside>
  );
};
