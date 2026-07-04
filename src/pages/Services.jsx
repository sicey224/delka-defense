import React from 'react';
import { Settings, Wrench, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            {t('nav.services')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Müşterilerimize sunduğumuz yüksek mühendislik standartlarındaki çözümler ve hizmetler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] transition-all">
            <div className="w-16 h-16 bg-blue-50 text-delka-blue flex items-center justify-center rounded-2xl mb-8">
              <Settings size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mühendislik Tasarımı</h3>
            <p className="text-slate-600 mb-6">
              Özel gereksinimlerinize uygun, yenilikçi ve yüksek performanslı sistem tasarımları gerçekleştiriyoruz.
            </p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] transition-all">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-500 flex items-center justify-center rounded-2xl mb-8">
              <Wrench size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bakım ve Onarım</h3>
            <p className="text-slate-600 mb-6">
              Sistemlerinizin her zaman en yüksek performansta çalışması için periyodik bakım ve hızlı onarım hizmetleri sunuyoruz.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] transition-all">
            <div className="w-16 h-16 bg-slate-50 text-delka-navy flex items-center justify-center rounded-2xl mb-8">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Danışmanlık ve Test</h3>
            <p className="text-slate-600 mb-6">
              Askeri standartlarda test süreçleri ve saha optimizasyonu için profesyonel danışmanlık sağlıyoruz.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
