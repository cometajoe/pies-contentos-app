import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" ref={ref} className="bg-slate-900 text-white py-24 sm:py-32">
      <motion.div
        className="container mx-auto px-6 text-center max-w-4xl"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Título de la sección */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold font-gochi-hand text-sky-400 mb-8"
          variants={variants}
        >
          {t('about.title')}
        </motion.h2>

        {/* Descripción */}
        <motion.p 
          className="text-xl sm:text-2xl text-slate-300 leading-relaxed"
          variants={variants}
        >
          {t('about.description')}
        </motion.p>

        {/* Botón "Leer más" */}
        <motion.div className="mt-12" variants={variants}>
          <a 
            href="/about-us" // <-- Enlace a la futura página de "Acerca de Nosotros"
            className="
              inline-flex items-center group
              px-8 py-3 text-lg font-semibold 
              bg-white text-slate-800 
              rounded-full shadow-lg
              hover:bg-sky-500 hover:text-white hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-sky-500/50
              transition-all duration-300 ease-in-out
            "
          >
            {t('about.readMore')}
            {/* Flecha que aparece al hacer hover */}
            <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;