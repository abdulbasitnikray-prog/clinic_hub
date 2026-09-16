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
  googleMapsUrl: string;
}

export const CLINIC_INFO: ClinicInfo = {
  name: {
    en: "SHARHWAND HEALTH CLINIC",
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
  // Google Maps search query URL using exact verified address
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hessa-ye-Dowom+Khair+Khana+Qala-e-Najara+Hazrat+Ali+Mosque+Kabul+Afghanistan"
};
