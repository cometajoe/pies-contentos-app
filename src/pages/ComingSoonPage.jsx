// src/pages/ComingSoonPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Rocket, Home } from 'lucide-react'; // O Construction, Zap, etc.

const ComingSoonPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-500 via-blue-600 to-sky-700 text-white p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="max-w-md"
      >
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Rocket className="w-24 h-24 sm:w-32 sm:h-32 text-sky-200 mx-auto" strokeWidth={1.5} />
        </motion.div>

        <h1 className="text-4xl sm:text-5xl font-bold font-gochi-hand text-white mb-6">
          {t('comingSoon.title')}
        </h1>
        <p className="text-lg sm:text-xl text-sky-100 mb-10 leading-relaxed">
          {t('comingSoon.message')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg shadow-lg hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-600 transition-transform transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          {t('comingSoon.backToHome')}
        </Link>
      </motion.div>
      <footer className="absolute bottom-6 text-sm text-sky-200/80">
        &copy; {new Date().getFullYear()} Pies Contentos. {t('footer.copyright') ? t('footer.copyright').split('.')[1].trim() : 'All rights reserved.'}
      </footer>
    </div>
  );
};

export default ComingSoonPage;