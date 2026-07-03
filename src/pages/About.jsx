import React from 'react';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
            HAKKIMIZDA
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Geleceğin Savunma Teknolojilerini Üretiyoruz
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            DELKA Savunma, yenilikçi yaklaşımı ve uzman mühendislik kadrosu ile Türkiye'nin ve dünyanın güvenliği için en ileri teknolojileri geliştirmek üzere kurulmuştur.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.04)]">
            <div className="w-16 h-16 bg-blue-50 text-delka-blue flex items-center justify-center rounded-2xl mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Misyonumuz</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Ulusal ve uluslararası savunma sanayi ihtiyaçlarını, yüksek mühendislik standartlarında, yenilikçi, güvenilir ve sürdürülebilir ürün ve sistem çözümleriyle karşılamak. Tasarımdan üretime her aşamada en yüksek kaliteyi sunmak.
            </p>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.04)]">
            <div className="w-16 h-16 bg-slate-50 text-delka-navy flex items-center justify-center rounded-2xl mb-8">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Vizyonumuz</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Kritik teknolojilerde dışa bağımlılığı azaltan, küresel pazarda rekabet gücü yüksek, teknolojiye yön veren ve sektöründe öncü bir dünya markası olmak. Geleceğin harp ve güvenlik konseptlerini bugünden şekillendirmek.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-delka-navy rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Neden DELKA Savunma?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white/80">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 flex items-center justify-center rounded-full mb-4">
                  <ShieldCheck size={28} className="text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">%100 Güvenlik</h3>
                <p className="text-sm leading-relaxed">Askeri standartlarda (MIL-STD) üretim ve test süreçleri.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 flex items-center justify-center rounded-full mb-4">
                  <Users size={28} className="text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Uzman Kadro</h3>
                <p className="text-sm leading-relaxed">Alanında tecrübeli mühendis ve teknisyen altyapısı.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 flex items-center justify-center rounded-full mb-4">
                  <Zap size={28} className="text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">İnovasyon</h3>
                <p className="text-sm leading-relaxed">Sürekli AR-GE ve yenilikçi patentli teknolojiler.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 flex items-center justify-center rounded-full mb-4">
                  <Target size={28} className="text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Tam İsabet</h3>
                <p className="text-sm leading-relaxed">Müşteri ihtiyaçlarına özel, terzi usulü anahtar teslim çözümler.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
