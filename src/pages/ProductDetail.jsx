import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Box, Download, Image as ImageIcon, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { t } = useLanguage();

  const productData = {
    "ths-3139": { name: "THS-3139", imgUrl: "/assets/catalog/ths-3139-urun.png", tableUrl: "/assets/catalog/ths-3139-tablo.png" },
    "ths-4139": { name: "THS-4139", imgUrl: "/assets/catalog/ths-4139-urun.png", tableUrl: "/assets/catalog/ths-4139-tablo.png" },
    "ths-6154": { name: "THS-6154", imgUrl: "/assets/catalog/ths-6154-urun.png", tableUrl: "/assets/catalog/ths-6154-tablo.png" },
    "ths-8154": { name: "THS-8154", imgUrl: "/assets/catalog/ths-8154-urun.png", tableUrl: "/assets/catalog/ths-8154-tablo.png" },
    "ths-10224": { name: "THS-10224", imgUrl: "/assets/catalog/ths-10224-urun.png", tableUrl: "/assets/catalog/ths-10224-tablo.png" },
    "ths-12224": { name: "THS-12224", imgUrl: "/assets/catalog/ths-12224-urun.png", tableUrl: "/assets/catalog/ths-12224-tablo.png" }
  };

  const product = productData[id];

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">{t('productDetail.error')}</h1>
        <Link to="/" className="text-delka-blue font-bold hover:underline">{t('productDetail.returnHome')}</Link>
      </div>
    );
  }

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
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Link & Header */}
        <div className="mb-10">
          <Link to="/urunler" className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-delka-blue transition-colors mb-6 text-sm">
            <ArrowLeft size={16} /> {t('productDetail.backBtn')}
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-delka-blue flex items-center justify-center rounded-2xl shrink-0 shadow-inner">
                <Box size={40} />
              </div>
              <div>
                <span className="text-delka-blue font-bold uppercase tracking-widest text-xs mb-2 block">
                  {t('productDetail.label')}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-delka-navy tracking-tight">
                  {product.name}
                </h1>
              </div>
            </div>
            
            <a href={product.tableUrl} download className="px-6 py-3 bg-slate-100 text-delka-navy font-bold rounded-xl transition-all hover:bg-slate-200 flex items-center gap-2 shrink-0 border border-slate-200/50">
              <Download size={18} /> {t('productDetail.downloadTable')}
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex flex-col gap-8">
          
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100">
            <div className="bg-delka-navy px-8 py-5 flex items-center gap-3 text-white border-b border-slate-800">
              <ImageIcon size={20} className="text-blue-300" />
              <h2 className="font-bold text-lg tracking-wide">{t('productDetail.technicalCatalog')}</h2>
            </div>
            <div className="p-8 md:p-12 bg-white flex justify-center items-center min-h-[400px]">
              <img src={product.imgUrl} alt={`${product.name} Görseli`} className="max-w-full h-auto drop-shadow-sm rounded-xl mix-blend-multiply" />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100">
            <div className="bg-gradient-to-r from-delka-navy to-[#0c4a86] px-8 py-5 flex items-center gap-3 text-white border-b border-slate-800">
              <ImageIcon size={20} className="text-blue-300" />
              <h2 className="font-bold text-lg tracking-wide">{t('productDetail.loadTable')}</h2>
            </div>
            <div className="p-8 md:p-12 bg-slate-50 flex justify-center items-center border-t border-white shadow-inner min-h-[400px]">
              <img src={product.tableUrl} alt={`${product.name} Tablo`} className="max-w-full h-auto drop-shadow-sm rounded-xl mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
