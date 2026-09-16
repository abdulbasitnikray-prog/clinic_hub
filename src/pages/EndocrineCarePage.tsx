import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { MEDIA_ASSETS } from '../data/media';
import { CLINIC_INFO } from '../data/clinic';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeoMeta } from '../components/SeoMeta';
import { Activity, CheckCircle2, Stethoscope, PhoneCall } from 'lucide-react';

export const EndocrineCarePage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SeoMeta
        title={{
          en: "Specialized Endocrine Care - Thyroid & Diabetes",
          fa: "مراقبت‌های تخصصی اندوکراین - تیروئید و دیابت"
        }}
        description={{
          en: "Specialized endocrine and metabolic evaluations at Shahrwand Health Clinic in Kabul including thyroid, diabetes, hormonal, growth and weight care.",
          fa: "خدمات ارزیابی تخصصی غدد درون‌ریز و متابولیک در کلینیک صحی شهروند کابل شامل بیماری‌های تیروئید، دیابت، اختلالات هورمونی و رشد."
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-slate-100">
        
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4 border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clinic-teal/20 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider border border-clinic-teal/40">
            <Activity className="w-4 h-4" />
            <span>{t('endocrineTitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('endocrineTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
            {t('endocrineSubtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Covered Endocrine Conditions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0F223D] rounded-2xl p-8 border border-slate-800 shadow-xl space-y-6">
              <h2 className="text-xl font-extrabold text-white border-b border-slate-800 pb-3">
                {t('endocrineIntro')}
              </h2>

              <div className="space-y-3 pt-1">
                {TRANSLATIONS.endocrineItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 p-4 rounded-xl bg-[#070F1E] border border-slate-800 hover:border-clinic-teal/60 transition-all">
                    <div className="w-9 h-9 rounded-lg bg-clinic-teal text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0 shadow-md">
                      0{idx + 1}
                    </div>
                    <span className="text-sm font-bold text-white">
                      {item[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual & Diagnostic Steps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80">
              <ImageWithFallback
                src={MEDIA_ASSETS.endocrineCare.src}
                alt={MEDIA_ASSETS.endocrineCare.alt[language]}
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="bg-[#0F223D] text-white rounded-2xl p-8 space-y-5 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>{language === 'fa' ? 'رویه‌های ارزیابی بالینی' : 'Clinical Assessment Steps'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                {t('endocrineAssessmentTitle')}
              </h2>
              <div className="space-y-2.5">
                {TRANSLATIONS.endocrineAssessmentItems.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#070F1E] p-3.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-clinic-tealGlow flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {step[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Direct Phone Call Banner */}
        <div className="bg-[#070F1E] border border-slate-800 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-extrabold text-white">
            {language === 'fa' ? 'تماس با بخش اندوکراین' : 'Contact Endocrine Care Consultation'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {language === 'fa'
              ? 'برای معلومات بیشتر درباره ارزیابی تیروئید، دیابت و اختلالات هورمونی تماس بگیرید.'
              : 'For inquiries regarding thyroid, diabetes, or metabolic assessments, please call clinic phone lines.'}
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phones[0]}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-xl transition-all ltr-text shadow-lg"
            >
              <PhoneCall className="w-4 h-4 animate-pulse text-white" />
              <span>{CLINIC_INFO.phones[0]}</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
};
