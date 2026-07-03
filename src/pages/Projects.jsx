import React from 'react';
import { Camera, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('projects.project1Title'),
      category: 'Denizcilik',
      image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
      desc: t('projects.project1Desc')
    },
    {
      id: 2,
      title: t('projects.project2Title'),
      category: 'Hava Savunma',
      image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=800&auto=format&fit=crop',
      desc: t('projects.project2Desc')
    },
    {
      id: 3,
      title: t('projects.project3Title'),
      category: 'Havacılık',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop',
      desc: t('projects.project3Desc')
    },
    {
      id: 4,
      title: t('projects.project4Title'),
      category: 'Silah Sistemleri',
      image: 'https://images.unsplash.com/photo-1584282110757-04746f3dc861?q=80&w=800&auto=format&fit=crop',
      desc: t('projects.project4Desc')
    }
  ];

  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50 overflow-hidden">
      {/* Background Logo Watermark */}
      <div 
        className="absolute -left-[5%] top-[5%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0 rotate-12"
        style={{
          backgroundImage: 'url(/logo.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            {t('projects.badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {t('projects.desc')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 relative cursor-pointer block">
              
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-delka-navy shadow-sm flex items-center gap-2">
                  <Camera size={14} className="text-delka-blue" /> {project.category}
                </div>
                <div className="absolute inset-0 bg-delka-navy/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <button className="bg-white text-delka-navy px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-delka-blue hover:text-white transition-colors">
                    {t('projects.viewDetails')} <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-10 relative bg-white z-20 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-delka-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="text-delka-navy font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:text-delka-blue transition-colors">
                  {t('projects.viewDetails')} <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
