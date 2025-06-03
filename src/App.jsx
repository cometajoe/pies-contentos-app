// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {

  return (
    <Routes>
      {/* Todas las rutas dentro de 'Layout' compartirán el Navbar y Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
        <Route path="contact-us" element={<ContactPage />} />

        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="get-involved" element={<GetInvolvedPage />} />
        
      
      </Route>
    </Routes>
  );
}

export default App;