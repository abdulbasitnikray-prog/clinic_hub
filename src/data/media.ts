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
    src: "/images/hero_clinic.jpg",
    alt: {
      en: "Shahrwand Health Clinic Consultation Area in Kabul",
      fa: "فضای معاینه و پذیرش کلینیک صحی شهروند در کابل"
    }
  },
  doctorNurseTeam: {
    src: "/images/doctor_nurse.jpg",
    alt: {
      en: "Professional Doctor and Nurse Medical Team at Shahrwand Health Clinic",
      fa: "تیم داکتران و نرس‌های مسلکی کلینیک صحی شهروند"
    }
  },
  nursingPatientCare: {
    src: "/images/nursing_care.jpg",
    alt: {
      en: "Compassionate Nursing and Clinical Consultation",
      fa: "مراقبت‌های دلسوزانه نرسنگ و مشاوره‌های طبی"
    }
  },
  endocrineCare: {
    src: "/images/endocrine_care.jpg",
    alt: {
      en: "Specialized Endocrine & Metabolic Care at Shahrwand Health Clinic",
      fa: "مراقبت‌های تخصصی اندوکراین و اختلالات هورمونی در کلینیک شهروند"
    }
  },
  patientCare: {
    src: "/images/patient_care.jpg",
    alt: {
      en: "Patient-Centered Medical Care Consultation Environment",
      fa: "محیط محترمانه و بیمارمحور مشاوره طبی در کلینیک شهروند"
    }
  },
  logoPlaceholder: {
    src: "/images/logo.svg",
    alt: {
      en: "Shahrwand Health Clinic Logo",
      fa: "لوگوی کلینیک صحی شهروند"
    }
  }
};
