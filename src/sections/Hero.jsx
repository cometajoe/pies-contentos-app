// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Footprints } from  'lucide-react';
const Hero = () => {
  const { t } = useLanguage();

  // URL de imagen mejorada y más específica para ONG de niños
  const heroImageUrl = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  // Animaciones mejoradas con más suavidad
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier easing
      } 
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  const floatingElementVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImageUrl}
          alt="Niños felices corriendo - Fundación Pies Contentos"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>

      {/* Elementos decorativos (ocultos en móvil) */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-sky-400/20 rounded-full blur-xl"
        variants={floatingElementVariants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute bottom-32 right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        variants={floatingElementVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-24 text-center" // Padding ajustado para móvil
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge superior */}
        <motion.div
          className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-sky-100 bg-sky-600/30 backdrop-blur-sm border border-sky-400/30 rounded-full"
          variants={subtitleVariants}
        >
          {/* ... (tu SVG y texto del badge) ... */}
          <Footprints className='mr-1'/>
          { t('hero.subtitle') }
        </motion.div>
        
        {/* Título principal (Mobile-First) */}
        <motion.h1
          className="
            text-4xl leading-tight font-bold text-white mb-8
            sm:text-5xl 
            lg:text-6xl lg:leading-tight
          "
          variants={titleVariants}
        >
          <span className="block">
            {t('hero.title1') || 'En Pies Contentos, transformamos vidas y'}
          </span>
          <span className="block bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent">
            {t('hero.title2') || 'construimos un futuro brillante.'}
          </span>
        </motion.h1>

        {/* Botones de acción */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={buttonContainerVariants}
        >
          {/* ... (tu código de botones, que ya es mobile-first) ... */}
            <motion.a href="#donate" className="group inline-flex items-center w-full justify-center sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 rounded-xl shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}> <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> </svg> {t('hero.donateButton') || 'Dona Ahora'} <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /> </svg> </motion.a>
            <motion.a href="#about" className="group inline-flex items-center w-full justify-center sm:w-auto px-8 py-4 text-lg font-medium text-white border-2 border-white/30 hover:border-white/60 backdrop-blur-sm hover:bg-white/10 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}> {t('hero.learnMoreButton') || 'Conocer Más'} <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /> </svg> </motion.a>
        </motion.div>

        {/* Estadísticas rápidas */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 md:mt-16 max-w-3xl mx-auto" // Margen ajustado
          variants={buttonContainerVariants}
          transition={{ delay: 0.4 }}
        >
          {/* ... (tu código de estadísticas, que ya es mobile-first) ... */}
           <div className="text-center"> <div className="text-3xl sm:text-4xl font-bold text-sky-400 mb-2"> {t('hero.stat1Number') || '2,500+'} </div> <div className="text-sm sm:text-base text-slate-300"> {t('hero.stat1Text') || 'Niños ayudados'} </div> </div> <div className="text-center"> <div className="text-3xl sm:text-4xl font-bold text-sky-400 mb-2"> {t('hero.stat2Number') || '50+'} </div> <div className="text-sm sm:text-base text-slate-300"> {t('hero.stat2Text') || 'Comunidades'} </div> </div> <div className="text-center"> <div className="text-3xl sm:text-4xl font-bold text-sky-400 mb-2"> {t('hero.stat3Number') || '9'} </div> <div className="text-sm sm:text-base text-slate-300"> {t('hero.stat3Text') || 'Años de impacto'} </div> </div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll (oculto en pantallas medianas para no estorbar) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
        // ... (resto de tus props de animación) ...
      >
        {/* ... (tu código del indicador de scroll) ... */}
         <motion.div className="flex flex-col items-center text-white/70 hover:text-white cursor-pointer" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} > <span className="text-sm mb-2 font-light"> {t('hero.scrollText') || 'Descubre más'} </span> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /> </svg> </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;