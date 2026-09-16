import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-clinic-navy/5 text-clinic-navy flex items-center justify-center mx-auto shadow-inner">
        <AlertCircle className="w-8 h-8 text-clinic-teal" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-clinic-navy">
          {t('notFoundTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {t('notFoundDesc')}
        </p>
      </div>

      <div>
        <Link
          to={`/${language}`}
          className="inline-flex items-center gap-2 bg-clinic-navy hover:bg-clinic-deep text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow transition-colors"
        >
          <Home className="w-4 h-4 text-clinic-tealLight" />
          <span>{t('returnHome')}</span>
        </Link>
      </div>
    </div>
  );
};
