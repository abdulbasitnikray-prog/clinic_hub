/** Centralized asset mapping for clinic and service imagery. */

export interface MediaAsset {
  src: string;
  alt: {
    en: string;
    fa: string;
  };
}

export const MEDIA_ASSETS = {
  hero: {
    src: `${import.meta.env.BASE_URL}images/clinic-hero.jpeg`,
    alt: {
      en: "Illustrated Sahar Wand Health Clinic sign and service information",
      fa: "تصویرسازی تابلوی کلینیک صحی شهروند و معلومات خدمات"
    }
  },
  pediatricProfessionals: {
    src: `${import.meta.env.BASE_URL}images/pediatric-care.jpeg`,
    alt: {
      en: "Two children dressed as healthcare professionals",
      fa: "دو کودک با لباس کارکنان صحی"
    }
  },
  nursingPatientCare: {
    src: `${import.meta.env.BASE_URL}images/clinic-interior.jpeg`,
    alt: {
      en: "Illustrated clinic sign describing medical services",
      fa: "تصویرسازی تابلوی کلینیک با توضیحات خدمات صحی"
    }
  },
  endocrineCare: {
    src: `${import.meta.env.BASE_URL}images/endocrine-care.jpeg`,
    alt: {
      en: "Illustrated endocrine-care clinic sign with health information",
      fa: "تصویرسازی تابلوی کلینیک برای مراقبت‌های اندوکراین با معلومات صحی"
    }
  },
  patientCare: {
    src: `${import.meta.env.BASE_URL}images/womens-health.jpeg`,
    alt: {
      en: "Illustrated women's health services poster with clinic branding",
      fa: "پوستر تصویرسازی‌شده خدمات صحت زنان با نشان کلینیک"
    }
  },
  pediatricCare: {
    src: `${import.meta.env.BASE_URL}images/pediatric-clinic.jpeg`,
    alt: {
      en: "Children's health and pediatric clinic services",
      fa: "صحت کودکان و خدمات کلینیک اطفال"
    }
  },
  emergencyCare: {
    src: `${import.meta.env.BASE_URL}images/emergency-care.jpeg`,
    alt: {
      en: "Emergency care clinic signage and a child in the waiting area",
      fa: "تابلوی بخش مراقبت عاجل و یک کودک در اتاق انتظار"
    }
  },
  clinicInterior: {
    src: `${import.meta.env.BASE_URL}images/clinic-interior.jpeg`,
    alt: {
      en: "Illustrated clinic sign describing medical services",
      fa: "تصویرسازی تابلوی کلینیک با توضیحات خدمات صحی"
    }
  },
  laboratoryServices: {
    src: `${import.meta.env.BASE_URL}images/laboratory-services.jpeg`,
    alt: {
      en: "Illustrated laboratory services sign and testing equipment",
      fa: "تصویرسازی تابلوی خدمات لابراتواری و وسایل آزمایش"
    }
  },
  logo: {
    src: `${import.meta.env.BASE_URL}images/logo.png`,
    alt: {
      en: "Sahar Wand Health Clinic Logo",
      fa: "لوگوی کلینیک صحی شهروند"
    }
  }
};