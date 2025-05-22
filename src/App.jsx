// src/App.jsx


import Navbar from './components/Navbar'; // Asegúrate de que el componente Navbar esté en la ruta correcta

import Hero from './sections/Hero'; // Asegúrate de que el componente Hero esté en la ruta correcta

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Usa el nuevo componente Navbar aquí */}
      <main>
        {/* Aquí es donde irán tus secciones */}
        <div className="mx-auto p-4">
         
          <Hero />
          {/* <AboutUs /> */}
          {/* <Mission /> */}
          {/* <Impact /> */}
          {/* <PhotoGallery /> */}
          {/* <ContactForm /> */}
          {/* <SocialMediaLinks /> */}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;