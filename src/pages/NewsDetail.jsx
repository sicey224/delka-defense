import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Beaker, Activity, Cpu, ShieldCheck } from 'lucide-react';

const newsIcons = {
  1: Beaker,
  2: Activity,
  3: Cpu,
  4: ShieldCheck,
};

const newsColors = {
  1: 'blue',
  2: 'indigo',
  3: 'emerald',
  4: 'slate',
};

export default function NewsDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const numId = parseInt(id);

  const titleKey = `news.n${numId}Title`;
  const descKey = `news.n${numId}Desc`;
  const detailKey = `news.n${numId}Detail`;

  const title = t(titleKey);
  const desc = t(descKey);
  const detail = t(detailKey, '');

  const Icon = newsIcons[numId];
  const color = newsColors[numId] || 'blue';

  if (!title || numId < 1 || numId > 4) {
    return (
      <div className="pt-36 pb-24 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('productDetail.error', 'İçerik bulunamadı.')}</h1>
        <Link to="/haberler" className="text-delka-blue font-bold hover:underline">
          ← {t('news.backToList', 'Haberlere Dön')}
        </Link>
      </div>
    );
  }

  const bgColorMap = {
    blue: 'bg-blue-50',
    indigo: 'bg-indigo-50',
    emerald: 'bg-emerald-50',
    slate: 'bg-slate-100',
  };

  const textColorMap = {
    blue: 'text-delka-blue',
    indigo: 'text-indigo-500',
    emerald: 'text-emerald-500',
    slate: 'text-slate-500',
  };

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
            {Icon && <Icon size={96} className={`${textColorMap[color]} opacity-60`} />}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>

            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>{desc}</p>
              {detail && detail.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        {/* Other Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {t('news.otherArticles', 'Diğer Yazılar')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].filter(n => n !== numId).slice(0, 2).map(n => {
              const OtherIcon = newsIcons[n];
              const otherColor = newsColors[n];
              return (
                <Link
                  key={n}
                  to={`/haberler/${n}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className={`h-32 ${bgColorMap[otherColor]} relative overflow-hidden flex items-center justify-center`}>
                    {OtherIcon && <OtherIcon size={40} className={`${textColorMap[otherColor]} opacity-60 group-hover:scale-110 transition-transform duration-500`} />}
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-delka-blue transition-colors">
                      {t(`news.n${n}Title`)}
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
