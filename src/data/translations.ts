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
  callClinic: { en: "Call Clinic", fa: "تماس با کلینیک" },
  getDirections: { en: "Get Directions", fa: "دریافت مسیر" },

  // Hero Section
  heroClinicName: { en: "SHARHWAND HEALTH CLINIC", fa: "کلینیک صحی شهروند" },
  heroTagline: { en: "Professional • Compassionate • Patient-Centered", fa: "مسلکی • دلسوزانه • بیمارمحور" },
  heroHeadline: { en: "Your Health, Our Commitment", fa: "صحت شما، تعهد ما" },
  heroSubtext: {
    en: "Professional, accessible and compassionate healthcare focused on your individual needs.",
    fa: "ارائه خدمات صحی مسلکی، قابل دسترس و دلسوزانه با تمرکز بر نیازهای فردی هر بیمار."
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

  // Services Section Header
  servicesSectionTitle: { en: "Our Medical Services", fa: "خدمات صحی ما" },
  servicesSectionSubtitle: {
    en: "Comprehensive primary medical care and clinical assessments for patients in Kabul.",
    fa: "ارائه خدمات جامع طبی اولیه و ارزیابی‌های بالینی برای مراجعین در کابل."
  },
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
  aboutTitle: { en: "About Shahrwand Health Clinic", fa: "درباره کلینیک صحی شهروند" },
  aboutIntro: {
    en: "Shahrwand Health Clinic is a patient-centered healthcare facility in Kabul, Afghanistan. The clinic is committed to providing professional, accessible, respectful and compassionate medical care.",
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
        en: "Strict confidentiality and deep respect for every patient's medical privacy.",
        fa: "رازداری کامل و احترام عمیق به محرمیت طبی هر بیمار."
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
        en: "Structured follow-up protocols to ensure long-term health continuity.",
        fa: "پروتوکول‌های پیگیری منظم جهت اطمینان از تداوم سلامت درازمدت."
      }
    },
    {
      title: { en: "Patient Safety", fa: "مصئونیت بیمار" },
      desc: {
        en: "Highest emphasis on clinical cleanliness, safe medical practices, and patient protection.",
        fa: "تأکید جدی بر نظافت بالینی، رویه‌های مصئون طبی و حفاظت از بیماران."
      }
    }
  ],

  // Clinic Commitment
  commitmentTitle: { en: "Our Commitment", fa: "تعهد ما" },
  commitmentText: {
    en: "Shahrwand Health Clinic is committed to improving the quality of healthcare through professional practice, responsible patient care, health education and continuous service improvement.",
    fa: "کلینیک صحی شهروند متعهد است تا از طریق فعالیت مسلکی، مراقبت مسئولانه از بیماران، آموزش صحی و بهبود دوامدار خدمات، کیفیت مراقبتهای صحی را ارتقا دهد."
  },

  // Contact Page
  contactTitle: { en: "Contact Shahrwand Health Clinic", fa: "تماس با کلینیک صحی شهروند" },
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
    en: "This form is for general non-emergency inquiries. For clinical evaluation, please contact us by phone.",
    fa: "این فورمه برای سوالات عمومی غیرعاجل است. برای ارزیابی طبی، لطفاً از طریق تیلفون تماس بگیرید."
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
        en: "What services does Shahrwand Health Clinic provide?",
        fa: "کلینیک صحی شهروند چه خدماتی ارائه میکند؟"
      },
      a: {
        en: "Shahrwand Health Clinic provides primary general internal medicine, specialized endocrine and hormonal care, diabetes management, thyroid care, pediatric internal care, gynecology consultations, orthopedics assessments, dermatology care, nutrition planning, and growth/stature evaluations.",
        fa: "کلینیک صحی شهروند خدمات طب داخله عمومی، مراقبت‌های تخصصی اندوکراین و هورمونی، مدیریت دیابت، تیروئید، داخله اطفال، مشاوره‌های نسایی ولادی، ارتوپیدی، جلدی و زیبایی، مدیریت وزن و ارزیابی رشد را ارائه می‌کند."
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
        en: "You can contact Shahrwand Health Clinic by phone at 0797955212 or 0786000230 during working days.",
        fa: "شما می‌توانید در روزهای کاری از طریق شماره‌های تیلفون 0797955212 یا 0786000230 با کلینیک تماس بگیرید."
      }
    },
    {
      q: {
        en: "What are the clinic's working days?",
        fa: "روزهای کاری کلینیک کدام است؟"
      },
      a: {
        en: "The clinic is open Saturday to Thursday.",
        fa: "روزهای کاری کلینیک از شنبه تا پنجشنبه می‌باشد."
      }
    },
    {
      q: {
        en: "Does the clinic provide endocrine care?",
        fa: "آیا کلینیک خدمات اندوکراین ارائه میکند؟"
      },
      a: {
        en: "Yes, Shahrwand Health Clinic provides clinical evaluation and follow-up care for endocrine and metabolic conditions including thyroid, diabetes, hormonal, growth, and weight conditions.",
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
    }
  ],

  // Privacy Page
  privacyTitle: { en: "Privacy & Confidentiality", fa: "محرمیت و رازداری بیمار" },
  privacyText: {
    en: "Shahrwand Health Clinic respects patient privacy, dignity, and confidentiality. This website is intended solely for general informational purposes about our healthcare location and services. We do not collect or store sensitive medical history through this website.",
    fa: "کلینیک صحی شهروند به محرمیت، کرامت و رازداری بیماران احترام کامل می‌گذارد. این وبسایت صرفاً برای ارائه معلومات عمومی درباره موقعیت و خدمات کلینیک است و هیچ‌گونه سوابق حساس طبی را از طریق وبسایت ذخیره نمی‌کند."
  },

  // Medical Disclaimer
  disclaimerTitle: { en: "Medical Disclaimer", fa: "یادداشت طبی" },
  disclaimerText: {
    en: "This website provides general information about Shahrwand Health Clinic and its services. It is not a substitute for professional medical diagnosis or treatment.",
    fa: "این وبسایت معلومات عمومی درباره کلینیک صحی شهروند و خدمات آن ارائه میکند. این معلومات جایگزین تشخیص یا تداوی مسلکی طبی نمیباشد."
  },

  // Footer
  footerCopyright: {
    en: "© Shahrwand Health Clinic. All rights reserved.",
    fa: "© کلینیک صحی شهروند. تمامی حقوق محفوظ است."
  },

  // 404 Not Found Page
  notFoundTitle: { en: "Page Not Found", fa: "صفحه مورد نظر پیدا نشد" },
  notFoundDesc: {
    en: "The page you are looking for does not exist or has been moved.",
    fa: "صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است."
  },
  returnHome: { en: "Return Home", fa: "بازگشت به صفحه اصلی" }
};
