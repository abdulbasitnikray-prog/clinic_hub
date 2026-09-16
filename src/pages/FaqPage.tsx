import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { SeoMeta } from '../components/SeoMeta';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <SeoMeta
        title={{
          en: "Frequently Asked Questions",
          fa: "سوالات متداول - کلینیک شهروند"
        }}
        description={{
          en: "Frequently asked questions about Shahrwand Health Clinic in Kabul regarding services, location, phone contact, and endocrine care.",
          fa: "سوالات متداول درباره خدمات کلینیک صحی شهروند، موقعیت در کابل، شماره‌های تماس و مراقبت‌های تیروئید و دیابت."
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3 text-center border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-clinic-teal/20 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider border border-clinic-teal/40">
            <HelpCircle className="w-4 h-4" />
            <span>{t('faqTitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('faqTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto">
            {t('faqSubtitle')}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {TRANSLATIONS.faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0F223D] rounded-2xl border border-slate-800 overflow-hidden shadow-lg transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 font-extrabold text-white text-sm sm:text-base hover:bg-[#132A4A] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-clinic-teal/20 text-clinic-tealGlow flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item.q[language]}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-clinic-tealGlow flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-slate-800 bg-[#070F1E]">
                    <p>{item.a[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
};
