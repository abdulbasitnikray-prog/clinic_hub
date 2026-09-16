import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { MobileContactBar } from './components/MobileContactBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { EndocrineCarePage } from './pages/EndocrineCarePage';
import { PatientCarePage } from './pages/PatientCarePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Component to handle URL language synchronization
const RouteLanguageSync: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const urlLang = pathParts[0];

    if (urlLang === 'fa' || urlLang === 'en' || urlLang === 'da') {
      const canonicalLang = urlLang === 'da' ? 'fa' : (urlLang as 'fa' | 'en');
      if (canonicalLang !== language) {
        setLanguage(canonicalLang);
      }
    }
  }, [location.pathname]);

  return null;
};

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-clinic-bg text-clinic-textDark">
      <ScrollToTop />
      <RouteLanguageSync />
      
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Root Redirect to language path */}
          <Route path="/" element={<Navigate to="/fa" replace />} />

          {/* Dari / Farsi Routes */}
          <Route path="/fa" element={<HomePage />} />
          <Route path="/fa/about" element={<AboutPage />} />
          <Route path="/fa/services" element={<ServicesPage />} />
          <Route path="/fa/endocrine-care" element={<EndocrineCarePage />} />
          <Route path="/fa/patient-care" element={<PatientCarePage />} />
          <Route path="/fa/contact" element={<ContactPage />} />
          <Route path="/fa/faq" element={<FaqPage />} />
          <Route path="/fa/privacy" element={<PrivacyPage />} />

          {/* Alternative /da prefix redirect for compatibility */}
          <Route path="/da" element={<Navigate to="/fa" replace />} />
          <Route path="/da/about" element={<Navigate to="/fa/about" replace />} />
          <Route path="/da/services" element={<Navigate to="/fa/services" replace />} />
          <Route path="/da/endocrine-care" element={<Navigate to="/fa/endocrine-care" replace />} />
          <Route path="/da/patient-care" element={<Navigate to="/fa/patient-care" replace />} />
          <Route path="/da/contact" element={<Navigate to="/fa/contact" replace />} />
          <Route path="/da/faq" element={<Navigate to="/fa/faq" replace />} />
          <Route path="/da/privacy" element={<Navigate to="/fa/privacy" replace />} />

          {/* English Routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/services" element={<ServicesPage />} />
          <Route path="/en/endocrine-care" element={<EndocrineCarePage />} />
          <Route path="/en/patient-care" element={<PatientCarePage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/faq" element={<FaqPage />} />
          <Route path="/en/privacy" element={<PrivacyPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating & Fixed Contact Components */}
      <FloatingCallButton />
      <MobileContactBar />
      <ScrollToTopButton />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
