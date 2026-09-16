import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinic';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0F223D] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl text-slate-100">
      <div className="flex items-center gap-2 mb-2 text-xs font-bold text-clinic-tealGlow uppercase tracking-wider">
        <ShieldCheck className="w-4 h-4" />
        <span>{t('contactFormTitle')}</span>
      </div>

      <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
        {t('contactFormNotice')}
      </p>

      {submitted ? (
        <div className="bg-emerald-950/80 border border-emerald-800 rounded-xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="font-bold text-emerald-200 text-base">
            {language === 'fa' ? 'پیام شما دریافت گردید' : 'Inquiry Prepared'}
          </h4>
          <p className="text-xs sm:text-sm text-emerald-300 leading-relaxed">
            {language === 'fa'
              ? 'تشکر از تماس شما. برای رسیدگی عاجل به وضعیت صحی، لطفاً مستقیماً با شماره 0797955212 تماس بگیرید.'
              : 'Thank you for reaching out. For urgent healthcare consultation, please call 0797955212 directly.'}
          </p>
          <a
            href={`tel:${CLINIC_INFO.phones[0]}`}
            className="inline-block bg-clinic-teal text-white text-xs font-bold px-4 py-2 rounded-lg mt-2 hover:bg-clinic-tealLight transition-colors"
          >
            {t('callNow')}
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {t('formName')} *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-[#070F1E] text-white rounded-xl border border-slate-700 focus:ring-2 focus:ring-clinic-teal focus:border-transparent outline-none transition-all placeholder:text-slate-500"
              placeholder={language === 'fa' ? 'احمد شاه' : 'John Doe'}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {t('formPhone')} *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-[#070F1E] text-white rounded-xl border border-slate-700 focus:ring-2 focus:ring-clinic-teal focus:border-transparent outline-none transition-all ltr-text placeholder:text-slate-500"
              placeholder="0797955212"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {t('formMessage')}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-[#070F1E] text-white rounded-xl border border-slate-700 focus:ring-2 focus:ring-clinic-teal focus:border-transparent outline-none transition-all placeholder:text-slate-500"
              placeholder={language === 'fa' ? 'لطفاً استفسار غیرعاجل خود را بنویسید...' : 'Type your general inquiry here...'}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-clinic-teal to-emerald-600 hover:from-emerald-600 hover:to-clinic-teal text-white font-bold text-sm py-3 px-6 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.99]"
          >
            <Send className="w-4 h-4 text-white" />
            <span>{t('formSubmit')}</span>
          </button>
        </form>
      )}
    </div>
  );
};
