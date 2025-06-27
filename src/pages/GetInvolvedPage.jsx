import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext'; //
import PageHeader from '../components/PageHeader'; //
import { HeartHandshake, Users, Briefcase, ShoppingCart, Send, CheckCircle } from 'lucide-react';

// Imagen de cabecera (puedes cambiarla por una más adecuada)
const pageHeaderImage = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80&fm=jpg&crop=entropy';

const GetInvolvedPage = () => {
  const { t } = useLanguage(); //

  // Estado para el formulario de voluntariado
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setVolunteerForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    // Simulación de envío de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Volunteer Form Data:', volunteerForm);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setVolunteerForm({ name: '', email: '', phone: '', interest: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000); // Ocultar mensaje de éxito después de 5s
  };

  // Variantes de animación para Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const formInputStyles = "w-full px-4 py-3 border text-slate-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 outline-none shadow-sm";
  const formLabelStyles = "block text-sm font-medium text-slate-700 mb-1";

  return (
    <div className="bg-slate-50">
      <PageHeader
        title={t('getInvolved.pageTitle')}
        subtitle={t('getInvolved.pageSubtitle')}
        backgroundImage={pageHeaderImage}
      />

      {/* Contenedor principal para las secciones */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* 1. Sección Apadrina un Niño */}
        <motion.section
          id="sponsor"
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center text-sky-600 mb-3">
              <HeartHandshake className="w-8 h-8 mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold font-gochi-hand text-sky-700"> {/* */}
                {t('getInvolved.sponsor.title')}
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t('getInvolved.sponsor.description')}
            </p>
            <a
              href="/#donate" // Ajusta este enlace a tu sección/página de donación
              className="inline-flex items-center group px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-xl shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 transform hover:scale-105"
            >
              {t('getInvolved.sponsor.button')}
              <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="slide2.jpeg" // Placeholder, reemplazar con imagen relevante
              alt={t('getInvolved.sponsor.title')}
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[400px]"
            />
          </div>
        </motion.section>

        {/* 2. Sección Voluntariado */}
        <motion.section
          id="volunteer"
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="md:sticky md:top-24"> {/* Sticky para la imagen */}
            <img
              src="volunteer/voluntario.webp" // Placeholder más vertical
              alt={t('getInvolved.volunteer.title')}
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px] md:max-h-[600px]"
            />
          </div>
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-slate-100">
            <div className="inline-flex items-center text-sky-600 mb-3">
              <Users className="w-8 h-8 mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold font-gochi-hand text-sky-700">
                {t('getInvolved.volunteer.title')}
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t('getInvolved.volunteer.description')}
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              {t('getInvolved.volunteer.formTitle')}
            </h3>
            <form onSubmit={handleVolunteerSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={formLabelStyles}>{t('getInvolved.volunteer.nameLabel')}</label>
                <input type="text" name="name" id="name" value={volunteerForm.name} onChange={handleVolunteerChange} className={formInputStyles} required />
              </div>
              <div>
                <label htmlFor="email" className={formLabelStyles}>{t('getInvolved.volunteer.emailLabel')}</label>
                <input type="email" name="email" id="email" value={volunteerForm.email} onChange={handleVolunteerChange} className={formInputStyles} required />
              </div>
              <div>
                <label htmlFor="phone" className={formLabelStyles}>{t('getInvolved.volunteer.phoneLabel')}</label>
                <input type="tel" name="phone" id="phone" value={volunteerForm.phone} onChange={handleVolunteerChange} className={formInputStyles} />
              </div>        
              <div>
                <label htmlFor="aged" className={formLabelStyles}>{t('getInvolved.volunteer.aged')}</label>
                <input type="number" name="aged" id="aged" value={volunteerForm.aged} onChange={handleVolunteerChange} className={formInputStyles} />
              </div>
              <div>
                <label htmlFor="gender" className={formLabelStyles}>{t('getInvolved.volunteer.gender')}</label>
                <select name="gender" id="gender" value={volunteerForm.gender} onChange={handleVolunteerChange} className={formInputStyles}>
                  <option value="male">{t('getInvolved.volunteer.genderOptions.male')}</option>
                  <option value="female">{t('getInvolved.volunteer.genderOptions.female')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="county" className={formLabelStyles}>{t('getInvolved.volunteer.county')}</label>
                <input type="text" name="county" id="county" value={volunteerForm.county} onChange={handleVolunteerChange} className={formInputStyles} />
              </div>
              <div>
                <label htmlFor="township" className={formLabelStyles}>{t('getInvolved.volunteer.township')}</label>
                <input type="text" name="township" id="township" value={volunteerForm.township} onChange={handleVolunteerChange} className={formInputStyles} />
              </div>
              <div>
                <label htmlFor="interest" className={formLabelStyles}>{t('getInvolved.volunteer.interestLabel')}</label>
                <input type="text" name="interest" id="interest" value={volunteerForm.interest} onChange={handleVolunteerChange} className={formInputStyles} />
              </div>
              <div>
                <label htmlFor="message" className={formLabelStyles}>{t('getInvolved.volunteer.messageLabel')}</label>
                <textarea name="message" id="message" rows="4" value={volunteerForm.message} onChange={handleVolunteerChange} className={`${formInputStyles} resize-none`} required />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-sky-600 text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : <Send className="w-5 h-5 mr-2" /> }
                {isSubmitting ? 'Enviando...' : t('getInvolved.volunteer.submitButton')}
              </button>
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-50 border border-green-300 text-green-700 rounded-lg flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>{t('getInvolved.volunteer.successMessage')}</span>
                </motion.div>
              )}
            </form>
          </div>
        </motion.section>

        {/* 3. Sección Patrocina */}
        <motion.section
          id="partner"
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <div className="inline-flex items-center text-sky-600 mb-3">
              <Briefcase className="w-8 h-8 mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold font-gochi-hand text-sky-700">
                {t('getInvolved.partner.title')}
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t('getInvolved.partner.description')}
            </p>
            <a
              href="/contact-us?reason=partner" // Enlaza a contacto con motivo de patrocinio
              className="inline-flex items-center group px-8 py-3 text-lg font-semibold text-white bg-slate-700 hover:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-slate-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 transform hover:scale-105"
            >
              {t('getInvolved.partner.contactButton')}
              <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=600&h=400&q=80&fm=jpg&crop=entropy" // Placeholder
              alt={t('getInvolved.partner.title')}
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[400px]"
            />
          </div>
        </motion.section>

        {/* 4. Sección Tienda en Línea CTA */}
        <motion.section
          id="store-cta"
          className="bg-gradient-to-br from-sky-600 to-sky-700 text-white py-16 sm:py-20 rounded-2xl shadow-2xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto px-6 text-center md:text-left grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <ShoppingCart className="w-24 h-24 sm:w-32 sm:h-32 text-sky-300 opacity-80" />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold font-gochi-hand mb-4">
                {t('getInvolved.store.title')}
              </h2>
              <p className="text-sky-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                {t('getInvolved.store.description')}
              </p>
            </div>
            <div className="md:col-span-1 flex justify-center md:justify-end">
              <a
                href="/coming-soon" // Reemplaza '#' con el enlace real a tu tienda
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-lg font-semibold text-sky-700 bg-white hover:bg-sky-50 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-200/50 transition-all duration-300 transform hover:scale-105"
              >
                {t('getInvolved.store.button')}
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default GetInvolvedPage;