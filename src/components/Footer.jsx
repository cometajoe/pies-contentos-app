// src/components/Footer.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SocialIcons from './SocialIcons'; // Importa los iconos

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.mission'), href: '#mission' },
    { name: t('navbar.impact'), href: '#impact' },
    { name: t('navbar.gallery'), href: '#gallery' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Contenido principal del footer en una cuadrícula */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Info de la ONG y Contacto */}
          <div className="sm:col-span-2 lg:col-span-1">

            <div className='flex items-center space-x-2'> 
               <img src="logo_white.png" alt="Logo" className="w-10 h-10" /> {/* Cambia la ruta al logo */}
              <a href="#home" className="text-3xl font-bold text-white hover:text-sky-300 transition-colors font-gochi">
              Pies Contentos
            </a>
            </div>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
              {t('footer.shortBlurb')}
            </p>
            <a
              href="mailto:pies.contentos.pc@gmail.com" // Reemplaza con tu email
              className="mt-6 inline-block text-sky-400 hover:text-sky-300 font-semibold text-sm transition-colors"
            >
              {t('footer.contactUs')} &rarr;
            </a>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-slate-300 hover:text-sky-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">{t('footer.followUs')}</h3>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>

          {/* Columna 4: Botón de Donar */}
          <div className="flex items-start">
            <a
              href="#donate"
              className="
                w-full text-center px-6 py-3
                text-base font-semibold text-white 
                bg-sky-600 hover:bg-sky-700 
                rounded-lg shadow-md hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-800
                transition-all duration-200 transform hover:scale-105
              "
            >
              {t('navbar.donate')}
            </a>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;