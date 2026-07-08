import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { ArrowLeft, Beaker, Activity, Cpu, ShieldCheck, Video, Newspaper } from 'lucide-react';

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

export default function NewsDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const { news } = useData();

  const item = news.find((n) => n.id.toString() === id.toString());

  if (!item) {
    return (
      <div className="pt-36 pb-24 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('productDetail.error', 'İçerik bulunamadı.')}</h1>
        <Link to="/haberler" className="text-delka-blue font-bold hover:underline">
          ← {t('news.backToList', 'Haberlere Dön')}
        </Link>
      </div>
    );
  }

  const title = language === 'tr' ? item.titleTR : item.titleEN;
  const desc = language === 'tr' ? item.descTR : item.descEN;
  const detail = language === 'tr' ? item.detailTR : item.detailEN;

  const Icon = iconMap[item.iconName] || Newspaper;
  const color = item.color || 'blue';

  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Back Button */}
        <Link
          to="/haberler"
          className="inline-flex items-center gap-2 text-delka-blue font-bold mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t('news.backToList', 'Haberlere Dön')}
        </Link>

        {/* Article Card */}
        <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          {/* Header Banner */}
          <div className={`h-56 md:h-72 ${bgColorMap[color]} relative overflow-hidden flex items-center justify-center`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              Icon && <Icon size={96} className={`${textColorMap[color]} opacity-60`} />
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>

            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p className="font-medium text-slate-800">{desc}</p>
              {detail && detail.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Video Player for Wirerope Test (id 5 is default Wirerope Test) */}
            {item.id === 5 && (
              <div className="mt-10">
                <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-slate-100">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full aspect-video bg-black"
                  >
                    <source src="/delka-tanitim.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Other Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {t('news.otherArticles', 'Diğer Yazılar')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.filter(n => n.id.toString() !== id.toString()).slice(0, 2).map(n => {
              const OtherIcon = iconMap[n.iconName] || Newspaper;
              const otherColor = n.color || 'blue';
              const otherTitle = language === 'tr' ? n.titleTR : n.titleEN;
              return (
                <Link
                  key={n.id}
                  to={`/haberler/${n.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className={`h-32 ${bgColorMap[otherColor]} relative overflow-hidden flex items-center justify-center`}>
                    {n.imageUrl ? (
                      <img 
                        src={n.imageUrl} 
                        alt={otherTitle} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      OtherIcon && <OtherIcon size={40} className={`${textColorMap[otherColor]} opacity-60 group-hover:scale-110 transition-transform duration-500`} />
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-delka-blue transition-colors">
                      {otherTitle}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

