import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PrivacyHubPage } from './pages/PrivacyHubPage';
import { PrivacyMyCirclePage } from './pages/PrivacyMyCirclePage';
import { PrivacyCestMaTourneePage } from './pages/PrivacyCestMaTourneePage';
import { PrivacyEasy2OrderPage } from './pages/PrivacyEasy2OrderPage';
import { PrivacySecretPartyFinderPage } from './pages/PrivacySecretPartyFinderPage';

// Scroll to top automatically when route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0A192F] text-[#CCD6F6]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyHubPage />} />
            <Route path="/privacy/mycircle" element={<PrivacyMyCirclePage />} />
            <Route path="/privacy/cestmatournee" element={<PrivacyCestMaTourneePage />} />
            <Route path="/privacy/easy2order" element={<PrivacyEasy2OrderPage />} />
            <Route path="/privacy/secretpartyfinder" element={<PrivacySecretPartyFinderPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
