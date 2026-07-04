import React from 'react';
import { ArrowRight, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function News() {
  const { t } = useLanguage();
  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            {t('nav.news')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Haberler ve Gelişmeler
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Şirketimizden en son haberler, projelerimizdeki gelişmeler ve sektörel duyurular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] transition-all group">
            <div className="h-48 bg-slate-200 w-full relative overflow-hidden flex items-center justify-center">
              <Newspaper size={48} className="text-slate-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-8">
              <span className="text-sm font-bold text-delka-blue mb-2 block">10 Temmuz 2026</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Yeni Nesil İzolatör Sistemlerimizin Testleri Tamamlandı</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Denizcilik ve savunma sanayi için özel olarak geliştirdiğimiz yeni nesil şok izolatörlerimizin zorlu askeri standartlardaki testleri başarıyla sonuçlandı.
              </p>
              <button className="text-delka-navy font-bold flex items-center gap-2 group-hover:text-delka-blue transition-colors">
                Devamını Oku <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] transition-all group">
            <div className="h-48 bg-slate-200 w-full relative overflow-hidden flex items-center justify-center">
              <Newspaper size={48} className="text-slate-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-8">
              <span className="text-sm font-bold text-delka-blue mb-2 block">28 Haziran 2026</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Uluslararası Savunma Sanayii Fuarında Büyük İlgi</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Bu yıl katıldığımız uluslararası savunma sanayii fuarında, otonom sistemlerimiz ve yapay zeka destekli çözümlerimiz global sektör temsilcilerinden yoğun ilgi gördü.
              </p>
              <button className="text-delka-navy font-bold flex items-center gap-2 group-hover:text-delka-blue transition-colors">
                Devamını Oku <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] transition-all group">
            <div className="h-48 bg-slate-200 w-full relative overflow-hidden flex items-center justify-center">
              <Newspaper size={48} className="text-slate-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-8">
              <span className="text-sm font-bold text-delka-blue mb-2 block">15 Haziran 2026</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ar-Ge Merkezimiz Yeni Yeteneklerle Büyüyor</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Sürekli inovasyon vizyonumuz doğrultusunda Ar-Ge merkezimize yeni uzman mühendisler katarak tasarım ve üretim kapasitemizi artırmaya devam ediyoruz.
              </p>
              <button className="text-delka-navy font-bold flex items-center gap-2 group-hover:text-delka-blue transition-colors">
                Devamını Oku <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
