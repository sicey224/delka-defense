import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <footer className="bg-delka-navy text-slate-300 relative overflow-hidden z-20 border-t border-slate-800">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link 
              to="/" 
              onDoubleClick={(e) => { e.preventDefault(); navigate('/admin'); }}
              className="flex items-center gap-3 font-black text-2xl tracking-wide text-white mb-6 select-none"
            >
              <img src="/logo.png" alt="DELKA" className="w-10 h-10 object-contain brightness-0 invert" />
              <div>DELKA <span className="text-blue-400">SAVUNMA</span></div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-delka-blue hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{t('footer.solutionsTitle')}</h4>
            <ul className="space-y-3">
              <li><Link to="/urunler/ths-3139" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all">THS-3139</Link></li>
              <li><Link to="/urunler/ths-4139" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all">THS-4139</Link></li>
              <li><Link to="/urunler/ths-6154" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all">THS-6154</Link></li>
              <li><Link to="/urunler" className="text-sm text-delka-blue hover:text-white transition-colors">{t('home.viewAll')} &rarr;</Link></li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{t('footer.corporateTitle')}</h4>
            <ul className="space-y-3">
              <li><a href="/#hakkimizda" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all">{t('nav.about')}</a></li>
              <li><Link to="/secim-rehberi" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all">{t('nav.selectionGuide')}</Link></li>
              <li><Link to="/iletisim" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all">{t('nav.contact')}</Link></li>
              <li><Link to="/talep-formu" className="text-sm text-delka-blue hover:text-white transition-colors">{t('nav.requestForm')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="text-delka-blue shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-delka-blue shrink-0" />
                <span className="text-sm">+90 (553) 289 7362</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-delka-blue shrink-0" />
                <span className="text-sm">info@delkasavunma.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} DELKA Savunma. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Kullanım Koşulları</a>
            <a href="#" className="hover:text-slate-300 transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
