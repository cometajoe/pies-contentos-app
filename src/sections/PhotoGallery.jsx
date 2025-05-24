import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageGallery from '../components/ImageGallery';

// Usa tus propias imágenes. Estas son de Unsplash como ejemplo.
const exampleImages = [
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=60', alt: 'Niños sonriendo', caption: 'Taller de arte con los niños de la comunidad.' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=60', alt: 'Voluntarios entregando comida', caption: 'Jornada de entrega de alimentos a familias.' },
  { src: 'https://images.unsplash.com/photo-1542810634-71277d952594?auto=format&fit=crop&w=800&q=60', alt: 'Clase al aire libre', caption: 'Nuestras clases de apoyo escolar al aire libre.' },
  { src: 'https://images.unsplash.com/photo-1618423415342-a42dd6453974?auto=format&fit=crop&w=800&q=60', alt: 'Manos plantando un árbol', caption: 'Cuidando nuestro planeta para las futuras generaciones.' },
  { src: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=60', alt: 'Grupo de voluntarios', caption: 'Nuestro increíble equipo de voluntarios.' },
  { src: 'https://images.unsplash.com/photo-1627438136395-3100650f55c5?auto=format&fit=crop&w=800&q=60', alt: 'Niña leyendo un libro', caption: 'Fomentando el amor por la lectura.' },
  { src: 'https://images.unsplash.com/photo-1509099652299-503fab837913?auto=format&fit=crop&w=800&q=60', alt: 'Materiales escolares', caption: 'Entrega de útiles escolares para el nuevo ciclo.' },
  { src: 'https://images.unsplash.com/photo-1626125345510-44967461c4e5?auto=format&fit=crop&w=800&q=60', alt: 'Comida saludable', caption: 'Promoviendo una nutrición balanceada.' },
  { src: 'https://images.unsplash.com/photo-1576764436608-5a484b399479?auto=format&fit=crop&w=800&q=60', alt: 'Juegos y risas', caption: 'El juego es una parte fundamental del desarrollo.' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=60', alt: 'Comunidad reunida', caption: 'Eventos que unen a nuestra comunidad.' },
];

const PhotoGallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 font-gochi-hand text-sky-800">
            {t('gallery.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        <ImageGallery images={exampleImages} />
      </div>
    </section>
  );
};

export default PhotoGallerySection;