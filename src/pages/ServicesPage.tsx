import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MEDICAL_SERVICES } from '../data/services';
import type { MedicalService } from '../data/services';
import { CLINIC_INFO } from '../data/clinic';
import { SeoMeta } from '../components/SeoMeta';
import { 
  Activity, 
  PhoneCall, 
  Search, 
  X, 
  CheckCircle2, 
  Stethoscope, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const filteredServices = MEDICAL_SERVICES.filter((service) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      service.name.fa.toLowerCase().includes(query) ||
      service.name.en.toLowerCase().includes(query) ||
      service.shortDescription.fa.toLowerCase().includes(query) ||
      service.shortDescription.en.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <SeoMeta
        title={{
          en: "Medical Services & Specialties",
          fa: "خدمات صحی و تخصصی"
        }}
        description={{
          en: "Explore the 10 medical services at Shahrwand Health Clinic in Kabul, Afghanistan including Endocrinology, Internal Medicine, Diabetes, Thyroid, and Pediatrics.",
          fa: "مشاهده ۱۰ خدمت صحی و تخصصی کلینیک صحی شهروند در کابل از جمله اندوکراین، طب داخله، دیابت، تیروئید و اطفال."
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4 border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-clinic-teal/20 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider border border-clinic-teal/40">
            <Activity className="w-4 h-4" />
            <span>{t('servicesSectionTitle')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('servicesSectionTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
            {t('servicesSectionSubtitle')}
          </p>

          {/* Real-time Search Input */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className={`w-5 h-5 text-slate-400 absolute top-3.5 ${isRtl ? 'right-4' : 'left-4'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'fa' ? 'جستجوی خدمات (مثلاً دیابت، تیروئید...)' : 'Search services (e.g. Diabetes, Thyroid...)'}
                className={`w-full py-3 text-sm text-white bg-[#070F1E] rounded-xl shadow-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-clinic-teal placeholder:text-slate-500 ${
                  isRtl ? 'pr-11 pl-10' : 'pl-11 pr-10'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-3.5 ${isRtl ? 'left-3' : 'right-3'} text-slate-400 hover:text-white`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid (Dark Navy Cards with 100% High Contrast Text) */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-[#0F223D] rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl hover:border-clinic-teal/60 hover:shadow-teal-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2.5 leading-snug">
                    {service.name[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-medium">
                    {service.shortDescription[language]}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-slate-300">
                    {service.detailedScope[language].map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-clinic-tealGlow flex-shrink-0" />
                        <span className="font-semibold text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#070F1E] hover:bg-clinic-teal transition-all py-3 px-4 rounded-xl border border-slate-700 shadow-md"
                >
                  <span>{language === 'fa' ? 'جزئیات ارزیابی بالینی' : 'Clinical Assessment Details'}</span>
                  <ArrowIcon className="w-4 h-4 text-clinic-tealGlow group-hover:text-white" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#0F223D] rounded-2xl p-12 text-center border border-slate-800 space-y-3">
            <Search className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-extrabold text-white">
              {language === 'fa' ? 'خدمتی با این مشخصات یافت نشد' : 'No matching services found'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'fa' ? 'لطفاً عبارت دیگری را جستجو کنید یا با کلینیک تماس بگیرید.' : 'Please try searching for another term or call the clinic.'}
            </p>
          </div>
        )}

        {/* Appointment Call Banner */}
        <div className="bg-[#070F1E] border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-xl font-extrabold text-white">
              {language === 'fa' ? 'نیاز به ارزیابی صحی دارید؟' : 'Require Clinical Evaluation?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {language === 'fa' 
                ? 'برای معلومات بیشتر و تعیین وقت مراجعه، مستقیماً با شماره‌های کلینیک تماس بگیرید.'
                : 'Contact our phone lines directly for information regarding clinical consultations.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {CLINIC_INFO.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg transition-colors ltr-text"
              >
                <PhoneCall className="w-4 h-4 text-white animate-pulse" />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Detail Modal (Dark Theme & High Contrast) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-[#0F223D] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-700">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-[#070F1E] p-2 rounded-full border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>{CLINIC_INFO.name[language]}</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {selectedService.name[language]}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              {selectedService.shortDescription[language]}
            </p>

            <div className="space-y-3 bg-[#070F1E] p-5 rounded-2xl border border-slate-800">
              <h4 className="font-extrabold text-xs text-clinic-tealGlow uppercase tracking-wider">
                {language === 'fa' ? 'رویه‌های ارزیابی بالینی شامل:' : 'Included Clinical Procedures:'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-200">
                {selectedService.detailedScope[language].map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-clinic-tealGlow flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#091D38] border border-blue-800/80 p-4 rounded-2xl text-xs text-blue-200 space-y-1">
              <span className="font-bold text-white block">
                {language === 'fa' ? 'راهنمایی مراجعه:' : 'Patient Guidance:'}
              </span>
              <p>
                {language === 'fa'
                  ? 'برای معاینه فیزیکی و بررسی اولیه، سوابق قبلی یا آزمایش‌های قبلی خود را به همراه داشته باشید.'
                  : 'Please bring any previous clinical records or lab tests when visiting the clinic.'}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phones[0]}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{t('callNow')}</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 bg-[#070F1E] text-slate-300 font-bold text-xs sm:text-sm rounded-xl border border-slate-700 hover:bg-slate-800 hover:text-white"
              >
                {language === 'fa' ? 'بستن' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
