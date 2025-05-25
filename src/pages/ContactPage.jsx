// src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../sections/ContactForm';
import { useLanguage } from '../context/LanguageContext';





const ContactPage = () => {
     const { t } = useLanguage();
  return (
   <>
      
    <div className="py-10">
      <ContactForm />
    </div>
    </>
  );
};

export default ContactPage;