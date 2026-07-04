import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';

export default function RequestForm() {
  const { t } = useLanguage();
  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-center">
          {t('nav.requestForm')}
        </h1>
        <p className="text-slate-500 mb-10 text-center">
          İhtiyacınıza uygun izolatör çözümü için formu doldurarak bize ulaşın. Mühendislerimiz en kısa sürede teknik detaylar ve teklif ile dönüş yapacaktır.
        </p>
        <div className="bg-white rounded-[2rem] p-8 shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ad Soyad</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder="Adınız Soyadınız" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Firma Adı</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder="Firmanızın Adı" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">E-posta Adresi</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder="ornek@firma.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefon Numarası</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder="+90 ___ ___ __ __" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">İhtiyaç Duyulan İzolatör Tipi ve Teknik Detaylar</label>
              <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder="Şok, titreşim değerleri, ağırlık ve kullanım alanı gibi teknik detayları belirtebilirsiniz..."></textarea>
            </div>
            <button type="submit" className="w-full bg-delka-navy text-white font-bold py-4 rounded-xl hover:bg-delka-blue transition-colors flex items-center justify-center gap-3 text-lg">
              Talebi Gönder <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
