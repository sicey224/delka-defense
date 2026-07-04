import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PenTool, Briefcase, Activity } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            {t('services.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t('services.title')}
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {t('services.desc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-delka-blue rounded-2xl flex items-center justify-center mb-8">
              <PenTool size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('services.s1Title')}</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s1Desc1')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s1Desc2')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s1Desc3')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s1Desc4')}</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-delka-blue rounded-2xl flex items-center justify-center mb-8">
              <Briefcase size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('services.s2Title')}</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s2Desc1')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s2Desc2')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s2Desc3')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s2Desc4')}</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 text-delka-blue rounded-2xl flex items-center justify-center mb-8">
              <Activity size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('services.s3Title')}</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s3Desc1')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s3Desc2')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s3Desc3')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2.5 flex-shrink-0" />
                <span>{t('services.s3Desc4')}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
