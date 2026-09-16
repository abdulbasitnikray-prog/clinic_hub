import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MEDICAL_SERVICES } from '../data/services';
import { Link } from 'react-router-dom';
import { HelpCircle, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface SymptomOption {
  id: string;
  label: { en: string; fa: string };
  serviceId: string;
}

const SYMPTOM_OPTIONS: SymptomOption[] = [
  {
    id: 'sugar',
    label: { en: "High Blood Sugar & Thirst", fa: "قند خون بالا و تشنگی دوامدار" },
    serviceId: 'diabetes'
  },
  {
    id: 'thyroid',
    label: { en: "Neck Swelling & Fatigue", fa: "بزرگی یا نودول تیروئید و خستگی" },
    serviceId: 'thyroid'
  },
  {
    id: 'growth',
    label: { en: "Child Growth & Height Trajectory", fa: "نگرانی رشد، قد اطفال و وزن" },
    serviceId: 'stature-weight'
  },
  {
    id: 'internal',
    label: { en: "General Fatigue & Unclear Ailments", fa: "معاینات عمومی داخله و علائم نا مشخص" },
    serviceId: 'internal-medicine'
  },
  {
    id: 'skin',
    label: { en: "Skin Conditions & Care", fa: "مشکلات جلدی و مراقبت‌های زیبایی" },
    serviceId: 'dermatology'
  }
];

export const SymptomHelper: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(SYMPTOM_OPTIONS[0].id);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const currentOption = SYMPTOM_OPTIONS.find((s) => s.id === selectedSymptomId) || SYMPTOM_OPTIONS[0];
  const matchedService = MEDICAL_SERVICES.find((serv) => serv.id === currentOption.serviceId);

  return (
    <div className="bg-[#0F223D] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex items-center gap-2 text-clinic-tealGlow text-xs font-bold uppercase tracking-wider">
        <HelpCircle className="w-4 h-4" />
        <span>{language === 'fa' ? 'راهنمای انتخاب بخش صحی' : 'Clinical Service Guide'}</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-white">
          {language === 'fa' ? 'علائم یا نگرانی صحی خود را انتخاب کنید' : 'Select Your Health Concern'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          {language === 'fa'
            ? 'برای یافتن بخش مناسب معاینه، یکی از موارد زیر را انتخاب نمایید:'
            : 'Select a primary health concern to view the recommended clinic service:'}
        </p>
      </div>

      {/* Selector Buttons */}
      <div className="flex flex-wrap gap-2.5">
        {SYMPTOM_OPTIONS.map((opt) => {
          const isActive = opt.id === selectedSymptomId;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedSymptomId(opt.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                isActive
                  ? 'bg-clinic-teal text-white border-clinic-teal shadow-md'
                  : 'bg-[#070F1E] text-slate-300 border-slate-700 hover:border-slate-500 hover:text-white'
              }`}
            >
              {opt.label[language]}
            </button>
          );
        })}
      </div>

      {/* Result Display Box */}
      {matchedService && (
        <div className="bg-[#070F1E] p-6 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-clinic-tealGlow text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'fa' ? 'بخش پیشنهادی کلینیک:' : 'Recommended Service Section:'}</span>
          </div>

          <h4 className="text-lg font-extrabold text-white">
            {matchedService.name[language]}
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {matchedService.shortDescription[language]}
          </p>

          <div className="pt-2">
            <Link
              to={`/${language}/services`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-clinic-tealGlow hover:underline"
            >
              <span>{language === 'fa' ? 'مشاهده همه خدمات' : 'View All Medical Services'}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
