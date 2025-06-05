
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ImageGallery from '../components/ImageGallery'; 
import ReadMoreButton from '../components/ReadMoreButton';


// Imágenes de ejemplo para la sección de voluntarios.
// Reemplázalas con fotos reales de tus eventos y voluntarios.
const volunteerImages = [
  { src: 'volunteer/dsc_0218.webp', alt: 'Voluntaria enseñando a una niña', caption: 'Clases de apoyo personalizadas.' },
  { src: 'volunteer/merch.webp', alt: 'Grupo de voluntarios sonriendo', caption: 'Nuestro equipo después de una jornada exitosa.' },
  { src: 'volunteer/voluntario.webp', alt: 'Voluntarios limpiando un parque', caption: 'Proyectos de mejora comunitaria.' },
  { src: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=800&q=60', alt: 'Voluntario jugando con niños', caption: 'El juego es parte fundamental del aprendizaje.' },
];

const Volunteers = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    // Tarea 4: Usamos un gradiente sutil para el fondo
    <section id="volunteers" ref={ref} className="bg-gradient-to-b from-sky-50 to-sky-200 py-20 sm:py-28">
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Título y subtítulo */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl font-bold text-slate-800 font-gochi-hand text-sky-800 sm:text-5xl">
            {t('volunteers.title')}
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t('volunteers.subtitle')}
          </p>
        </motion.div>

        {/* Galería de Imágenes Reutilizada */}
        <motion.div variants={itemVariants}>
          <ImageGallery images={volunteerImages} />
        </motion.div>

        {/* Botón de Llamado a la Acción */}
   
              <ReadMoreButton href={"/get-involved"} variants={itemVariants} title="volunteers.ctaButton" />

      </motion.div>
    </section>
  );
};

export default Volunteers;