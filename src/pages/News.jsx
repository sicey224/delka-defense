import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Beaker, ShieldCheck, FileText, Cpu, ArrowRight, Activity } from 'lucide-react';

export default function News() {
  const { t } = useLanguage();

  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            {t('news.badge', 'BİLGİ BANKASI')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t('news.title', 'Testler, Ar-Ge ve Belgeler')}
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {t('news.desc', 'Geliştirdiğimiz çözümlerin test süreçleri, ar-ge hedefleri ve kalite belgelerimiz hakkında güncel bilgiler.')}
          </p>
        </div>

        {/* Knowledge Base Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Item 1 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="h-48 bg-blue-50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              <Beaker size={64} className="text-delka-blue opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('news.n1Title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {t('news.n1Desc')}
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="h-48 bg-indigo-50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              <Activity size={64} className="text-indigo-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('news.n2Title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {t('news.n2Desc')}
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="h-48 bg-emerald-50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              <Cpu size={64} className="text-emerald-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('news.n3Title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {t('news.n3Desc')}
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              <ShieldCheck size={64} className="text-slate-500 opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('news.n4Title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {t('news.n4Desc')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
