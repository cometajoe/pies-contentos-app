import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ReadMoreButton from '../components/ReadMoreButton';

const AboutUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" ref={ref} className="bg-gradient-to-br from-sky-50 via-white to-sky-100 text-slate-800 py-20 sm:py-28">
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
          className="text-4xl sm:text-5xl font-bold font-gochi-hand text-slate-800 mb-8"
          variants={variants}
        >
          {t('about.title')}
        </motion.h2>

        {/* Descripción */}
        <motion.p 
          className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-8"
          variants={variants}
        >
          {t('about.description')}
        </motion.p>

       <ReadMoreButton href={"/about-us"} variants={variants} title="about.readMore" />
      </motion.div>
    </section>
  );
};

export default AboutUs;