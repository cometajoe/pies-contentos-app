// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';



const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    // Contenedor principal del switcher, se estiliza para parecer un botón sutil
    <div 
      className="relative inline-flex items-center bg-white hover:bg-sky-50 rounded-md transition-colors duration-150 ease-in-out cursor-pointer group focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-1"
    >
      
      
      <select
        value={language}
        onChange={handleLanguageChange}
        className="
          appearance-none /* Intenta quitar la apariencia nativa */
          bg-transparent   /* Fondo transparente para que tome el del div padre */
          text-slate-700 /* Color de texto principal */
          group-hover:text-sky-800 /* Color de texto al hacer hover en el div */
          text-sm          /* Tamaño de fuente */
          font-medium      /* Peso de la fuente */
          focus:outline-none /* Sin outline de foco (el anillo lo maneja el div) */
          focus:ring-0     /* Sin anillo de foco en el select mismo */
          pl-1.5           /* Espacio entre icono y texto */
          pr-6             /* Espacio para la flecha nativa (si appearance-none no la quita) o para una futura flecha custom */
          py-1.5           /* Padding vertical */
          cursor-pointer   /* Cursor de puntero */
          rounded-md       /* Bordes redondeados (aunque el div padre ya los tiene) */
          transition-colors duration-150 ease-in-out
        "
        aria-label="Seleccionar idioma" // Para accesibilidad
      >
        {/* Las opciones del select. Es difícil estilizar las options consistentemente cross-browser */}
        <option value="es" className="font-medium text-slate-800 bg-white">ES</option>
        <option value="en" className="font-medium text-slate-800 bg-white">EN</option>
      </select>
      
      {/* Flecha desplegable nativa (si appearance-none no la elimina) */}
      {/* Para una flecha custom, deberías ocultar la nativa más agresivamente y añadir un SVG aquí */}
      {/* Ejemplo de flecha custom (necesitaría ocultar la nativa):
      <svg className="w-4 h-4 text-slate-500 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      */}
    </div>
  );
};

export default LanguageSwitcher;