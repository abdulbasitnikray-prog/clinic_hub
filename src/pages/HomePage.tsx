import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinic';
import { MEDICAL_SERVICES } from '../data/services';
import { MEDIA_ASSETS } from '../data/media';
import { TRANSLATIONS } from '../data/translations';
import { ServiceCard } from '../components/ServiceCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeoMeta } from '../components/SeoMeta';
import { SymptomHelper } from '../components/SymptomHelper';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Activity,
  CheckCircle2,
  UserCheck,
  Stethoscope
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const prefix = `/${language}`;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const quickCards = [
    {
      icon: MapPin,
      title: t('quickLocationTitle'),
      text: t('quickLocationText'),
      subtext: CLINIC_INFO.location[language],
      color: 'bg-teal-500/10 text-teal-400 border-teal-500/30'
    },
    {
      icon: Phone,
      title: t('quickPhoneTitle'),
      text: `${CLINIC_INFO.phones[0]} • ${CLINIC_INFO.phones[1]}`,
      subtext: language === 'fa' ? 'تماس مستقیم' : 'Direct Call',
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    },
    {
      icon: Calendar,
      title: t('quickDaysTitle'),
      text: t('quickDaysText'),
      subtext: language === 'fa' ? 'ساعات کاری بالینی' : 'Clinical Operating Days',
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
    },
    {
      icon: Heart,
      title: t('quickCareTitle'),
      text: t('quickCareText'),
      subtext: language === 'fa' ? 'رویکرد بیمارمحور' : 'Patient-Centered Approach',
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12 text-slate-100">
      <SeoMeta
        title={{
          en: "Home - Professional Healthcare in Kabul",
          fa: "صفحه اصلی - خدمات صحی مسلکی در کابل"
        }}
        description={{
          en: "Shahrwand Health Clinic in Kabul, Afghanistan. Professional, accessible and compassionate healthcare focused on your individual needs. Call 0797955212.",
          fa: "کلینیک صحی شهروند در کابل، افغانستان. ارائه خدمات صحی مسلکی، قابل دسترس و دلسوزانه با تمرکز بر نیازهای فردی هر بیمار. شماره تماس: 0797955212."
        }}
      />
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-20 bg-gradient-to-b from-[#070F1E] via-[#0B1A30] to-[#070F1E] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clinic-teal/15 text-clinic-tealGlow text-xs sm:text-sm font-semibold border border-clinic-teal/30">
                <MapPin className="w-4 h-4 text-clinic-tealGlow" />
                <span>{t('heroLocationBadge')}</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs sm:text-sm font-extrabold text-clinic-tealGlow uppercase tracking-widest">
                  {t('heroClinicName')}
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {t('heroHeadline')}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('heroSubtext')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to={`${prefix}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-sm py-3.5 px-7 rounded-xl shadow-lg shadow-clinic-teal/25 transition-all duration-200"
                >
                  <span>{t('heroCtaContact')}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.phones[0]}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm py-3.5 px-7 rounded-xl border border-slate-700 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse text-clinic-tealGlow" />
                  <span>{t('heroCallButton')}</span>
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-clinic-tealGlow" />
                  {language === 'fa' ? 'محیط مصئون و دلسوزانه' : 'Safe & Respectful Environment'}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-clinic-tealGlow" />
                  {language === 'fa' ? 'تسهیلات خیرخانه کابل' : 'Khair Khana Facility'}
                </span>
              </div>

            </div>

            {/* Hero Image Component (Doctor & Nurse Team) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/80 bg-[#0A1628] group">
                <ImageWithFallback
                  src={MEDIA_ASSETS.doctorNurseTeam.src}
                  alt={MEDIA_ASSETS.doctorNurseTeam.alt[language]}
                  className="w-full h-[360px] sm:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-transparent flex items-end p-6 text-white">
                  <div className="bg-[#070F1E]/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 w-full">
                    <span className="text-xs font-semibold text-clinic-tealGlow block mb-1">
                      {CLINIC_INFO.name[language]}
                    </span>
                    <p className="text-sm font-bold leading-tight text-white">
                      {language === 'fa' ? 'تیم مسلکی داکتران و نرس‌های کلینیک' : 'Professional Doctors & Nursing Medical Team'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK INFO CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#0F223D] rounded-2xl p-6 border border-slate-800 shadow-md hover:shadow-teal-glow hover:border-clinic-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${card.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                    {card.text}
                  </p>
                </div>
                <span className="text-[11px] font-medium text-slate-400 mt-4 block pt-2 border-t border-slate-800">
                  {card.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* DOCTOR AND NURSE MEDICAL TEAM SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F223D] border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80">
                <ImageWithFallback
                  src={MEDIA_ASSETS.nursingPatientCare.src}
                  alt={MEDIA_ASSETS.nursingPatientCare.alt[language]}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-teal/15 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>{language === 'fa' ? 'تیم داکتران و نرسینگ' : 'Medical & Nursing Care Team'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {language === 'fa' ? 'مراقبت دلسوزانه و مسلکی طبی' : 'Compassionate Clinical Consultation & Nursing'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'fa'
                  ? 'کلینیک صحی شهروند با بهره‌گیری از کادر مسلکی طبی، داکتران با تجربه و نرس‌های دلسوز، خدمات معاینه، تشخیص و پیگیری درمان را در محیطی محترمانه و مصئون ارائه می‌نماید.'
                  : 'Shahrwand Health Clinic brings together experienced doctors and compassionate nursing staff dedicated to patient-centered clinical evaluations, accurate diagnosis, and ongoing follow-up care in Kabul.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                  <UserCheck className="w-5 h-5 text-clinic-tealGlow flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">
                    {language === 'fa' ? 'ارزیابی‌های دقیق بالینی' : 'Accurate Clinical Assessments'}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-clinic-tealGlow flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">
                    {language === 'fa' ? 'حفظ کامل رازداری بیمار' : 'Complete Patient Confidentiality'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SYMPTOM AND SERVICE HELPER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <SymptomHelper />
      </section>

      {/* MEDICAL SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-teal/15 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>{t('servicesSectionTitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t('servicesSectionTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {t('servicesSectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDICAL_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={`${prefix}/services`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg transition-all"
          >
            <span>{t('servicesSectionTitle')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SPECIALIZED ENDOCRINE CARE FEATURE HIGHLIGHT */}
      <section className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-clinic-tealGlow bg-clinic-teal/15 border border-clinic-teal/30 px-3 py-1 rounded-full">
                {t('endocrineTitle')}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
                {t('endocrineTitle')}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t('endocrineIntro')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {TRANSLATIONS.endocrineItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-900/70 border border-slate-800 p-3 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-clinic-tealGlow flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {item[language]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={`${prefix}/endocrine-care`}
                  className="inline-flex items-center gap-2 bg-clinic-teal hover:bg-clinic-tealLight text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-md"
                >
                  <span>{t('learnMore')}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80">
                <ImageWithFallback
                  src={MEDIA_ASSETS.endocrineCare.src}
                  alt={MEDIA_ASSETS.endocrineCare.alt[language]}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PATIENT-CENTERED CARE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F223D] border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                <ImageWithFallback
                  src={MEDIA_ASSETS.patientCare.src}
                  alt={MEDIA_ASSETS.patientCare.alt[language]}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-clinic-tealGlow uppercase tracking-wider bg-clinic-teal/15 px-3 py-1 rounded-full border border-clinic-teal/30">
                {t('patientCareTitle')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t('patientCareTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t('patientCareText')}
              </p>
              <div className="pt-2">
                <Link
                  to={`${prefix}/patient-care`}
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl border border-slate-700 transition-all"
                >
                  <span>{t('learnMore')}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ PREVIEW SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t('faqTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {TRANSLATIONS.faqItems.slice(0, 3).map((item, idx) => (
            <div key={idx} className="bg-[#0F223D] rounded-2xl p-6 border border-slate-800 shadow-sm space-y-2">
              <h3 className="font-extrabold text-white text-sm sm:text-base">
                {item.q[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.a[language]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to={`${prefix}/faq`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-clinic-tealGlow hover:underline"
          >
            <span>{t('faqTitle')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
