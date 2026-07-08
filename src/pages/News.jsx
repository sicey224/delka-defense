import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Beaker, ShieldCheck, Cpu, Activity, ArrowRight, Video, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Beaker,
  Activity,
  Cpu,
  ShieldCheck,
  Video,
  Newspaper
};

const bgColorMap = {
  blue: 'bg-blue-50',
  indigo: 'bg-indigo-50',
  emerald: 'bg-emerald-50',
  slate: 'bg-slate-100',
  amber: 'bg-amber-50',
};

const textColorMap = {
  blue: 'text-delka-blue',
  indigo: 'text-indigo-500',
  emerald: 'text-emerald-500',
  slate: 'text-slate-500',
  amber: 'text-amber-500',
};

export default function News() {
  const { t, language } = useLanguage();
  const { news } = useData();

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
          {news.map((item) => {
            const Icon = iconMap[item.iconName] || Newspaper;
            const color = item.color || 'blue';
            const title = language === 'tr' ? item.titleTR : item.titleEN;
            const desc = language === 'tr' ? item.descTR : item.descEN;

            return (
              <Link
                key={item.id}
                to={`/haberler/${item.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className={`h-48 ${bgColorMap[color]} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <Icon size={64} className={`${textColorMap[color]} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-delka-blue transition-colors">
                    {title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-delka-blue font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                    {t('news.readMore', 'Devamını Oku')} <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

