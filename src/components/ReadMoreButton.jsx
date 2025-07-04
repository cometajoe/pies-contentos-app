import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';


const ReadMoreButton = ({ href, variants, title }) => {
    const { t } = useLanguage();

  return (  
   
        <motion.div className="mt-12" variants={variants}>
          <a 
            href={href} // <-- Enlace a la futura página de "Acerca de Nosotros"
            className="
              inline-flex items-center group
              px-8 py-3 text-lg font-semibold 
              bg-gradient-to-r from-sky-600 to-sky-500 text-white
              rounded-xl shadow-lg
              hover:from-sky-700 hover:to-sky-600 hover:scale-105 hover:shadow-xl
              focus:outline-none focus:ring-4 focus:ring-sky-500/50 focus:ring-offset-2
              transition-all duration-300 ease-in-out transform
            "
          >
            {t(title)} {/* Texto del botón */}
            {/* Flecha que aparece al hacer hover */}
            <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
  );
}
export default ReadMoreButton;