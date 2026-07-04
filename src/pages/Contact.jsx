import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50 overflow-hidden">
      
      {/* Background Logo Watermark */}
      <div 
        className="absolute -right-[5%] top-[10%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-[0.04] pointer-events-none z-0 -rotate-12"
        style={{
          backgroundImage: 'url(/logo.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            {t('contact.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white shadow-[0_20px_60px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(14,165,233,0.12)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-blue-50 text-delka-blue flex items-center justify-center rounded-[1.5rem] mb-8 group-hover:bg-delka-blue group-hover:text-white transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Mail size={36} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.email')}</h3>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">{t('contact.email_desc')}</p>
            <a href="mailto:info@delkasavunma.com" className="text-lg font-bold text-delka-navy hover:text-delka-blue transition-colors">
              info@delkasavunma.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white shadow-[0_20px_60px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(14,165,233,0.12)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-blue-50 text-delka-blue flex items-center justify-center rounded-[1.5rem] mb-8 group-hover:bg-delka-blue group-hover:text-white transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <Phone size={36} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.phone')}</h3>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">{t('contact.phone_desc')}</p>
            <a href="tel:+905532897362" className="text-lg font-bold text-delka-navy hover:text-delka-blue transition-colors">
              +90 (553) 289 7362
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white shadow-[0_20px_60px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(14,165,233,0.12)] transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-blue-50 text-delka-blue flex items-center justify-center rounded-[1.5rem] mb-8 group-hover:bg-delka-blue group-hover:text-white transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6">
              <MapPin size={36} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.location')}</h3>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">{t('contact.location_desc')}</p>
            <p className="text-lg font-bold text-delka-navy">
              Kocaeli, Türkiye
            </p>
          </div>

        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-delka-navy rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Neon Glow Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-delka-blue/40 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0c4a86]/80 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('contact.cta_title')}</h2>
              <p className="text-blue-100/80 text-lg">{t('contact.cta_desc')}</p>
            </div>
            <Link to="/talep-formu" className="bg-white text-delka-navy px-10 py-5 rounded-full font-black uppercase tracking-wide flex items-center gap-3 hover:scale-105 transition-transform shrink-0 shadow-xl border border-white/20 hover:bg-slate-50">
              {t('contact.cta_button')} <Send size={20} className="text-delka-blue" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
