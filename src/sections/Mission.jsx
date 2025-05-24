// src/sections/Mission.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Un ícono de "Objetivo" o "Diana" que representa la misión.
// Puedes reemplazarlo por cualquier otro SVG que se ajuste a tu mensaje.
const TargetIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
  </svg>
);


const Mission = () => {
  const { t } = useLanguage();

  // 'useRef' y 'useInView' para detectar cuándo la sección entra en la pantalla
  const ref = useRef(null);
  // 'once: true' hace que la animación se ejecute solo una vez
  // 'amount: 0.3' activa la animación cuando el 30% de la sección es visible
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Anima los hijos en secuencia
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", type: "spring" } },
  };

  return (
    <section id="mission" ref={ref} className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Columna de Texto (Izquierda) */}
          <motion.div variants={itemVariants}>
            <h2 
              className="
                text-4xl sm:text-5xl font-bold text-slate-800 mb-6 
                font-gochi-hand text-sky-800" // Aplicamos la fuente manuscrita y el color primario
            >
              {t('mission.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('mission.statement')}
            </p>
          </motion.div>

          {/* Columna de Ícono (Derecha) */}
          <motion.div variants={iconVariants} className="flex justify-center items-center">
            <TargetIcon className="w-48 h-48 sm:w-64 sm:h-64 text-sky-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;