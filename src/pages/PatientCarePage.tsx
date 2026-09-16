import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { MEDIA_ASSETS } from '../data/media';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeoMeta } from '../components/SeoMeta';
import { MessageSquare, Lock, Heart, Repeat, ShieldCheck, HeartHandshake } from 'lucide-react';

const PILLAR_ICONS = [
  MessageSquare,
  Lock,
  Heart,
  Repeat,
  ShieldCheck
];

export const PatientCarePage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SeoMeta
        title={{
          en: "Patient-Centered Care - Respect & Privacy",
          fa: "مراقبت بیمارمحور - احترام و محرمیت"
        }}
        description={{
          en: "Shahrwand Health Clinic emphasizes patient dignity, confidentiality, clear communication, and respectful medical care in Kabul, Afghanistan.",
          fa: "تأکید کلینیک صحی شهروند بر کرامت بیمار، محرمیت، ارتباط واضح و مراقبت‌های محترمانه طبی در کابل."
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4 border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-teal/20 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider border border-clinic-teal/40">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{t('patientCareTitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('patientCareTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
            {t('patientCareText')}
          </p>
        </div>

        {/* Visual & Philosophy Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80">
              <ImageWithFallback
                src={MEDIA_ASSETS.patientCare.src}
                alt={MEDIA_ASSETS.patientCare.alt[language]}
                className="w-full h-[340px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-extrabold text-white">
              {language === 'fa' ? 'اصل احترام و کرامت انسانی بیمار' : 'Patient Dignity & Clinical Respect'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'fa'
                ? 'در کلینیک صحی شهروند، ما بر این باوریم که ارائه خدمات صحی عالی تنها شامل تداوی طبی نمی‌باشد، بلکه ایجاد ارتباط محترمانه، حفظ محرمیت و فراهم کردن فضای آرام برای بیمار از اولویت‌های حیاتی است.'
                : 'At Shahrwand Health Clinic, we believe that high-quality healthcare extends beyond diagnosis and treatment to foster a warm, confidential, and deeply respectful environment for every patient.'}
            </p>
          </div>
        </div>

        {/* 5 Core Pillars */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-white text-center">
            {language === 'fa' ? 'پایه‌های مراقبت بیمارمحور' : 'Core Pillars of Patient Care'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSLATIONS.patientPillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <div key={idx} className="bg-[#0F223D] p-7 rounded-2xl border border-slate-800 shadow-xl space-y-3 hover:border-clinic-teal/60 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-clinic-teal/20 text-clinic-tealGlow flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-white">
                    {pillar.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
};
