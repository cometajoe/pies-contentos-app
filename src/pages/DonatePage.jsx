import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const DonatePage = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-sky-500 via-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold">
              {t('donatePage.hero.badge')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('donatePage.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('donatePage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Donation Information Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t('donatePage.donationInfo.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
            <div className="flex justify-center">
              <img
                src="/volunteer/donativos-cuenta.jpeg"
                alt={t('donatePage.donationInfo.imageAlt')}
                className="w-full max-w-none md:max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-white to-emerald-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            {t('donatePage.cta.title')}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t('donatePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-involved" 
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('donatePage.cta.volunteerButton')}
            </a>
            <a 
              href="/contact-us" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('donatePage.cta.contactButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage; 