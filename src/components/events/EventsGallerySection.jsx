import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const EventsGallerySection = ({ title, galleryImages: galleryImagesProp, showTitle = true, fullWidth = false }) => {
    const galleryImages = Array.isArray(galleryImagesProp) ? galleryImagesProp : [];
    const length = galleryImages.length;
    const sectionWidth = fullWidth ? 'w-full' : 'w-full md:w-1/3';

    const [currentGallery, setCurrentGallery] = useState(0);
    const [previewImage, setPreviewImage] = useState(null);

    // Keep index in bounds when gallery list or length changes (avoids lag/blank when props update)
    useEffect(() => {
        if (length === 0) return;
        setCurrentGallery((prev) => (prev >= length ? 0 : prev));
    }, [length]);

    const nextGallery = useCallback((e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (length === 0) return;
        setCurrentGallery((prev) => (prev + 1) % length);
    }, [length]);

    const prevGallery = useCallback((e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (length === 0) return;
        setCurrentGallery((prev) => (prev - 1 + length) % length);
    }, [length]);

    const handleImageClick = useCallback((img) => setPreviewImage(img), []);
    const handleClosePreview = useCallback(() => setPreviewImage(null), []);

    if (length === 0) {
        return (
            <section className={`py-16 px-6 bg-gradient-to-br from-emerald-50/30 to-sky-50/30 ${sectionWidth}`}>
                <div className="max-w-4xl mx-auto">
                    {showTitle && (
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto rounded-full"></div>
                        </div>
                    )}
                    <div className="aspect-video rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                        No images
                    </div>
                </div>
            </section>
        );
    }

    const current = galleryImages[currentGallery];
    if (!current) return null;

    return (
  <section className={`py-16 px-6 bg-gradient-to-br from-emerald-50/30 to-sky-50/30 ${sectionWidth}`}>
    <div className={fullWidth ? 'max-w-6xl mx-auto' : 'max-w-4xl mx-auto'}>
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto rounded-full"></div>
        </div>
      )}
      <div className="relative">
        <div
          className="aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={() => handleImageClick(current)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleImageClick(current); } }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${current.bg} flex items-center justify-center`}>
            <div className="text-white text-center w-full h-full">
              <img
                src={current.src}
                alt={current.alt}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={prevGallery}
          aria-label="Anterior imagen"
          tabIndex={0}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-sky-100 focus:bg-sky-200 border border-sky-200 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 focus:scale-110 outline-none focus:ring-2 focus:ring-sky-400 pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 text-sky-600" />
        </button>
        <button
          type="button"
          onClick={nextGallery}
          aria-label="Siguiente imagen"
          tabIndex={0}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-sky-100 focus:bg-sky-200 border border-sky-200 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 focus:scale-110 outline-none focus:ring-2 focus:ring-sky-400 pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 text-sky-600" />
        </button>
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => { e.stopPropagation(); setCurrentGallery(index); }}
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
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={handleClosePreview}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl bg-white"
            />
            <button
              type="button"
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