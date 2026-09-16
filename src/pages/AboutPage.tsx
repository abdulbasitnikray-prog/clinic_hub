import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { CLINIC_INFO } from '../data/clinic';
import { MEDIA_ASSETS } from '../data/media';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeoMeta } from '../components/SeoMeta';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  HeartHandshake, 
  Lock, 
  MessageSquare, 
  Activity, 
  Repeat, 
  BookOpen,
  Stethoscope,
  Users
} from 'lucide-react';

const VALUE_ICONS = [
  ShieldCheck,
  Award,
  Lock,
  MessageSquare,
  Activity,
  Repeat,
  BookOpen
];

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SeoMeta
        title={{
          en: "About Shahrwand Health Clinic - Medical Team & Values",
          fa: "درباره کلینیک صحی شهروند - تیم طبی و ارزش‌ها"
        }}
        description={{
          en: "Learn about Shahrwand Health Clinic in Kabul, Afghanistan. Patient-centered medical team, mission, vision, and core clinical values.",
          fa: "معرفی کلینیک صحی شهروند در کابل، افغانستان. تیم داکتران و نرس‌های مسلکی، مأموریت، دیدگاه و ارزش‌های بنیادی طبی."
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4 text-center lg:text-start border border-slate-800">
          <span className="text-xs font-bold text-clinic-tealGlow uppercase tracking-wider bg-clinic-teal/15 px-3 py-1 rounded-full border border-clinic-teal/30">
            {CLINIC_INFO.name[language]}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('aboutTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {t('aboutIntro')}
          </p>
        </div>

        {/* Doctor & Nursing Team Feature Block */}
        <section className="bg-[#0F223D] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-teal/15 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>{language === 'fa' ? 'کادر مسلکی طبی' : 'Professional Healthcare Staff'}</span>
              </div>

              <h2 className="text-2xl font-extrabold text-white">
                {language === 'fa' ? 'تیم داکتران و نرس‌های با تجربه' : 'Experienced Doctors & Nursing Professionals'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'کادر طبی کلینیک صحی شهروند متعهد به ارائه ارزیابی‌های دقیق طبی، مشاوره‌های دلسوزانه و مراقبت‌های مداوم نرسنگ برای بیماران در کابل می‌باشد.'
                  : 'The clinical team at Shahrwand Health Clinic is dedicated to delivering thorough medical consultations, empathetic nursing care, and continuous patient follow-up in Kabul.'}
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-clinic-tealGlow">
                <span className="flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4" />
                  {language === 'fa' ? 'طب داخله و اندوکراین' : 'Internal Medicine & Endocrinology'}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  {language === 'fa' ? 'مراقبت‌های تخصصی نرسنگ' : 'Specialized Nursing Care'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80">
                <ImageWithFallback
                  src={MEDIA_ASSETS.doctorNurseTeam.src}
                  alt={MEDIA_ASSETS.doctorNurseTeam.alt[language]}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Clinical Approach */}
        <section className="bg-[#0F223D] rounded-2xl p-8 border border-slate-800 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white border-b border-slate-800 pb-3">
            {t('aboutApproachTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRANSLATIONS.aboutApproachItems.map((item, idx) => (
              <div key={idx} className="bg-[#070F1E] border border-slate-800 p-5 rounded-xl text-center space-y-2 hover:border-clinic-teal transition-colors">
                <div className="w-8 h-8 rounded-full bg-clinic-teal/20 text-clinic-tealGlow flex items-center justify-center font-bold mx-auto text-xs">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white block">
                  {item[language]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-[#0D2A24] border border-emerald-800/60 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              {t('missionTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-medium">
              {t('missionText')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#0C223F] border border-blue-800/60 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-clinic-teal text-white flex items-center justify-center shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              {t('visionTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed font-medium">
              {t('visionText')}
            </p>
          </div>

        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t('coreValuesTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {language === 'fa' 
                ? 'اصول اخلاقی و بالینی که پایه و اساس تمامی فعالیت‌های کلینیک صحی شهروند را تشکیل می‌دهند.'
                : 'Ethical and clinical principles guiding every aspect of patient care at Shahrwand Health Clinic.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRANSLATIONS.coreValuesItems.map((val, idx) => {
              const Icon = VALUE_ICONS[idx % VALUE_ICONS.length];
              return (
                <div key={idx} className="bg-[#0F223D] p-6 rounded-2xl border border-slate-800 shadow-sm space-y-3 hover:border-clinic-teal/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-clinic-teal/15 text-clinic-tealGlow flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white">
                    {val[language]}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-[#070F1E] border border-slate-800 text-white rounded-3xl p-8 sm:p-10 space-y-3">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-6 h-6 text-clinic-tealGlow" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {t('commitmentTitle')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            {t('commitmentText')}
          </p>
        </section>

      </div>
    </>
  );
};
