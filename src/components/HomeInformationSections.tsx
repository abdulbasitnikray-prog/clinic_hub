import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ListChecks, MapPin, Navigation, PhoneCall, Users, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO, WEEKDAYS } from '../data/clinic';
import {
  CLINIC_FACILITIES,
  CLINIC_GALLERY,
  CLINIC_TEAM,
  HEALTH_ARTICLES
} from '../data/siteContent';
import { TRANSLATIONS } from '../data/translations';

const sectionClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const cardClass = 'bg-[#0F223D] rounded-2xl p-6 border border-slate-800 shadow-md';

export const HomeInformationSections: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedGalleryImage, setSelectedGalleryImage] = React.useState<(typeof CLINIC_GALLERY)[number] | null>(null);
  const prefix = `/${language}`;
  const publishedHours = WEEKDAYS.flatMap(({ key, en, fa }) => {
    const hours = CLINIC_INFO.openingHours[key];
    return hours ? [`${language === 'fa' ? fa : en}: ${hours}`] : [];
  });
  const hoursKnown = publishedHours.length > 0;
  const infoCards = [
    {
      icon: MapPin,
      title: t('contactAddressLabel'),
      content: CLINIC_INFO.address[language],
      href: CLINIC_INFO.googleMapsUrl
    },
    {
      icon: CalendarDays,
      title: t('quickDaysTitle'),
      content: CLINIC_INFO.workingDays[language],
      note: hoursKnown ? publishedHours.join(' · ') : t('contactForHours')
    }
  ];

  return (
    <>
    <div className="space-y-16 sm:space-y-20">
      <section className={sectionClass} aria-labelledby="home-about-title">
        <div className={`${cardClass} grid gap-6 md:grid-cols-[1fr_auto] md:items-center`}>
          <div className="space-y-3">
            <h2 id="home-about-title" className="text-2xl font-extrabold text-white">
              {t('homeAboutTitle')}
            </h2>
            <p className="max-w-4xl text-sm leading-relaxed text-slate-300">
              {TRANSLATIONS.aboutIntro[language]}
            </p>
          </div>
          <Link
            to={`${prefix}/about`}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-700 px-5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            {t('learnMore')}
          </Link>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="home-why-title">
        <h2 id="home-why-title" className="mb-5 text-2xl font-extrabold text-white">
          {t('homeWhyTitle')}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: ListChecks, title: t('homePublishedServicesTitle'), text: t('homePublishedServicesText'), to: `${prefix}/services` },
            { icon: PhoneCall, title: t('homeDirectContactTitle'), text: t('homeDirectContactText'), to: `${prefix}/contact` },
            { icon: MapPin, title: t('homeLocationTitle'), text: t('homeLocationText'), to: `${prefix}/contact` }
          ].map(({ icon: Icon, title, text, to }) => (
            <Link key={title} to={to} className={`${cardClass} block transition-colors hover:border-clinic-teal/50`}>
              <Icon className="mb-3 h-5 w-5 text-clinic-tealGlow" aria-hidden="true" />
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="home-team-title">
        <div className="mb-6 flex items-center gap-3">
          <Users className="h-6 w-6 text-clinic-tealGlow" aria-hidden="true" />
          <h2 id="home-team-title" className="text-2xl font-extrabold text-white">
            {t('homeTeamTitle')}
          </h2>
        </div>
        {CLINIC_TEAM.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLINIC_TEAM.map((provider) => (
              <article key={provider.name.en} className={cardClass}>
                {provider.photo && (
                  <img src={provider.photo} alt={provider.name[language]} loading="lazy" className="mb-4 aspect-[4/3] w-full rounded-xl object-cover" />
                )}
                <h3 className="font-bold text-white">{provider.name[language]}</h3>
                <p className="mt-1 text-sm text-clinic-tealGlow">{provider.position[language]}</p>
                <dl className="mt-4 space-y-2 text-sm text-slate-300">
                  <div><dt className="inline font-semibold">{t('profileSpecialization')}: </dt><dd className="inline">{provider.specialization[language]}</dd></div>
                  <div><dt className="inline font-semibold">{t('profileQualifications')}: </dt><dd className="inline">{provider.qualifications[language]}</dd></div>
                  <div><dt className="inline font-semibold">{t('profileExperience')}: </dt><dd className="inline">{provider.experience[language]}</dd></div>
                  <div><dt className="inline font-semibold">{t('profileLanguages')}: </dt><dd className="inline">{provider.languages[language]}</dd></div>
                  <div><dt className="inline font-semibold">{t('profileDays')}: </dt><dd className="inline">{provider.availableDays[language]}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <p className={`${cardClass} text-sm leading-relaxed text-slate-300`}>
            {t('homeTeamEmpty')}
          </p>
        )}
      </section>

      <div className={`${sectionClass} grid gap-12 lg:grid-cols-2`}>
        <section aria-labelledby="home-facilities-title">
          <h2 id="home-facilities-title" className="mb-5 text-2xl font-extrabold text-white">
            {t('homeFacilitiesTitle')}
          </h2>
          {CLINIC_FACILITIES.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {CLINIC_FACILITIES.map((facility) => (
                <article key={facility.name.en} className={`${cardClass} p-4`}>
                  <img src={facility.image} alt={facility.alt[language]} loading="lazy" className="mb-4 aspect-[4/3] w-full rounded-xl object-cover" />
                  <h3 className="font-bold text-white">{facility.name[language]}</h3>
                  <p className="mt-2 text-sm text-slate-300">{facility.description[language]}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className={`${cardClass} h-full text-sm leading-relaxed text-slate-300`}>
              {t('homeFacilitiesEmpty')}
            </p>
          )}
        </section>

        <section aria-labelledby="home-gallery-title">
          <h2 id="home-gallery-title" className="mb-5 text-2xl font-extrabold text-white">
            {t('homeGalleryTitle')}
          </h2>
          {CLINIC_GALLERY.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {CLINIC_GALLERY.map((entry) => (
                <figure key={entry.image} className={`${cardClass} p-3`}>
                  <button
                    type="button"
                    onClick={() => setSelectedGalleryImage(entry)}
                    className="block w-full rounded-xl text-start focus-visible:outline"
                    aria-label={`${t('viewGalleryImage')}: ${entry.caption[language]}`}
                  >
                    <img src={entry.image} alt={entry.alt[language]} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.01]" />
                    <span className="block pt-3 text-sm font-semibold text-white">{entry.caption[language]}</span>
                  </button>
                </figure>
              ))}
            </div>
          ) : (
            <p className={`${cardClass} h-full text-sm leading-relaxed text-slate-300`}>
              {t('homeGalleryEmpty')}
            </p>
          )}
        </section>
      </div>

      <section className={sectionClass} aria-labelledby="home-health-title">
        <h2 id="home-health-title" className="mb-5 text-2xl font-extrabold text-white">
          {t('homeHealthTitle')}
        </h2>
        {HEALTH_ARTICLES.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HEALTH_ARTICLES.map((article) => (
              <article key={`${article.title.en}-${article.publishedAt}`} className={cardClass}>
                <img src={article.image} alt={article.alt[language]} loading="lazy" className="mb-4 aspect-[16/9] w-full rounded-xl object-cover" />
                <h3 className="font-bold text-white">{article.title[language]}</h3>
                <p className="mt-2 text-sm text-slate-300">{article.summary[language]}</p>
                <p className="mt-3 text-xs text-slate-400">
                  <time dateTime={article.publishedAt}>{article.publishedAt}</time>
                  {' · '}
                  {article.medicallyReviewedBy[language]}
                </p>
                {article.url && (
                  <a href={article.url} className="mt-4 inline-flex min-h-10 items-center font-semibold text-clinic-tealGlow underline underline-offset-4">
                    {t('learnMore')}
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className={`${cardClass} text-sm leading-relaxed text-slate-300`}>
            {t('homeHealthEmpty')}
          </p>
        )}
      </section>

      <section className={sectionClass} aria-labelledby="home-contact-title">
        <div className="rounded-3xl border border-slate-800 bg-[#0F223D] p-6 shadow-lg sm:p-9">
          <h2 id="home-contact-title" className="text-2xl font-extrabold text-white">
            {t('homeContactTitle')}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            {t('homeContactSubtitle')}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {infoCards.map(({ icon: Icon, title, content, note, href }) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-[#070F1E] p-4">
                <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-clinic-tealGlow" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm leading-relaxed text-slate-300 underline decoration-clinic-tealGlow underline-offset-4">
                      {content}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-300">{content}</p>
                  )}
                  {note && <p className="mt-2 text-xs text-slate-400">{note}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {CLINIC_INFO.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-clinic-teal px-5 font-bold text-white hover:bg-clinic-tealLight ltr-text">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {phone}
              </a>
            ))}
            <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-700 px-5 font-bold text-white hover:bg-slate-800">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              {t('getDirections')}
            </a>
          </div>
        </div>
      </section>
    </div>
    {selectedGalleryImage && (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={selectedGalleryImage.caption[language]}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
        onKeyDown={(event) => {
          if (event.key === 'Escape') setSelectedGalleryImage(null);
        }}
        tabIndex={-1}
      >
        <div className="relative max-h-full max-w-5xl">
          <button
            type="button"
            autoFocus
            onClick={() => setSelectedGalleryImage(null)}
            aria-label={t('close')}
            className="absolute end-3 top-3 z-10 rounded-full bg-slate-950/80 p-3 text-white hover:bg-slate-800"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <img src={selectedGalleryImage.image} alt={selectedGalleryImage.alt[language]} className="max-h-[85vh] max-w-full rounded-xl object-contain" />
          <p className="mt-3 text-center font-semibold text-white">{selectedGalleryImage.caption[language]}</p>
        </div>
      </div>
    )}
    </>
  );
};
