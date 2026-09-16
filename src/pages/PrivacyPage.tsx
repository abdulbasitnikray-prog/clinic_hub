import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MedicalDisclaimer } from '../components/MedicalDisclaimer';
import { CLINIC_INFO } from '../data/clinic';
import { SeoMeta } from '../components/SeoMeta';
import { Lock, ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SeoMeta
        title={{
          en: "Privacy Policy & Patient Confidentiality",
          fa: "محرمیت و رازداری بیمار - کلینیک شهروند"
        }}
        description={{
          en: "Privacy statement regarding patient dignity and clinical record confidentiality at Shahrwand Health Clinic in Kabul.",
          fa: "بیانیه محرمیت و رازداری سوابق طبی بیماران در کلینیک صحی شهروند کابل."
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3 border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-clinic-teal/20 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider border border-clinic-teal/40">
            <Lock className="w-4 h-4" />
            <span>{t('privacyTitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('privacyTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {CLINIC_INFO.name[language]}
          </p>
        </div>

        {/* Main Policy Block */}
        <div className="bg-[#0F223D] rounded-2xl p-8 border border-slate-800 shadow-xl space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center gap-3 text-white border-b border-slate-800 pb-3">
            <ShieldCheck className="w-6 h-6 text-clinic-tealGlow" />
            <h2 className="text-lg font-extrabold">{t('privacyTitle')}</h2>
          </div>

          <p className="text-slate-300">{t('privacyText')}</p>

          <div className="bg-[#070F1E] border border-slate-800 p-5 rounded-xl space-y-3">
            <h3 className="font-extrabold text-clinic-tealGlow text-sm">
              {language === 'fa' ? 'محرمیت سوابق طبی' : 'Clinical Record Confidentiality'}
            </h3>
            <p className="text-slate-300">
              {language === 'fa'
                ? 'تمامی اطلاعات مربوط به معاینات، آزمایش‌ها و تاریخچه صحی بیماران به صورت کاملاً محرمانه نگه داشته شده و فقط تحت رویه‌های استندرد طبی استفاده می‌گردد.'
                : 'All diagnostic information, consultations, and clinical records are kept strictly confidential in accordance with professional ethical standards.'}
            </p>
          </div>

          <MedicalDisclaimer />
        </div>

      </div>
    </>
  );
};
