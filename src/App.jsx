import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SelectionGuide from './pages/SelectionGuide';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import RequestForm from './pages/RequestForm';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
      <div className="min-h-screen bg-delka-bg relative overflow-x-hidden font-sans text-slate-800 flex flex-col">
        {/* Light Background Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none mix-blend-multiply fixed" />
        
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secim-rehberi" element={<SelectionGuide />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/urunler/:id" element={<ProductDetail />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/talep-formu" element={<RequestForm />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/haberler" element={<News />} />
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
