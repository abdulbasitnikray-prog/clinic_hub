import type { MedicalService } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  ShieldAlert, 
  Baby, 
  UserCheck, 
  Bone, 
  Sparkles, 
  Apple, 
  Scale,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Activity,
  Stethoscope,
  HeartPulse,
  ShieldAlert,
  Baby,
  UserCheck,
  Bone,
  Sparkles,
  Apple,
  Scale
};

export const ServiceCard: React.FC<{ service: MedicalService }> = ({ service }) => {
  const { language, isRtl, t } = useLanguage();
  const IconComponent = ICON_MAP[service.iconName] || Activity;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <article className="group bg-[#0F223D] rounded-2xl p-6 sm:p-7 border border-slate-800/80 shadow-lg hover:shadow-teal-glow hover:border-clinic-teal/60 transition-all duration-300 flex flex-col justify-between h-full text-slate-100">
      <div>
        <div className="w-12 h-12 rounded-xl bg-clinic-teal/15 text-clinic-tealGlow flex items-center justify-center mb-5 group-hover:bg-clinic-teal group-hover:text-white transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-white mb-2.5 leading-snug group-hover:text-clinic-tealGlow transition-colors">
          {service.name[language]}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {service.shortDescription[language]}
        </p>

        {service.detailedScope[language] && service.detailedScope[language].length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
            {service.detailedScope[language].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-clinic-tealGlow flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        to={`/${language}/services`}
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-clinic-tealGlow hover:text-white transition-colors pt-3 border-t border-slate-800/80"
      >
        <span>{t('learnMore')}</span>
        <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
      </Link>
    </article>
  );
};
