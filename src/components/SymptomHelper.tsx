import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MEDICAL_SERVICES } from '../data/services';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export const SymptomHelper: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const [selectedServiceId, setSelectedServiceId] = useState(MEDICAL_SERVICES[0]?.id ?? '');
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const selectedService = MEDICAL_SERVICES.find((service) => service.id === selectedServiceId);

  return (
    <div className="bg-[#0F223D] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex items-center gap-2 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
        <BookOpen className="w-4 h-4" />
        <span>{t('browseServices')}</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-white">
          {t('serviceBrowserTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          {t('serviceBrowserDescription')}
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5" aria-label={t('browseServices')}>
        {MEDICAL_SERVICES.map((service) => {
          const isActive = service.id === selectedServiceId;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedServiceId(service.id)}
              aria-pressed={isActive}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                isActive
                  ? 'bg-clinic-teal text-white border-clinic-teal shadow-md'
                  : 'bg-[#070F1E] text-slate-300 border-slate-700 hover:border-slate-500 hover:text-white'
              }`}
            >
              {service.name[language]}
            </button>
          );
        })}
      </div>

      {selectedService && (
        <div className="bg-[#070F1E] p-6 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-clinic-tealGlow text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t('browseServices')}</span>
          </div>

          <h4 className="text-lg font-extrabold text-white">
            {selectedService.name[language]}
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {selectedService.shortDescription[language]}
          </p>

          <p className="text-xs text-slate-400 leading-relaxed">
            {t('serviceBrowserDisclaimer')}
          </p>

          <div className="pt-2">
            <Link
              to={`/${language}/services`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-clinic-tealGlow hover:underline"
            >
              <span>{language === 'fa' ? 'مشاهده همه خدمات' : 'View All Medical Services'}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
