import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SelectionGuide from './pages/SelectionGuide';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <div className="min-h-screen bg-delka-bg relative overflow-x-hidden font-sans text-slate-800 flex flex-col">
        {/* Light Background Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none mix-blend-multiply fixed" />
        
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secim-rehberi" element={<SelectionGuide />} />
            <Route path="/cozumlerimiz" element={<Products />} />
            <Route path="/cozumlerimiz/:id" element={<ProductDetail />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
