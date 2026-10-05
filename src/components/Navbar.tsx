import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { CLINIC_INFO } from '../data/clinic';
import { MEDIA_ASSETS } from '../data/media';
import { useTheme } from '../context/ThemeContext';
import { PhoneCall, Menu, Moon, Sun } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefix = `/${language}`;
  const themeLabel = theme === 'dark' ? t('themeSwitchLight') : t('themeSwitchDark');

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle p-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
      aria-label={themeLabel}
      title={themeLabel}
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  const navLinks = [
    { path: prefix, label: t('navHome'), exact: true },
    { path: `${prefix}/about`, label: t('navAbout') },
    { path: `${prefix}/services`, label: t('navServices') },
    { path: `${prefix}/endocrine-care`, label: t('navEndocrine') },
    { path: `${prefix}/patient-care`, label: t('navPatientCare') },
    { path: `${prefix}/contact`, label: t('navContact') },
    { path: `${prefix}/faq`, label: t('navFaq') },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg py-2.5' : 'bg-[#070F1E]/95 border-b border-slate-800/80 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Clinic Logo & Title */}
            <Link to={prefix} className="flex items-center gap-2 sm:gap-3 group">
              <span className="clinic-logo-frame w-12 h-9 p-1 rounded-md border border-slate-700/70 flex items-center justify-center group-hover:scale-105 transition-transform sm:w-[76px] sm:h-12 sm:p-1.5">
                <img
                  src={MEDIA_ASSETS.logo.src}
                  alt={MEDIA_ASSETS.logo.alt[language]}
                  className="w-full h-full object-contain"
                />
              </span>
              <div className="flex min-w-0 flex-col">
                <span title={CLINIC_INFO.name[language]} className="max-w-[8.5rem] truncate font-extrabold text-xs sm:max-w-none sm:text-lg text-white tracking-tight leading-tight group-hover:text-clinic-tealGlow transition-colors">
                  {CLINIC_INFO.name[language]}
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
                  {CLINIC_INFO.tagline[language]}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-2" aria-label={language === 'fa' ? 'منوی اصلی' : 'Main navigation'}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.exact}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-clinic-tealGlow bg-clinic-teal/15 font-bold border-b-2 border-clinic-teal'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Language Switcher & Call CTA */}
            <div className="hidden xl:flex items-center gap-3">
              {themeToggle}
              <LanguageSwitcher />

              <a
                href={`tel:${CLINIC_INFO.phones[0]}`}
                className="flex items-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white text-xs xl:text-sm font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-clinic-teal/25 transition-all transform hover:-translate-y-0.5"
                aria-label={`${t('callNow')}: ${CLINIC_INFO.phones[0]}`}
              >
                <PhoneCall className="w-4 h-4 text-white animate-pulse" />
                <span>{t('callNow')}</span>
              </a>
            </div>

            {/* Mobile Actions: Language Switcher + Hamburger */}
            <div className="flex xl:hidden items-center gap-1 sm:gap-2">
              {themeToggle}
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-200 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                aria-label="باز کردن منو / Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
