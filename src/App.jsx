// src/App.jsx


import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Asegúrate de que el componente Navbar esté en la ruta correcta

import Hero from './sections/Hero'; // Asegúrate de que el componente Hero esté en la ruta correcta
import Mission from './sections/Mission'; // Asegúrate de que el componente Mission esté en la ruta correcta
import Partners from './sections/Partners';
import AboutUs from './sections/AboutUs'; // Asegúrate de que el componente AboutUs esté en la ruta correcta
import PhotoGallerySection from './sections/PhotoGallery';
function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Usa el nuevo componente Navbar aquí */}
      <main>
        {/* Aquí es donde irán tus secciones */}
        <div className="mx-auto p-4">
         
          <Hero />
          <Mission /> 
           <Partners />
          <AboutUs />
          <PhotoGallerySection />
          {/* <Mission /> */}
          {/* <Impact /> */}
          {/* <PhotoGallery /> */}
          {/* <ContactForm /> */}
          {/* <SocialMediaLinks /> */}
          <Footer />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;