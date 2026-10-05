export type Language = 'fa' | 'en';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    fa: string;
  };
}

export const TRANSLATIONS = {
  // Navigation
  navHome: { en: "Home", fa: "خانه" },
  navAbout: { en: "About Us", fa: "درباره ما" },
  navServices: { en: "Medical Services", fa: "خدمات صحی" },
  navEndocrine: { en: "Endocrine Care", fa: "مراقبتهای اندوکراین" },
  navPatientCare: { en: "Patient Care", fa: "مراقبت از بیمار" },
  navContact: { en: "Contact", fa: "تماس با ما" },
  navFaq: { en: "FAQ", fa: "سوالات متداول" },
  navPrivacy: { en: "Privacy", fa: "محرمیت" },
  callNow: { en: "Call Now", fa: "تماس تلفنی" },
  themeSwitchLight: { en: "Switch to light mode", fa: "تغییر به حالت روشن" },
  themeSwitchDark: { en: "Switch to dark mode", fa: "تغییر به حالت تاریک" },
  callClinic: { en: "Call Clinic", fa: "تماس با کلینیک" },
  getDirections: { en: "Get Directions", fa: "دریافت مسیر" },

  // Hero Section
  heroClinicName: { en: "SAHAR WAND HEALTH CLINIC", fa: "کلینیک صحی شهروند" },
  heroTagline: { en: "Professional • Compassionate • Patient-Centered", fa: "مسلکی • دلسوزانه • بیمارمحور" },
  heroHeadline: { en: "Your Health, Our Commitment", fa: "صحت شما، تعهد ما" },
  heroSubtext: {
    en: "Find the clinic's location, contact details, and published service information. Call to confirm current availability and exact opening times.",
    fa: "موقعیت، راه‌های تماس و معلومات خدمات نشرشده کلینیک را ببینید. برای تأیید موجودیت فعلی خدمات و ساعات دقیق کاری تماس بگیرید."
  },
  heroLocationBadge: { en: "Kabul, Afghanistan", fa: "کابل، افغانستان" },
  heroCtaContact: { en: "Contact the Clinic", fa: "تماس با کلینیک" },
  heroCtaServices: { en: "Our Medical Services", fa: "خدمات صحی ما" },
  heroCallButton: { en: "Call 0797955212", fa: "تماس: 0797955212" },

  // Quick Info Section
  quickLocationTitle: { en: "Clinic Location", fa: "موقعیت کلینیک" },
  quickLocationText: { en: "Hessa-ye-Dowom Khair Khana, Kabul", fa: "حِصه دوم خیرخانه، کابل" },
  quickPhoneTitle: { en: "Phone Contact", fa: "تماس تلفنی" },
  quickDaysTitle: { en: "Working Days", fa: "روزهای کاری" },
  quickDaysText: { en: "Saturday to Thursday", fa: "شنبه تا پنجشنبه" },
  quickCareTitle: { en: "Patient-Centered Care", fa: "مراقبت بیمارمحور" },
  quickCareText: { en: "Professional and compassionate healthcare", fa: "خدمات صحی مسلکی و دلسوزانه" },
  quickHoursTitle: { en: "Opening Hours", fa: "ساعات کاری" },
  quickHoursUnavailable: { en: "Exact hours are not published", fa: "ساعات دقیق نشر نشده است" },
  quickHoursContact: { en: "Call to confirm before visiting", fa: "پیش از مراجعه برای تأیید تماس بگیرید" },
  homeAboutTitle: { en: "About the Clinic", fa: "درباره کلینیک" },
  homeInformationTitle: { en: "Plan Your Visit", fa: "برای مراجعه آماده شوید" },
  homeInformationSubtitle: {
    en: "Clinic details currently published on this website.",
    fa: "معلومات فعلی کلینیک که در این وبسایت نشر شده است."
  },
  homeTeamTitle: { en: "Doctors and Medical Team", fa: "داکتران و کادر طبی" },
  homeTeamEmpty: {
    en: "Individual provider names, qualifications, and schedules have not been provided for publication. Please call the clinic to confirm who is available.",
    fa: "نام، اسناد تحصیلی و برنامه کاری داکتران برای نشر ارائه نشده است. برای آگاهی از افراد حاضر لطفاً با کلینیک تماس بگیرید."
  },
  homeFacilitiesTitle: { en: "Clinic Facilities", fa: "امکانات کلینیک" },
  homeFacilitiesEmpty: {
    en: "A verified facilities list and real facility photographs have not been provided yet.",
    fa: "فهرست تأییدشده امکانات و عکس‌های واقعی کلینیک هنوز ارائه نشده است."
  },
  homeHealthTitle: { en: "Health Information", fa: "معلومات صحی" },
  homeHealthEmpty: {
    en: "Educational articles will appear here after they have been reviewed and approved by a qualified medical professional.",
    fa: "مقاله‌های آموزشی پس از بررسی و تأیید یک متخصص واجد شرایط طبی در این بخش نشر می‌شوند."
  },
  homeGalleryTitle: { en: "Clinic Gallery", fa: "گالری کلینیک" },
  homeGalleryEmpty: {
    en: "Verified photographs of the clinic are not available for publication yet.",
    fa: "عکس‌های تأییدشده کلینیک برای نشر هنوز در دسترس نیست."
  },
  homeContactTitle: { en: "Contact and Location", fa: "تماس و موقعیت" },
  homeContactSubtitle: {
    en: "Use the published phone numbers for questions about services, availability, or exact opening times.",
    fa: "برای پرسش درباره خدمات، موجودیت داکتران یا ساعات دقیق کاری با شماره‌های نشرشده تماس بگیرید."
  },
  contactForHours: { en: "Call to confirm exact opening times", fa: "برای آگاهی از ساعات دقیق کاری تماس بگیرید" },
  browseServices: { en: "Browse medical services", fa: "مشاهده خدمات صحی" },
  serviceBrowserTitle: { en: "Browse Clinic Services", fa: "جستجوی خدمات کلینیک" },
  serviceBrowserDescription: {
    en: "Choose a listed service to read its description. This guide does not assess symptoms or recommend a diagnosis.",
    fa: "برای خواندن توضیحات یک خدمت نشرشده را انتخاب کنید. این راهنما علایم را ارزیابی یا تشخیص طبی پیشنهاد نمی‌کند."
  },
  serviceBrowserDisclaimer: {
    en: "For personal medical concerns, contact a qualified healthcare professional. In an emergency, seek local emergency care.",
    fa: "برای نگرانی‌های شخصی صحی با متخصص واجد شرایط تماس بگیرید. در حالت عاجل به خدمات عاجل محل مراجعه کنید."
  },
  homeWhyTitle: { en: "Useful Information Before You Visit", fa: "معلومات مفید پیش از مراجعه" },
  homePublishedServicesTitle: { en: "Services listed", fa: "خدمات نشرشده" },
  homePublishedServicesText: {
    en: "Review the clinic's service descriptions and contact the clinic to confirm current availability.",
    fa: "توضیحات خدمات کلینیک را بخوانید و برای تأیید موجودیت فعلی با کلینیک تماس بگیرید."
  },
  homeDirectContactTitle: { en: "Direct contact", fa: "تماس مستقیم" },
  homeDirectContactText: {
    en: "Use the published phone numbers to ask about providers, appointments, and opening times.",
    fa: "برای پرسش درباره داکتران، تعیین وقت و ساعات کاری از شماره‌های نشرشده استفاده کنید."
  },
  homeLocationTitle: { en: "Clinic location", fa: "موقعیت کلینیک" },
  homeLocationText: {
    en: "The Kabul address and a map directions link are available on this site.",
    fa: "آدرس کابل و پیوند مسیر نقشه در این وبسایت موجود است."
  },
  profileSpecialization: { en: "Specialization", fa: "تخصص" },
  profileQualifications: { en: "Qualifications", fa: "تحصیلات" },
  profileExperience: { en: "Experience", fa: "سابقه" },
  profileLanguages: { en: "Languages", fa: "زبان‌ها" },
  profileDays: { en: "Available days", fa: "روزهای حضور" },
  close: { en: "Close", fa: "بستن" },
  clearSearch: { en: "Clear search", fa: "پاک‌کردن جستجو" },
  viewGalleryImage: { en: "View gallery image", fa: "مشاهده عکس گالری" },
  servicesSearchPlaceholder: { en: "Search clinic services", fa: "جستجوی خدمات کلینیک" },
  serviceDetailsLabel: { en: "Service details", fa: "جزئیات خدمت" },
  formNotSentTitle: { en: "Nothing was sent or stored", fa: "هیچ پیامی ارسال یا ذخیره نشد" },
  formNotSentText: {
    en: "This website has no message-delivery service. Your entries were checked only in this browser; please call the clinic directly.",
    fa: "این وبسایت سیستم ارسال پیام ندارد. معلومات شما فقط در همین مرورگر بررسی شد؛ لطفاً مستقیماً با کلینیک تماس بگیرید."
  },

  // Services Section Header
  servicesSectionTitle: { en: "Our Medical Services", fa: "خدمات صحی ما" },
  servicesSectionSubtitle: {
    en: "Comprehensive primary medical care and clinical assessments for patients in Kabul.",
    fa: "ارائه خدمات جامع طبی اولیه و ارزیابی‌های بالینی برای مراجعین در کابل."
  },
  serviceImagesTitle: { en: "Care for Every Stage of Life", fa: "مراقبت صحی در تمام مراحل زندگی" },
  emergencyCare: { en: "Emergency Care", fa: "مراقبت عاجل" },
  pediatricCare: { en: "Children's Healthcare", fa: "مراقبت صحی اطفال" },
  pediatricTeam: { en: "Pediatric Care", fa: "مراقبت اطفال" },
  laboratoryServices: { en: "Laboratory Services", fa: "خدمات لابراتوار" },
  learnMore: { en: "Learn More", fa: "اطلاعات بیشتر" },

  // Endocrine Care Page
  endocrineTitle: { en: "Specialized Endocrine Care", fa: "مراقبتهای تخصصی اندوکراین" },
  endocrineSubtitle: {
    en: "Focused clinical assessment and monitoring for gland health, diabetes, and metabolic conditions.",
    fa: "ارزیابی بالینی هدفمند و پیگیری تخصصی برای سلامت غدد، دیابت و شرایط متابولیک."
  },
  endocrineIntro: {
    en: "The clinic provides evaluation and follow-up for endocrine and metabolic conditions, including:",
    fa: "کلینیک برای ارزیابی و پیگیری بیماریهای غدد درونریز و اختلالات متابولیک، از جمله موارد زیر خدمات ارائه میکند:"
  },
  endocrineItems: [
    { en: "Thyroid disorders", fa: "بیماریهای تیروئید" },
    { en: "Diabetes", fa: "دیابت" },
    { en: "Hormonal problems", fa: "مشکلات هورمونی" },
    { en: "Growth concerns", fa: "مشکلات رشد" },
    { en: "Weight-related conditions", fa: "مشکلات مرتبط با وزن" }
  ],
  endocrineAssessmentTitle: {
    en: "Patients are assessed through:",
    fa: "ارزیابی بیماران میتواند شامل موارد زیر باشد:"
  },
  endocrineAssessmentItems: [
    { en: "Clinical history", fa: "بررسی سابقه صحی" },
    { en: "Physical examination", fa: "معاینه فیزیکی" },
    { en: "Appropriate laboratory investigations", fa: "آزمایشهای لابراتواری مناسب" },
    { en: "Appropriate diagnostic investigations", fa: "بررسیهای تشخیصی مناسب" },
    { en: "Follow-up", fa: "پیگیری وضعیت بیمار" }
  ],

  // About Us Page
  aboutTitle: { en: "About Sahar Wand Health Clinic", fa: "درباره کلینیک صحی شهروند" },
  aboutIntro: {
    en: "Sahar Wand Health Clinic is a patient-centered healthcare facility in Kabul, Afghanistan. The clinic is committed to providing professional, accessible, respectful and compassionate medical care.",
    fa: "کلینیک صحی شهروند یک مرکز صحی بیمارمحور در کابل، افغانستان است. این کلینیک متعهد به ارائه خدمات صحی مسلکی، قابل دسترس، محترمانه و دلسوزانه میباشد."
  },
  aboutApproachTitle: { en: "Our approach emphasizes:", fa: "رویکرد ما بر موارد زیر تمرکز دارد:" },
  aboutApproachItems: [
    { en: "Accurate assessment", fa: "ارزیابی دقیق" },
    { en: "Evidence-based treatment", fa: "تداوی مبتنی بر شواهد" },
    { en: "Prevention", fa: "پیشگیری" },
    { en: "Health education", fa: "آموزش صحی" },
    { en: "Appropriate follow-up", fa: "پیگیری مناسب" }
  ],
  missionTitle: { en: "Our Mission", fa: "مأموریت ما" },
  missionText: {
    en: "To provide safe, high-quality and patient-centered healthcare services while respecting the dignity, privacy and individual needs of every patient.",
    fa: "ارائه خدمات صحی مصئون، باکیفیت و بیمارمحور، با رعایت کرامت، محرمیت و نیازهای فردی هر بیمار."
  },
  visionTitle: { en: "Our Vision", fa: "دیدگاه ما" },
  visionText: {
    en: "To become a trusted and respected healthcare center in Kabul, recognized for professional medical practice, patient satisfaction, ethical care and continuous improvement.",
    fa: "تبدیل شدن به یک مرکز صحی مورد اعتماد و محترم در کابل که به دلیل خدمات مسلکی طبی، رضایت بیماران، مراقبت اخلاقی و بهبود دوامدار شناخته شود."
  },
  coreValuesTitle: { en: "Our Core Values", fa: "ارزشهای بنیادی ما" },
  coreValuesItems: [
    { en: "Patient Safety and Dignity", fa: "مصئونیت و کرامت بیمار" },
    { en: "Professionalism", fa: "مسلکیت" },
    { en: "Integrity and Confidentiality", fa: "صداقت و محرمیت" },
    { en: "Respectful Communication", fa: "ارتباط محترمانه" },
    { en: "Evidence-Based Care", fa: "مراقبت مبتنی بر شواهد" },
    { en: "Continuity and Follow-Up", fa: "تداوم مراقبت و پیگیری" },
    { en: "Health Education and Prevention", fa: "آموزش صحی و پیشگیری" }
  ],

  // Patient-Centered Care Page
  patientCareTitle: { en: "Patient-Centered Care", fa: "مراقبت بیمارمحور" },
  patientCareText: {
    en: "We aim to create a respectful and comfortable environment where patients can discuss their health concerns openly. Clear communication, confidentiality and appropriate follow-up are important parts of our service.",
    fa: "ما تلاش میکنیم محیطی محترمانه و آرام ایجاد کنیم تا بیماران بتوانند نگرانیهای صحی خود را با اطمینان و آزادانه مطرح کنند. ارتباط واضح، حفظ محرمیت و پیگیری مناسب از بخشهای مهم خدمات ما میباشد."
  },
  patientPillars: [
    {
      title: { en: "Communication", fa: "ارتباط واضح" },
      desc: {
        en: "Clear, understandable explanations regarding health assessments and management plans.",
        fa: "توضیحات واضح و قابل فهم در مورد ارزیابی‌های صحی و پلان‌های تداوی."
      }
    },
    {
      title: { en: "Privacy", fa: "حفظ محرمیت" },
      desc: {
        en: "The clinic states that it respects patient confidentiality. Ask the clinic how records are handled.",
        fa: "کلینیک بیان می‌کند که به محرمیت بیمار احترام می‌گذارد. درباره نحوه نگهداری اسناد از کلینیک پرسش کنید."
      }
    },
    {
      title: { en: "Respect", fa: "احترام و کرامت" },
      desc: {
        en: "Dignified and respectful clinical environment for all individuals and families.",
        fa: "محیط بالینی محترمانه با حفظ کامل کرامت انسانی بیماران و خانواده‌ها."
      }
    },
    {
      title: { en: "Follow-Up", fa: "پیگیری مناسب" },
      desc: {
        en: "Contact the clinic to ask whether follow-up is appropriate for your care.",
        fa: "برای آگاهی از نیاز به پیگیری در مراقبت خود با کلینیک تماس بگیرید."
      }
    },
    {
      title: { en: "Patient Safety", fa: "مصئونیت بیمار" },
      desc: {
        en: "Ask the clinic directly about specific safety and infection-control practices.",
        fa: "درباره رویه‌های مشخص مصئونیت و جلوگیری از عفونت مستقیماً از کلینیک پرسش کنید."
      }
    }
  ],

  // Clinic Commitment
  commitmentTitle: { en: "Our Commitment", fa: "تعهد ما" },
  commitmentText: {
    en: "Sahar Wand Health Clinic is committed to improving the quality of healthcare through professional practice, responsible patient care, health education and continuous service improvement.",
    fa: "کلینیک صحی شهروند متعهد است تا از طریق فعالیت مسلکی، مراقبت مسئولانه از بیماران، آموزش صحی و بهبود دوامدار خدمات، کیفیت مراقبتهای صحی را ارتقا دهد."
  },

  // Contact Page
  contactTitle: { en: "Contact Sahar Wand Health Clinic", fa: "تماس با کلینیک صحی شهروند" },
  contactAddressLabel: { en: "Address", fa: "آدرس" },
  contactAddressValue: {
    en: "Hessa-ye-Dowom Khair Khana, Qala-e-Najara, beside Hazrat Ali (RA) Mosque, Kabul, Afghanistan",
    fa: "حِصه دوم خیرخانه، قلعه نجاره، در جوار مسجد حضرت علی (رض)، کابل، افغانستان"
  },
  contactPhonesLabel: { en: "Phone Numbers", fa: "شماره‌های تماس" },
  contactDaysLabel: { en: "Working Days", fa: "روزهای کاری" },
  contactDaysValue: { en: "Saturday to Thursday", fa: "شنبه تا پنجشنبه" },
  contactFormTitle: { en: "Send a General Inquiry", fa: "ارسال پیام و استفسار" },
  contactFormNotice: {
    en: "This website has no contact-form backend. Entries are not sent or stored; use the clinic phone numbers instead. Do not enter medical or other sensitive information.",
    fa: "این وبسایت سیستم ارسال فورمه تماس ندارد. معلومات ارسال یا ذخیره نمی‌شود؛ از شماره‌های کلینیک استفاده کنید. معلومات طبی یا حساس را وارد نکنید."
  },
  formName: { en: "Your Full Name", fa: "نام کامل شما" },
  formPhone: { en: "Phone Number", fa: "شماره تماس" },
  formMessage: { en: "Message / Inquiry", fa: "پیام / استفسار" },
  formSubmit: { en: "Submit Inquiry", fa: "ارسال پیام" },

  // FAQ Page
  faqTitle: { en: "Frequently Asked Questions", fa: "سوالات متداول" },
  faqSubtitle: {
    en: "Find quick answers regarding our services, clinic location, and contact options.",
    fa: "پاسخ‌های سریع به سوالات متداول درباره خدمات، موقعیت و گزینه‌های تماس کلینیک."
  },
  faqItems: [
    {
      q: {
        en: "What services does Sahar Wand Health Clinic provide?",
        fa: "کلینیک صحی شهروند چه خدماتی ارائه میکند؟"
      },
      a: {
        en: "See the Medical Services page for the service areas currently listed by the clinic. Contact the clinic directly to confirm current availability.",
        fa: "برای مشاهده بخش‌های خدماتی نشرشده به صفحه خدمات صحی مراجعه کنید. برای تأیید موجودیت فعلی خدمات مستقیماً با کلینیک تماس بگیرید."
      }
    },
    {
      q: {
        en: "Where is the clinic located?",
        fa: "کلینیک در کجا موقعیت دارد؟"
      },
      a: {
        en: "The clinic is located in Kabul, Afghanistan at Hessa-ye-Dowom Khair Khana, Qala-e-Najara, beside Hazrat Ali (RA) Mosque.",
        fa: "کلینیک در کابل، افغانستان، حِصه دوم خیرخانه، قلعه نجاره، در جوار مسجد حضرت علی (رض) موقعیت دارد."
      }
    },
    {
      q: {
        en: "How can I contact the clinic?",
        fa: "چگونه با کلینیک تماس بگیرم؟"
      },
      a: {
        en: "You can contact Sahar Wand Health Clinic by phone at 0797955212 or 0786000230 during working days.",
        fa: "شما می‌توانید در روزهای کاری از طریق شماره‌های تیلفون 0797955212 یا 0786000230 با کلینیک تماس بگیرید."
      }
    },
    {
      q: {
        en: "What are the clinic's working days?",
        fa: "روزهای کاری کلینیک کدام است؟"
      },
      a: {
        en: "The currently listed working days are Saturday to Thursday. Exact daily opening and closing times are not published; call the clinic to confirm before visiting.",
        fa: "روزهای کاری نشرشده شنبه تا پنجشنبه است. ساعات دقیق باز و بسته‌شدن نشر نشده؛ پیش از مراجعه برای تأیید با کلینیک تماس بگیرید."
      }
    },
    {
      q: {
        en: "Does the clinic provide endocrine care?",
        fa: "آیا کلینیک خدمات اندوکراین ارائه میکند؟"
      },
      a: {
        en: "Yes, Sahar Wand Health Clinic provides clinical evaluation and follow-up care for endocrine and metabolic conditions including thyroid, diabetes, hormonal, growth, and weight conditions.",
        fa: "بله، کلینیک صحی شهروند خدمات ارزیابی بالینی و پیگیری برای اختلالات اندوکراین و متابولیک مانند تیروئید، دیابت، مشکلات هورمونی، رشد و وزن را ارائه می‌دهد."
      }
    },
    {
      q: {
        en: "Does the clinic provide diabetes and thyroid care?",
        fa: "آیا کلینیک خدمات مربوط به دیابت و تیروئید ارائه میکند؟"
      },
      a: {
        en: "Yes, diabetes blood sugar management and thyroid/goiter clinical evaluations are core parts of our services.",
        fa: "بله، مدیریت قند خون دیابت و ارزیابی‌های بالینی تیروئید و گواتر از بخش‌های اصلی خدمات کلینیک می‌باشد."
      }
    },
    {
      q: {
        en: "Which doctors are available, and do I need an appointment?",
        fa: "کدام داکتران حاضر هستند و آیا تعیین وقت لازم است؟"
      },
      a: {
        en: "Provider schedules and appointment requirements are not published here. Please call the clinic to confirm current availability and whether an appointment is needed.",
        fa: "برنامه کاری ارائه‌دهندگان خدمات و شرایط تعیین وقت در اینجا نشر نشده است. برای تأیید موجودیت فعلی و نیاز به تعیین وقت با کلینیک تماس بگیرید."
      }
    },
    {
      q: {
        en: "Are laboratory services available?",
        fa: "آیا خدمات لابراتواری موجود است؟"
      },
      a: {
        en: "Please call the clinic to confirm which laboratory tests and services are currently available.",
        fa: "برای آگاهی از آزمایش‌ها و خدمات لابراتواری که در حال حاضر موجود است، لطفاً با کلینیک تماس بگیرید."
      }
    }
  ],

  // Privacy Page
  privacyTitle: { en: "Privacy & Confidentiality", fa: "محرمیت و رازداری بیمار" },
  privacyText: {
    en: "Sahar Wand Health Clinic respects patient privacy, dignity, and confidentiality. This website is intended solely for general informational purposes about our healthcare location and services. We do not collect or store sensitive medical history through this website.",
    fa: "کلینیک صحی شهروند به محرمیت، کرامت و رازداری بیماران احترام کامل می‌گذارد. این وبسایت صرفاً برای ارائه معلومات عمومی درباره موقعیت و خدمات کلینیک است و هیچ‌گونه سوابق حساس طبی را از طریق وبسایت ذخیره نمی‌کند."
  },

  // Medical Disclaimer
  disclaimerTitle: { en: "Medical Disclaimer", fa: "یادداشت طبی" },
  disclaimerText: {
    en: "This website provides general information about Sahar Wand Health Clinic and its services. It is not a substitute for professional medical diagnosis or treatment.",
    fa: "این وبسایت معلومات عمومی درباره کلینیک صحی شهروند و خدمات آن ارائه میکند. این معلومات جایگزین تشخیص یا تداوی مسلکی طبی نمیباشد."
  },

  // Footer
  footerCopyright: {
    en: "© {year} Sahar Wand Health Clinic. All rights reserved.",
    fa: "© {year} کلینیک صحی شهروند. تمامی حقوق محفوظ است."
  },

  // 404 Not Found Page
  notFoundTitle: { en: "Page Not Found", fa: "صفحه مورد نظر پیدا نشد" },
  notFoundDesc: {
    en: "The page you are looking for does not exist or has been moved.",
    fa: "صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است."
  },
  returnHome: { en: "Return Home", fa: "بازگشت به صفحه اصلی" }
};
