
import { motion } from 'framer-motion';

// Este componente recibirá el título, subtítulo y la imagen de fondo como props
const PageHeader = ({ title, subtitle, backgroundImage }) => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Anima el título y subtítulo en secuencia
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <header className="relative h-60 sm:h-72 flex items-center justify-center text-center text-white overflow-hidden">
      {/* Imagen de Fondo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-slate-800/70"></div>

      {/* Contenido del Header */}
      <motion.div
        className="relative z-10 px-4"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold font-gochi-hand text-sky-300 sm:text-5xl md:text-6xl"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </header>
  );
};

export default PageHeader;