
import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Outlet /> {/* This will render the child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;