// src/sections/ContactForm.jsx
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

// Google Maps embed URL - replace with your actual location coordinates
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8234567890123!2d-106.4680535!3d31.7311197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7593690757361%3A0x2c0191e5e5b7f975!2sBrasil%20776%2C%20Ex%20Hip%C3%B3dromo%2C%2032040%20Ju%C3%A1rez%2C%20Chih.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

const ContactForm = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'general',
    message: '',
  });
  

  const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ // Para manejar éxito y error
    submitted: false,
    success: false,
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ submitted: false, success: false, message: '' }); // Reset status

    try {
      const response = await fetch('/send-email.php', { // URL to your PHP file
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ submitted: true, success: true, message: t('contact.submitSuccessMessage') || result.message }); // Usa una traducción si la tienes
        setFormData({ name: '', email: '', reason: 'general', message: '' }); // Limpia el formulario
      } else {
        setSubmitStatus({ submitted: true, success: false, message: t('contact.submitErrorMessage') || result.message || 'Error al enviar el mensaje.' }); // Usa una traducción
      }
    } catch (error) {
      console.error('Error en la petición fetch:', error);
      setSubmitStatus({ submitted: true, success: false, message: t('contact.submitNetworkErrorMessage') || 'Error de red. Inténtalo de nuevo.' }); // Usa una traducción
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Brasil 776, Ex Hipódromo, 32040 Juárez, Chih.',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'pies.contentos.pc@gmail.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+52 656-770-8528',
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <section id="contact" ref={ref} className="bg-gradient-to-br from-slate-50 via-white to-sky-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 font-gochi-hand text-sky-700 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-slate-600 text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.nameLabel')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border text-slate-700 border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.emailLabel')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border text-slate-700 border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.reasonLabel')}
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
                  >
                    <option value="general">{t('contact.reasonOptions.general')}</option>                  
                    <option value="donation">{t('contact.reasonOptions.donation')}</option>
                    <option value="press">{t('contact.reasonOptions.press')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border text-slate-700 border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none resize-none"
                    required
                  />
                </div>

                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-gradient-to-r from-sky-600 to-sky-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-sky-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : <Send className="w-5 h-5 mr-2" /> }
                {isSubmitting ? (t('contact.submittingButton') || 'Enviando...') : t('contact.submitButton')}
              </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;