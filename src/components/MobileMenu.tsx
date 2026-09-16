import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CLINIC_INFO } from '../data/clinic';
import { X, PhoneCall, MapPin, Clock } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const prefix = `/${language}`;

  const navLinks = [
    { path: prefix, label: t('navHome') },
    { path: `${prefix}/about`, label: t('navAbout') },
    { path: `${prefix}/services`, label: t('navServices') },
    { path: `${prefix}/endocrine-care`, label: t('navEndocrine') },
    { path: `${prefix}/patient-care`, label: t('navPatientCare') },
    { path: `${prefix}/contact`, label: t('navContact') },
    { path: `${prefix}/faq`, label: t('navFaq') },
    { path: `${prefix}/privacy`, label: t('navPrivacy') },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#070F1E]/98 backdrop-blur-xl animate-fadeIn text-slate-100">
      {/* Top Header inside Menu */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-clinic-teal text-white flex items-center justify-center font-bold text-lg">
            ش
          </div>
          <span className="font-bold text-sm text-white">{CLINIC_INFO.name[language]}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
          aria-label="بستن منو / Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
        <div className="mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {language === 'fa' ? 'انتخاب زبان' : 'Language'}
          </span>
          <LanguageSwitcher />
        </div>

        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            end={link.path === prefix}
            className={({ isActive }) =>
              `block py-3 px-4 rounded-xl text-base font-semibold transition-all ${
                isActive
                  ? 'bg-clinic-teal text-white shadow'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Footer Details inside Mobile Menu */}
      <div className="p-5 bg-[#0A1628] border-t border-slate-800 space-y-3 text-xs text-slate-300">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-clinic-teal flex-shrink-0" />
          <span>{CLINIC_INFO.location[language]} • {CLINIC_INFO.address[language]}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-clinic-teal flex-shrink-0" />
          <span>{CLINIC_INFO.workingDays[language]}</span>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          {CLINIC_INFO.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-clinic-tealGlow font-bold text-sm hover:underline ltr-text"
            >
              <PhoneCall className="w-4 h-4 text-clinic-teal" />
              <span>{phone}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
