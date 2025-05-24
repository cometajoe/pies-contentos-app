
import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icono para el botón de cerrar
const CloseIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Efecto para cerrar el modal con la tecla 'Escape'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((image) => (
          <motion.div
            key={image.src}
            className="relative aspect-square w-full h-full rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
            onClick={() => setSelectedImage(image)}
            layoutId={image.src} // <-- Clave para la animación de expansión
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Vista Previa (Modal / Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Cierra al hacer clic en el fondo
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <motion.div layoutId={selectedImage.src} className="relative shadow-2xl rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-auto h-auto max-h-[85vh] object-contain"
                />
              </motion.div>
              
              {selectedImage.caption && (
                <motion.div
                  className="mt-4 text-center text-white text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                >
                  {selectedImage.caption}
                </motion.div>
              )}
            </div>

            <motion.button
              className="absolute top-5 right-5 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            >
              <CloseIcon className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;