import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinic';
import { ContactForm } from '../components/ContactForm';
import { SeoMeta } from '../components/SeoMeta';
import { MapPin, PhoneCall, Calendar, Navigation, Printer, HeartPulse } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SeoMeta
        title={{
          en: "Contact & Location - Kabul Khair Khana",
          fa: "تماس و موقعیت کلینیک - کابل خیرخانه"
        }}
        description={{
          en: "Contact Shahrwand Health Clinic in Khair Khana, Kabul. Phone: 0797955212 / 0786000230. Working days: Saturday to Thursday.",
          fa: "تماس با کلینیک صحی شهروند در حصه دوم خیرخانه کابل. شماره‌های تماس: 0797955212 و 0786000230. روزهای کاری: شنبه تا پنجشنبه."
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-slate-100">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#091A30] via-[#0D2647] to-[#091A30] text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3 border border-slate-800">
          <span className="text-xs font-bold text-clinic-tealGlow uppercase tracking-wider bg-clinic-teal/20 px-3.5 py-1 rounded-full border border-clinic-teal/40">
            {CLINIC_INFO.name[language]}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('contactTitle')}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            {CLINIC_INFO.tagline[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Info Cards & Map Button */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#0F223D] rounded-2xl p-7 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-white border-b border-slate-800 pb-3">
                <div className="w-10 h-10 rounded-xl bg-clinic-teal/20 text-clinic-tealGlow flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="font-extrabold text-base sm:text-lg text-white">
                  {t('contactAddressLabel')}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                {CLINIC_INFO.address[language]}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  <span>{t('getDirections')}</span>
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 bg-[#070F1E] hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-slate-700 transition-all print:hidden"
                >
                  <Printer className="w-4 h-4 text-slate-400" />
                  <span>{language === 'fa' ? 'چاپ اطلاعات کلینیک' : 'Print Clinic Info'}</span>
                </button>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="bg-[#0F223D] rounded-2xl p-7 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-white border-b border-slate-800 pb-3">
                <div className="w-10 h-10 rounded-xl bg-clinic-teal/20 text-clinic-tealGlow flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="font-extrabold text-base sm:text-lg text-white">
                  {t('contactPhonesLabel')}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CLINIC_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#070F1E] hover:bg-clinic-teal hover:text-white border border-slate-700 text-white font-extrabold text-sm transition-all group ltr-text shadow-sm"
                  >
                    <span className="group-hover:text-white">{phone}</span>
                    <PhoneCall className="w-4 h-4 text-clinic-tealGlow group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Operating Days Card */}
            <div className="bg-[#0F223D] rounded-2xl p-7 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-white border-b border-slate-800 pb-3">
                <div className="w-10 h-10 rounded-xl bg-clinic-teal/20 text-clinic-tealGlow flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-extrabold text-base sm:text-lg text-white">
                  {t('contactDaysLabel')}
                </h2>
              </div>
              <p className="text-sm font-extrabold text-clinic-tealGlow">
                {CLINIC_INFO.workingDays[language]}
              </p>
            </div>

            {/* Printable Physical Card View (Shown when printing) */}
            <div className="hidden print:block border-2 border-slate-800 p-6 rounded-2xl space-y-3 bg-white text-slate-900">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-clinic-navy" />
                <h3 className="font-bold text-lg">{CLINIC_INFO.name[language]}</h3>
              </div>
              <p className="text-xs">{CLINIC_INFO.tagline[language]}</p>
              <p className="text-xs font-bold">{CLINIC_INFO.address[language]}</p>
              <p className="text-xs">Phones: {CLINIC_INFO.phones.join(' / ')}</p>
              <p className="text-xs">Working Days: {CLINIC_INFO.workingDays[language]}</p>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>

      </div>
    </>
  );
};
