// src/sections/Partners.jsx
import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderLogo from '../components/PlaceholderLogo';

// Actualizamos los datos para incluir URLs de logos reales (usaremos placeholders de SVGs)
// Reemplaza estas URLs con las de los logos de tus socios.
const partnersData = [
  { name: 'Park United Presbyterian Church', href: '#', logoSrc: 'partners/park-sign-2018-1-.webp' },
  { name: 'Centro Mexicano Pro Bono', href: '#', logoSrc: 'partners/pro-bono.webp' },
  { name: 'SMPS Legal', href: '#', logoSrc: 'partners/smps-legal.webp' }, // <-- Ejemplo usando el placeholder
  { name: 'Tecnológico de Juárez', href: '#', logoSrc: 'partners/tec-juarez.webp' },
  { name: 'Donador Angel', href: '#', logoSrc: null },
];




const Partners = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="partners" ref={ref} className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 font-gochi-hand text-sky-800">
            {t('partners.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('partners.subtitle')}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-5"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {partnersData.map((partner) => (
            <motion.div key={partner.name} variants={itemVariants} className="text-center">
              <a 
                href={partner.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-block" // <-- `group` para controlar el hover de los hijos
              >
                {/* Contenedor del Logo */}
                <div 
                  className="
                    h-32 bg-white rounded-xl shadow-sm p-6
                    flex items-center justify-center 
                    transition-all duration-300 ease-in-out
                    group-hover:shadow-lg group-hover:scale-105
                  "
                >
                  <div 
                    className="
                      transition-all duration-300 ease-in-out
                      filter grayscale group-hover:grayscale-0
                    "
                  >
                    {partner.logoSrc ? (
                      <img src={partner.logoSrc} alt={partner.name} className="max-h-28 w-auto" />
                    ) : (
                      <PlaceholderLogo />
                    )}
                  </div>
                </div>

                {/* Nombre del Socio */}
                <p className="mt-4 font-semibold text-slate-600 group-hover:text-sky-700 transition-colors duration-300">
                  {partner.name}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;