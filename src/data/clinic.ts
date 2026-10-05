export interface ClinicInfo {
  name: {
    en: string;
    fa: string;
  };
  tagline: {
    en: string;
    fa: string;
  };
  location: {
    en: string;
    fa: string;
  };
  address: {
    en: string;
    fa: string;
  };
  phones: string[];
  workingDays: {
    en: string;
    fa: string;
  };
  openingHours: Record<
    'saturday' | 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday',
    string | null
  >;
  email: string | null;
  whatsapp: string | null;
  socialLinks: { label: string; url: string }[];
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
  googleMapsUrl: string;
}

export const WEEKDAYS = [
  { key: 'saturday', en: 'Saturday', fa: 'شنبه' },
  { key: 'sunday', en: 'Sunday', fa: 'یکشنبه' },
  { key: 'monday', en: 'Monday', fa: 'دوشنبه' },
  { key: 'tuesday', en: 'Tuesday', fa: 'سه‌شنبه' },
  { key: 'wednesday', en: 'Wednesday', fa: 'چهارشنبه' },
  { key: 'thursday', en: 'Thursday', fa: 'پنجشنبه' },
  { key: 'friday', en: 'Friday', fa: 'جمعه' }
] as const;

export const CLINIC_WEBSITE_URL = 'https://sharwandmedicalcenter.vercel.app';

export const CLINIC_INFO: ClinicInfo = {
  name: {
    en: "SAHAR WAND HEALTH CLINIC",
    fa: "کلینیک صحی شهروند"
  },
  tagline: {
    en: "Professional • Compassionate • Patient-Centered",
    fa: "مسلکی • دلسوزانه • بیمارمحور"
  },
  location: {
    en: "Kabul, Afghanistan",
    fa: "کابل، افغانستان"
  },
  address: {
    en: "Hessa-ye-Dowom Khair Khana, Qala-e-Najara, beside Hazrat Ali (RA) Mosque, Kabul, Afghanistan",
    fa: "حِصه دوم خیرخانه، قلعه نجاره، در جوار مسجد حضرت علی (رض)، کابل، افغانستان"
  },
  phones: [
    "0797955212",
    "0786000230"
  ],
  workingDays: {
    en: "Saturday to Thursday",
    fa: "شنبه تا پنجشنبه"
  },
  openingHours: {
    saturday: null,
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null
  },
  email: null,
  whatsapp: null,
  socialLinks: [],
  coordinates: {
    latitude: null,
    longitude: null
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hessa-ye-Dowom+Khair+Khana+Qala-e-Najara+Hazrat+Ali+Mosque+Kabul+Afghanistan"
};
