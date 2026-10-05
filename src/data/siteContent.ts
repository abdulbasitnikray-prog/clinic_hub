export interface LocalizedText {
  en: string;
  fa: string;
}

export interface ProviderProfile {
  name: LocalizedText;
  position: LocalizedText;
  specialization: LocalizedText;
  qualifications: LocalizedText;
  experience: LocalizedText;
  languages: LocalizedText;
  availableDays: LocalizedText;
  photo?: string;
}

export interface FacilityEntry {
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  alt: LocalizedText;
}

export interface HealthArticle {
  title: LocalizedText;
  summary: LocalizedText;
  image: string;
  alt: LocalizedText;
  publishedAt: string;
  medicallyReviewedBy: LocalizedText;
  url?: string;
}

export interface GalleryEntry {
  image: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

// Add only clinic-approved profiles and real, verified facility photos here.
export const CLINIC_TEAM: ProviderProfile[] = [];
export const CLINIC_FACILITIES: FacilityEntry[] = [];
export const CLINIC_GALLERY: GalleryEntry[] = [];

// Publish only educational articles reviewed by a qualified medical professional.
export const HEALTH_ARTICLES: HealthArticle[] = [];
