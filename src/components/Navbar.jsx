// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

// Iconos (sin cambios, ya estaban bien)
const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const Navbar = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('navbar.home'), href: '/' }, // Es bueno tener un enlace 'home' explícito también
    { name: t('navbar.about'), href: 'about-us' },
    { name: t('navbar.getInvolved'), href: 'get-involved' },
    { name: t('navbar.ourWork'), href: 'our-work' },   
    { name: t('navbar.events'), href: 'events' },
    { name: t('navbar.contact'), href: 'contact-us' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Estilos para los enlaces de navegación
  const linkStyles = "px-3 py-2 rounded-md text-md  font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 transition-colors duration-150 ease-in-out";
  const mobileLinkStyles = "block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-1 transition-colors duration-150";

  return (
    <nav className="bg-white/95 border-b border-slate-200 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16"> {/* Ajustado a h-16 (4rem) para un estándar de Tailwind */}
          {/* Logo / Nombre de la Organización */}
          <div className="flex-shrink-0">
            <a
              href="/" // Enlaza a la sección de inicio
              className="flex items-center space-x-2 text-2xl font-bold text-sky-700 hover:text-sky-800 transition-colors duration-150"
            >
             
                 <img src="/logo_piescontentos.png" alt="Logo" className="w-10 h-10" /> {/* Cambia la ruta al logo */}
            
              <span className='font-gochi text-3xl'>Pies Contentos</span>
            </a>
          </div>

          {/* Enlaces de Navegación - Escritorio */}
          <div className="hidden md:flex md:ml-6 md:items-center md:space-x-1 lg:space-x-2"> {/* Reducido espacio para más items */}
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={linkStyles}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Botones Derecha: Idioma y Donar - Escritorio */}
          <div className="hidden md:flex md:items-center md:ml-auto md:space-x-3">
            <LanguageSwitcher />
            <a
              href="#donate"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-150 transform hover:scale-105"
            >
              {/* Icono de corazón (opcional) */}
              <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {t('navbar.donate') || 'Donar'}
            </a>
          </div>

          {/* Botón de Menú Móvil e Idioma */}
          <div className="md:hidden flex items-center ml-auto space-x-2">
            <LanguageSwitcher /> {/* Language switcher visible también en móvil antes del botón */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-1 transition-colors duration-150"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-slate-200 z-40" id="mobile-menu">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={mobileLinkStyles}
                onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
              >
                {link.name}
              </a>
            ))}
            
            {/* Botón de donar en móvil */}
            <div className="pt-3 mt-2 border-t border-slate-200">
              <a
                href="#donate"
                className="flex items-center justify-center w-full px-4 py-2.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {t('navbar.donate') || 'Donar'}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;