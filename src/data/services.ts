export interface MedicalService {
  id: string;
  iconName: string;
  name: {
    en: string;
    fa: string;
  };
  shortDescription: {
    en: string;
    fa: string;
  };
  detailedScope: {
    en: string[];
    fa: string[];
  };
}

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: "endocrinology",
    iconName: "Activity",
    name: {
      en: "Endocrinology and Hormonal Disorders",
      fa: "دستگاه غدد درونریز و اختلالات هورمونی"
    },
    shortDescription: {
      en: "Evaluation and management of hormonal imbalances, gland dysfunctions, and metabolic disorders.",
      fa: "ارزیابی و مدیریت عدم تعادل هورمونی، اختلالات غدد و بیماری‌های متابولیک."
    },
    detailedScope: {
      en: [
        "Comprehensive clinical hormonal evaluations",
        "Targeted endocrine diagnostic investigation recommendations",
        "Long-term medical monitoring and follow-up plans"
      ],
      fa: [
        "ارزیابی‌های جامع هورمونی بالینی",
        "توصیه بررسی‌های تشخیصی هدفمند غدد درون‌ریز",
        "پلان‌های پیگیری و نظارت طبی درازمدت"
      ]
    }
  },
  {
    id: "internal-medicine",
    iconName: "Stethoscope",
    name: {
      en: "General Internal Medicine",
      fa: "طب داخله عمومی"
    },
    shortDescription: {
      en: "Comprehensive assessment, diagnosis, and non-surgical treatment of adult internal health conditions.",
      fa: "ارزیابی جامع، تشخیص و تداوی غیرجراحی بیماری‌های داخله در کلان‌سالان."
    },
    detailedScope: {
      en: [
        "Clinical history taking and physical examination",
        "Evidence-based primary internal consultations",
        "Preventative adult health screenings"
      ],
      fa: [
        "بررسی سوابق صحی و معاینه فیزیکی",
        "مشاوره‌های داخله ابتدایی مبتنی بر شواهد",
        "غربالگری‌های پیشگیرانه صحت کلان‌سالان"
      ]
    }
  },
  {
    id: "diabetes",
    iconName: "HeartPulse",
    name: {
      en: "Diabetes and Blood Sugar Management",
      fa: "مدیریت دیابت و قند خون"
    },
    shortDescription: {
      en: "Clinical evaluation, lifestyle counseling, and ongoing blood glucose monitoring strategies.",
      fa: "ارزیابی بالینی، مشاوره سبک زندگی و استراتژی‌های نظارت بر قند خون."
    },
    detailedScope: {
      en: [
        "Glycemia evaluation and follow-up care",
        "Patient health education regarding diet and lifestyle",
        "Routine diagnostic sugar level assessments"
      ],
      fa: [
        "ارزیابی میزان قند خون و مراقبت‌های پیگیری",
        "آموزش صحی بیمار در مورد رژیم غذایی و سبک زندگی",
        "ارزیابی‌های تشخیصی نوبتی سطح قند خون"
      ]
    }
  },
  {
    id: "thyroid",
    iconName: "ShieldAlert",
    name: {
      en: "Thyroid and Goiter Care",
      fa: "مراقبت از بیماریهای تیروئید و گواتر"
    },
    shortDescription: {
      en: "Specialized assessment of thyroid enlargement, gland functional disorders, and gland conditions.",
      fa: "ارزیابی تخصصی بزرگی تیروئید (گواتر) و اختلالات عملکردی غده تیروئید."
    },
    detailedScope: {
      en: [
        "Evaluation of thyroid nodular conditions",
        "Functional assessment for hypo/hyperthyroidism",
        "Structured follow-up protocols"
      ],
      fa: [
        "ارزیابی حالات گره‌ای تیروئید",
        "بررسی عملکردی کم‌کاری و پرکاری تیروئید",
        "پروتوکول‌های منظم پیگیری"
      ]
    }
  },
  {
    id: "pediatric-internal",
    iconName: "Baby",
    name: {
      en: "Pediatric Internal Medicine",
      fa: "طب داخله اطفال"
    },
    shortDescription: {
      en: "Compassionate evaluation of internal medical conditions and general physical wellness in children.",
      fa: "ارزیابی دلسوزانه بیماری‌های داخله و سلامت عمومی جسمی در اطفال."
    },
    detailedScope: {
      en: [
        "General pediatric health evaluations",
        "Assessment of child growth and development",
        "Parental advice on child preventive health"
      ],
      fa: [
        "ارزیابی‌های عمومی صحت اطفال",
        "بررسی وضعیت نمو و رشد اطفال",
        "توصیه‌های صحی به والدین جهت پیشگیری"
      ]
    }
  },
  {
    id: "obgyn",
    iconName: "UserCheck",
    name: {
      en: "Obstetrics and Gynecology",
      fa: "نسایی ولادی و بیماریهای زنان"
    },
    shortDescription: {
      en: "Respectful primary care and consultations for women's reproductive and general health needs.",
      fa: "مراقبت‌های اولیه محترمانه و مشاوره‌های تخصصی برای سلامت زنان."
    },
    detailedScope: {
      en: [
        "Routine gynecological clinical assessments",
        "Maternal consultation and health education",
        "Privacy-respecting environment"
      ],
      fa: [
        "ارزیابی‌های بالینی معمول زنان",
        "مشاوره و آموزش‌های صحی مادران",
        "محیطی کاملاً محرمانه و محترمانه"
      ]
    }
  },
  {
    id: "orthopedics",
    iconName: "Bone",
    name: {
      en: "Orthopedics",
      fa: "ارتوپیدی"
    },
    shortDescription: {
      en: "Evaluation of musculoskeletal complaints, joint issues, bone health, and physical mobility concerns.",
      fa: "ارزیابی مشکلات عضلاتی-استخوانی، مفاصل، سلامت استخوان‌ها و حرکات فیزیکی."
    },
    detailedScope: {
      en: [
        "Assessment of bone and joint discomfort",
        "Postural and mobility advice",
        "Referrals for specialized imaging when indicated"
      ],
      fa: [
        "ارزیابی دردهای استخوانی و مفصلی",
        "توصیه‌ها در مورد وضعیت فیزیکی و تحرک",
        "ارجاع برای تصویربرداری تشخیصی در صورت لزوم"
      ]
    }
  },
  {
    id: "dermatology",
    iconName: "Sparkles",
    name: {
      en: "Dermatology and Cosmetic Services",
      fa: "جلدی و خدمات زیبایی"
    },
    shortDescription: {
      en: "Primary assessment of skin conditions and non-invasive dermatological wellness guidance.",
      fa: "ارزیابی اولیه بیماری‌های جلدی و رهنمودهای مراقبت از سلامت و زیبایی جلد."
    },
    detailedScope: {
      en: [
        "Skin condition history and physical examination",
        "Cosmetic care advice and routine skin health",
        "Follow-up for chronic dermatological issues"
      ],
      fa: [
        "بررسی سابقه و معاینه فیزیکی حالات جلدی",
        "مشاوره‌های مراقبت زیبایی و سلامت جلد",
        "پیگیری مشکلات مزمن جلدی"
      ]
    }
  },
  {
    id: "nutrition",
    iconName: "Apple",
    name: {
      en: "Nutrition and Weight Management",
      fa: "تغذیه و مدیریت وزن"
    },
    shortDescription: {
      en: "Evidence-based nutritional education, dietary assessment, and healthy weight management planning.",
      fa: "آموزش‌های تغذیه‌ای مبتنی بر شواهد، ارزیابی رژیم غذایی و تنظیم وزن مناسب."
    },
    detailedScope: {
      en: [
        "Dietary habit assessments",
        "Metabolic-tailored nutritional guidance",
        "Structured weight follow-up advice"
      ],
      fa: [
        "ارزیابی عادت‌های غذایی",
        "رهنمودهای تغذیه‌ای متناسب با متابولیزم",
        "توصیه‌های پیگیری منظم وزن"
      ]
    }
  },
  {
    id: "stature-weight",
    iconName: "Scale",
    name: {
      en: "Assessment of Short Stature, Obesity and Underweight Conditions",
      fa: "ارزیابی کوتاهی قد، چاقی و کموزنی"
    },
    shortDescription: {
      en: "Clinical investigation of growth trajectories, height concerns, obesity, and underweight conditions.",
      fa: "بررسی بالینی روند رشد، نگرانی‌های قد، چاقی و شرایط کم‌وزنی."
    },
    detailedScope: {
      en: [
        "Height and weight trajectory analysis",
        "Hormonal background screening for growth concerns",
        "Customized nutritional and wellness follow-up"
      ],
      fa: [
        "تحلیل روند رشد قد و وزن",
        "غربالگری زمینه هورمونی برای نگرانی‌های رشد",
        "پیگیری‌های اختصاصی تغذیه‌ای و سلامتی"
      ]
    }
  }
];
