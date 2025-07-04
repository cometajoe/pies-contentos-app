import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const EventsGallerySection = ({ title, galleryImages }) => {
    const [currentGallery, setCurrentGallery] = useState(0);
    const [previewImage, setPreviewImage] = useState(null);

    const nextGallery = () => {
        setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
      };
    
      const prevGallery = () => {
        setCurrentGallery((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      };

    const handleImageClick = (img) => setPreviewImage(img);
    const handleClosePreview = () => setPreviewImage(null);

    return (
   
  <section className="py-16 px-6 bg-gradient-to-br from-emerald-50/30 to-sky-50/30 w-full md:w-1/3">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto rounded-full"></div>
      </div>
      <div className="relative">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => handleImageClick(galleryImages[currentGallery])}>
          <div className={`w-full h-full bg-gradient-to-br ${galleryImages[currentGallery].bg} flex items-center justify-center`}>
            <div className="text-white text-center">
              <img src={galleryImages[currentGallery].src} alt={galleryImages[currentGallery].alt} className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
        <button
          onClick={prevGallery}
          aria-label="Anterior imagen"
          tabIndex={0}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-sky-100 focus:bg-sky-200 border border-sky-200 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 focus:scale-110 outline-none focus:ring-2 focus:ring-sky-400"
        >
          <ChevronLeft className="w-6 h-6 text-sky-600" />
        </button>
        <button
          onClick={nextGallery}
          aria-label="Siguiente imagen"
          tabIndex={0}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-sky-100 focus:bg-sky-200 border border-sky-200 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 focus:scale-110 outline-none focus:ring-2 focus:ring-sky-400"
        >
          <ChevronRight className="w-6 h-6 text-sky-600" />
        </button>
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGallery(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentGallery 
                  ? (index % 2 === 0 ? 'bg-sky-500 scale-125' : 'bg-emerald-500 scale-125')
                  : 'bg-slate-300'
              }`}
              aria-label={`Seleccionar imagen ${index + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
      {/* Simple Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl bg-white"
            />
            <button
              onClick={handleClosePreview}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-sky-600 rounded-full p-2 shadow"
              aria-label="Cerrar vista previa"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  </section>
  )
};

export default EventsGallerySection; 