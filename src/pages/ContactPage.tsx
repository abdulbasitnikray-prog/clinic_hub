import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO, WEEKDAYS } from '../data/clinic';
import { ContactForm } from '../components/ContactForm';
import { SeoMeta } from '../components/SeoMeta';
import { MapPin, PhoneCall, Calendar, Navigation, Printer } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/media';
import { createPortal } from 'react-dom';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  const openingHours = WEEKDAYS.flatMap(({ key, en, fa }) => {
    const hours = CLINIC_INFO.openingHours[key];
    return hours ? [{ day: language === 'fa' ? fa : en, hours }] : [];
  });

  const handlePrint = () => {
    const clearPrintMode = () => document.documentElement.classList.remove('clinic-info-print');
    window.addEventListener('afterprint', clearPrintMode, { once: true });
    document.documentElement.classList.add('clinic-info-print');
    window.print();
  };

  const printSheet = (
    <section className="clinic-print-sheet" dir={language === 'fa' ? 'rtl' : 'ltr'} aria-label={CLINIC_INFO.name[language]}>
      <header className="clinic-print-header">
        <img src={MEDIA_ASSETS.logo.src} alt="" />
        <div>
          <h2>{CLINIC_INFO.name[language]}</h2>
          <p>{CLINIC_INFO.tagline[language]}</p>
        </div>
      </header>
      <section className="clinic-print-field">
        <h3>{t('contactAddressLabel')}</h3>
        <p>{CLINIC_INFO.address[language]}</p>
      </section>
      <section className="clinic-print-field">
        <h3>{t('contactPhonesLabel')}</h3>
        <p dir="ltr">{CLINIC_INFO.phones.join(' / ')}</p>
      </section>
      <section className="clinic-print-field">
        <h3>{t('contactDaysLabel')}</h3>
        <p>{CLINIC_INFO.workingDays[language]}</p>
      </section>
      <section className="clinic-print-field">
        <h3>{t('quickHoursTitle')}</h3>
        <p>{openingHours.length > 0
          ? openingHours.map(({ day, hours }) => `${day}: ${hours}`).join(' · ')
          : t('contactForHours')}
        </p>
      </section>
    </section>
  );

  return (
    <>
      {createPortal(printSheet, document.getElementById('clinic-print-root')!)}
      <SeoMeta
        title={{
          en: "Contact & Location - Kabul Khair Khana",
          fa: "تماس و موقعیت کلینیک - کابل خیرخانه"
        }}
        description={{
          en: "Contact Sahar Wand Health Clinic in Khair Khana, Kabul. Phone: 0797955212 / 0786000230. Working days: Saturday to Thursday.",
          fa: "تماس با کلینیک صحی شهروند در حصه دوم خیرخانه کابل. شماره‌های تماس: 0797955212 و 0786000230. روزهای کاری: شنبه تا پنجشنبه."
        }}
      />

      <div className="contact-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-slate-100">

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
              {openingHours.length > 0 ? (
                <dl className="space-y-2 text-sm text-slate-300">
                  {openingHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between gap-4">
                      <dt>{day}</dt>
                      <dd dir="ltr">{hours}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="text-xs text-slate-400">{t('contactForHours')}</p>
              )}
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
