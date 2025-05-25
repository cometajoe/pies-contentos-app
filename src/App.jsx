// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <Routes>
      {/* Todas las rutas dentro de 'Layout' compartirán el Navbar y Footer */}
      <Route path="/" element={<Layout />}>
        {/* La ruta 'index' es la página por defecto para el path del padre ('/') */}
        <Route index element={<HomePage />} />
        
        {/* Define la nueva ruta para la página de contacto */}
        <Route path="contact-us" element={<ContactPage />} />
        
        {/* Aquí añadirás futuras rutas, por ejemplo: */}
        {/* <Route path="about-us" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;