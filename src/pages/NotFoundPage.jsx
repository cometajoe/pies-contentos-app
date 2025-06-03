// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {  Footprints, Home } from 'lucide-react'; // O Frown, Compass

const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center bg-slate-50 min-h-[calc(100vh-15rem)]"> {/* Adjust min-h as needed based on Navbar/Footer height */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl px-6"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="mb-8"
        >
          <Footprints className="w-28 h-28 sm:w-36 sm:h-36 text-sky-400 mx-auto" strokeWidth={1} />
          
        </motion.div>

        <h1 className="text-6xl sm:text-8xl font-bold text-sky-600 mb-4">
          {t('notFound.errorCode')}
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold font-gochi-hand text-slate-800 mb-5">
          {t('notFound.title')}
        </h2>
        <p className="text-md sm:text-lg text-slate-600 mb-4 leading-relaxed">
          {t('notFound.message')}
        </p>
       
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          {t('notFound.backToHome')}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;