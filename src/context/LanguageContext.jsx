import React, { createContext, useState, useContext, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

const translations = {
  en: enTranslations,
  es: esTranslations,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
   const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('appLanguage');
    return storedLanguage && translations[storedLanguage] ? storedLanguage : 'es';
  });

  
  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]); // Este efecto se ejecuta cada vez que 'language' cambia



  const t = (key) => {
    // Función para obtener la traducción
    // Navega por el objeto de traducción usando el punto como separador
    // ej: t('navbar.home')
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== 'undefined' ? obj[k] : key), translations[language]);
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};