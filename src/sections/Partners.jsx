
import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderLogo from '../components/PlaceholderLogo'; // Importamos nuestro marcador de posición

// Aquí definirías la información de tus socios.
// Cuando tengas los logos reales, puedes importarlos y poner la ruta en 'logoSrc'.
const partnersData = [
  { name: 'Socio A', href: '#', logoSrc: null },
  { name: 'Socio B', href: '#', logoSrc: null },
  { name: 'Socio C', href: '#', logoSrc: null },
  { name: 'Socio D', href: '#', logoSrc: null },
  { name: 'Socio E', href: '#', logoSrc: null },
  { name: 'Socio F', href: '#', logoSrc: null },
];

const Partners = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Un ligero retraso entre cada logo al aparecer
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="partners" ref={ref} className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* Título y Subtítulo de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 font-gochi-hand text-sky-800">
            {t('partners.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Cuadrícula de Logos */}
        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {partnersData.map((partner) => (
            <motion.div key={partner.name} variants={logoVariants}>
              <a 
                href={partner.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="
                  block p-1 bg-white rounded-xl shadow-sm 
                  filter grayscale hover:grayscale-0 
                  hover:shadow-lg hover:scale-105
                  transition-all duration-300 ease-in-out
                "
              >
                {/* Lógica para mostrar logo real o el marcador de posición */}
                {partner.logoSrc ? (
                  <img src={partner.logoSrc} alt={partner.name} className="w-full h-auto object-contain rounded-lg" />
                ) : (
                  <PlaceholderLogo name={partner.name} />
                )}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;