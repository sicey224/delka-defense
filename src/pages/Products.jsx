import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

export default function Products() {
  const { t } = useLanguage();
  const { products } = useData();


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

      {/* Background High-Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-semibold mb-6">
            <Link to="/" className="hover:text-delka-blue transition-colors">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span className="text-delka-navy">Çözümlerimiz</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
                {t('products.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                {t('products.title')}
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                {t('products.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-delka-navy">
                <Box size={120} />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-delka-navy transition-colors mb-2">
                  {product.name}
                </h3>
              </div>

              <Link to={`/urunler/${product.id}`} className="mt-8 bg-slate-50 text-delka-navy w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-delka-blue hover:text-white transition-all group/btn border border-slate-100">
                {t('products.detailsBtn')} <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
