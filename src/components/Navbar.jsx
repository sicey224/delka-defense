import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-2 pb-2' : 'pt-6 pb-2'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-500 rounded-full border mx-4 xl:mx-auto ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgb(0,0,0,0.08)] border-black/15' : 'bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-black/15 hover:bg-white/80 hover:border-black/20'}`}>
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo */}
          <Link 
            to="/" 
            onDoubleClick={(e) => { e.preventDefault(); navigate('/admin'); }}
            className="flex items-center gap-3 font-black text-2xl tracking-wide text-delka-navy z-50 select-none"
          >
            <img src="/logo.png" alt="DELKA" className="w-12 h-12 object-contain" />
            <div>DELKA <span className="text-delka-blue">SAVUNMA</span></div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[13px] font-bold text-slate-600 tracking-wide">
            <Link to="/" className={`${isHome && location.hash !== '#hakkimizda' ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.home')}
            </Link>
            <Link to="/#hakkimizda" className={`${location.hash === '#hakkimizda' ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.about')}
            </Link>
            <Link to="/hizmetlerimiz" className={`${location.pathname === '/hizmetlerimiz' ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.services')}
            </Link>
            <Link to="/urunler" className={`${location.pathname.includes('/urunler') ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.solutions')}
            </Link>
            <Link to="/haberler" className={`${location.pathname === '/haberler' ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.news')}
            </Link>
            <Link to="/secim-rehberi" className={`${location.pathname.includes('/secim-rehberi') ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.selectionGuide')}
            </Link>
            <Link to="/iletisim" className={`${location.pathname === '/iletisim' ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.contact')}
            </Link>
            <Link to="/talep-formu" className={`${location.pathname === '/talep-formu' ? 'text-delka-navy border-b-2 border-delka-blue' : 'hover:text-delka-blue transition-colors'} pb-1`}>
              {t('nav.requestForm')}
            </Link>
          </nav>
          
          <div className="hidden lg:flex items-center text-xs font-bold bg-slate-100/80 p-1 rounded-full shadow-inner border border-slate-200/60">
            <button onClick={() => toggleLanguage('tr')} className={`px-2.5 py-1 rounded-full transition-all duration-300 ${language === 'tr' ? 'bg-white text-delka-navy shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}`}>TR</button>
            <button onClick={() => toggleLanguage('en')} className={`px-2.5 py-1 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-white text-delka-navy shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}`}>EN</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 text-slate-800 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-6 text-xl font-black text-slate-800 tracking-wide">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`${isHome && location.hash !== '#hakkimizda' ? 'text-delka-blue' : ''}`}>{t('nav.home')}</Link>
            <Link to="/#hakkimizda" onClick={() => setMobileMenuOpen(false)} className={`${location.hash === '#hakkimizda' ? 'text-delka-blue' : ''}`}>{t('nav.about')}</Link>
            <Link to="/hizmetlerimiz" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/hizmetlerimiz' ? 'text-delka-blue' : ''}`}>{t('nav.services')}</Link>
            <Link to="/urunler" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname.includes('/urunler') ? 'text-delka-blue' : ''}`}>{t('nav.solutions')}</Link>
            <Link to="/haberler" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/haberler' ? 'text-delka-blue' : ''}`}>{t('nav.news')}</Link>
            <Link to="/secim-rehberi" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname.includes('/secim-rehberi') ? 'text-delka-blue' : ''}`}>{t('nav.selectionGuide')}</Link>
            <Link to="/iletisim" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/iletisim' ? 'text-delka-blue' : ''}`}>{t('nav.contact')}</Link>
            <Link to="/talep-formu" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/talep-formu' ? 'text-delka-blue' : ''}`}>{t('nav.requestForm')}</Link>
        </nav>
        <div className="mt-auto pb-10 flex">
          <div className="text-sm font-bold bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 inline-flex items-center shadow-inner">
            <button onClick={() => { toggleLanguage('tr'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-full transition-all duration-300 ${language === 'tr' ? 'bg-white text-delka-navy shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}`}>TR</button>
            <button onClick={() => { toggleLanguage('en'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-white text-delka-navy shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}`}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}
