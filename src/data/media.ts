/**
 * Centralized Asset Management
 * Easily update or replace medical imagery and doctor/nurse photographs
 */

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
      en: "Sahar Wand Health Clinic and its medical services in Kabul",
      fa: "کلینیک صحی شهروند و خدمات طبی آن در کابل"
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
      en: "Sahar Wand Health Clinic reception and consultation area",
      fa: "بخش پذیرش و مشاوره کلینیک صحی شهروند"
    }
  },
  endocrineCare: {
    src: `${import.meta.env.BASE_URL}images/endocrine-care.jpeg`,
    alt: {
      en: "Specialized Endocrine & Metabolic Care at Sahar Wand Health Clinic",
      fa: "مراقبت‌های تخصصی اندوکراین و اختلالات هورمونی در کلینیک شهروند"
    }
  },
  patientCare: {
    src: `${import.meta.env.BASE_URL}images/womens-health.jpeg`,
    alt: {
      en: "Women's health and family care services at Sahar Wand Health Clinic",
      fa: "خدمات صحت زنان و مراقبت خانواده در کلینیک صحی شهروند"
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
      en: "Sahar Wand Health Clinic reception and consultation area",
      fa: "بخش پذیرش و مشاوره کلینیک صحی شهروند"
    }
  },
  laboratoryServices: {
    src: `${import.meta.env.BASE_URL}images/laboratory-services.jpeg`,
    alt: {
      en: "Laboratory testing services at Sahar Wand Health Clinic",
      fa: "خدمات معاینات لابراتواری در کلینیک صحی شهروند"
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