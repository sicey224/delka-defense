import React, { useState } from 'react';
import { FileText, ArrowLeft, Download, X, ChevronRight, CheckCircle2, Calendar, Hash, Info, Activity, Layers, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function SelectionGuide() {
  const { t } = useLanguage();
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const steps = [
    {
      title: t('sg.step1Title', 'Yük ve Ağırlık Dağılımının Belirlenmesi'),
      content: [
        t('sg.step1_1', 'Doğru izolatörü seçmenin ilk adımı, her bir izolatörün üzerine düşen statik yükü hesaplamaktır.'),
        t('sg.step1_2', 'Toplam Ağırlık (W): Ekipmanın toplam ağırlığı belirlenir.'),
        t('sg.step1_3', 'Ağırlık Merkezi (CG): Ağırlık merkezinin geometrik merkeze olan uzaklığı analiz edilir. Eğer ağırlık merkezi simetrik ise, toplam ağırlık montaj noktası sayısına (N) bölünür.'),
        t('sg.step1_4', 'İzolatör Başına Düşen Yük: P = W / N formülü ile hesaplanır.')
      ]
    },
    {
      title: t('sg.step2Title', 'Montaj Oryantasyonunun (Yönelim) Seçilmesi'),
      content: [
        t('sg.step2_1', 'Tel halatlı izolatörlerin yay katsayısı (stiffness), yüke maruz kaldıkları eksene göre değişiklik gösterir.'),
        t('sg.step2_2', 'Basma (Compression): En yüksek yük taşıma kapasitesini sunar.'),
        t('sg.step2_3', 'Kayma (Shear) ve Yuvarlanma (Roll): Halatların yatay eksende esnemesidir. Titreşim izolasyon performansı çok yüksektir.'),
        t('sg.step2_4', '45° Açılı Montaj: Hem dikey hem de yatay yüklerin dengeli sönümlenmesi gereken durumlarda tercih edilir.')
      ]
    },
    {
      title: t('sg.step3Title', 'Titreşim İzolasyonu Analizi'),
      content: [
        t('sg.step3_1', 'Sistemin çalışma koşullarındaki titreşimleri izole etmek için doğru doğal frekansa (fn) sahip ürün seçilmelidir.'),
        t('sg.step3_2', 'Zorlayıcı Frekans (fd): Cihazın veya platformun ürettiği ana titreşim frekansı (Hz) belirlenir.'),
        t('sg.step3_3', "İzolasyon Kriteri: Etkili bir izolasyon için izolatörlü sistemin doğal frekansı, zorlayıcı frekansın en fazla %70'i olmalıdır (fn ≤ fd / 3)."),
        t('sg.step3_4', 'Seçim: Yük/rijitlik eğrilerinden uygun halat çapı ve sarım sayısına sahip izolatör belirlenir.')
      ]
    },
    {
      title: t('sg.step4Title', 'Şok İzolasyonu ve Deplasman Kontrolü'),
      content: [
        t('sg.step4_1', 'Askeri standartlardaki şok girişlerini sönümlemek için izolatörün yeterli esneme payına sahip olması gerekir.'),
        t('sg.step4_2', 'Giriş Şoku ve Kırılganlık Seviyesi: Sisteme etki edecek şok (Örn: 40G) ve cihazın dayanabileceği maksimum şok (Örn: 15G) belirlenir.'),
        t('sg.step4_3', "Dinamik Defleksiyon: Cihazın 15G'de kalması için izolatörün ne kadar esnemesi gerektiği hesaplanır."),
        t('sg.step4_4', 'Çarpışma Kontrolü (Sway Space): İzin verilen maksimum deplasman, cihazın etrafındaki boşluktan fazla olmamalıdır.')
      ]
    },
    {
      title: t('sg.step5Title', 'Model, Boyut ve Malzeme Seçimi'),
      content: [
        t('sg.step5_1', 'Statik ve dinamik analizler sonucunda elde edilen verilere göre uygun ürün ailesi seçilir.'),
        t('sg.step5_2', 'Halat Çapı ve Seri Seçimi: Yüksek şok sönümleme gerektiren durumlarda kalın halatlı serilere yönelinmelidir.'),
        t('sg.step5_3', 'Çevresel Koşullar: Tuzlu su veya korozyon maruziyeti olan projelerde paslanmaz çelik (AISI 316 / 304) tercih edilmelidir.')
      ]
    },
    {
      title: t('sg.step6Title', 'Doğrulama ve Test'),
      content: [
        t('sg.step6_1', 'Seçilen izolatörün teorik değerleri (yay katsayısı, sönümleme oranı), şok ve titreşim profilleri kullanılarak bilgisayar destekli mühendislik yazılımları ile simüle edilmeli ve seçim doğrulanmalıdır.')
      ]
    }
  ];

  return (
    <div className="pt-36 pb-24 relative z-10 min-h-screen bg-slate-50/50 overflow-hidden">
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
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 z-10 mt-6">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-delka-navy">
          <div className="absolute inset-0 bg-gradient-to-r from-delka-navy via-[#0c4a86] to-[#0862b8] opacity-90" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-delka-blue rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-[60px] opacity-20" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-blue-200 text-sm font-semibold mb-8 uppercase tracking-widest bg-white/10 w-max px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                <Link to="/" className="hover:text-white transition-colors">{t('sg.home', 'Ana Sayfa')}</Link>
                <ChevronRight size={14} />
                <span className="text-white">{t('sg.engineeringGuide', 'Mühendislik Rehberi')}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg mb-4">
                {t('sg.mainTitle1', 'Tel Halatlı İzolatör')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{t('sg.mainTitle2', 'Seçim Rehberi')}</span>
              </h1>
              <p className="text-blue-100/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                {t('sg.mainDesc', 'Askeri ve endüstriyel sistemlerin şok ve titreşim yüklerini sönümlemek için kullanılan izolatörlerin hassas mühendislik analiz ve seçim adımları.')}
              </p>
            </div>
            
            <button 
              onClick={() => setIsPdfOpen(true)}
              className="shrink-0 px-8 py-4 bg-white text-delka-navy font-extrabold rounded-2xl transition-all hover:bg-slate-50 shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center gap-3 border border-transparent hover:border-blue-200 group"
            >
              <FileText size={22} className="text-delka-blue group-hover:scale-110 transition-transform" /> 
              {t('sg.openPdf', 'ORİJİNAL PDF\'İ AÇ')}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-32 glass bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-delka-blue">
                  <FileText size={20} />
                </div>
                <h3 className="font-extrabold text-slate-800 uppercase tracking-wider text-sm">{t('sg.toc', 'İçindekiler')}</h3>
              </div>
              <ul className="space-y-1">
                {[
                  t('sg.toc1', 'Meta Veriler'), 
                  t('sg.toc2', 'Seçim Adımları'), 
                  t('sg.toc3', 'Sistem Verileri Tablosu'), 
                  t('sg.toc4', 'Titreşim Boyutlandırma'), 
                  t('sg.toc5', 'Şok Boyutlandırma'), 
                  t('sg.toc6', 'Doğrulama ve Sonuç')
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href={`#bolum-${idx}`} className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-delka-blue hover:bg-blue-50/50 transition-all">
                      <span className="text-slate-300 font-bold font-mono group-hover:text-delka-blue transition-colors">0{idx + 1}</span> 
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-3/4 space-y-10">
            <div id="bolum-0" className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-delka-blue group-hover:bg-blue-50 transition-colors">
                  <Hash size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{t('sg.docNo', 'Doküman No')}</div>
                  <div className="text-slate-800 font-extrabold text-lg">DELKA-GD-001</div>
                </div>
              </div>
              
              <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-delka-blue group-hover:bg-blue-50 transition-colors">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{t('sg.pubDate', 'Yayın Tarihi')}</div>
                  <div className="text-slate-800 font-extrabold text-lg">03.05.2026</div>
                </div>
              </div>
              
              <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-delka-blue group-hover:bg-blue-50 transition-colors">
                  <Info size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{t('sg.subject', 'Konu Kapsamı')}</div>
                  <div className="text-slate-800 font-extrabold text-lg leading-tight">{t('sg.subjectVal', 'Şok ve Titreşim İzolasyonu')}</div>
                </div>
              </div>
            </div>

            <div id="bolum-1">
              <div className="flex items-center gap-4 mb-8 pl-2">
                <div className="w-1.5 h-8 bg-delka-blue rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{t('sg.stepsHeading', 'Mühendislik Seçim Adımları')}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(14,165,233,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                    <div className="absolute -bottom-6 -right-4 text-9xl font-black text-slate-50 opacity-50 select-none group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                      {idx + 1}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50/80 flex items-center justify-center shadow-inner border border-blue-100/50">
                          <span className="text-delka-blue font-black text-xl">{idx + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      <ul className="space-y-3 mt-4">
                        {step.content.map((li, i) => (
                          <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-delka-blue mt-2 shrink-0"></div>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 pt-6">
              
              <div id="bolum-2" className="bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.04)]">
                <div className="bg-gradient-to-r from-delka-navy to-[#0a3a6a] p-6 flex items-center justify-between">
                  <h3 className="font-extrabold text-white tracking-wide flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-200">I</span>
                    {t('sg.table1', 'SİSTEM VERİLERİ (SYSTEM DATA)')}
                  </h3>
                </div>
                <div className="overflow-x-auto p-2">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-xs uppercase tracking-widest border-b-2 border-slate-100">
                        <th className="p-5 font-bold">{t('sg.param', 'Parametre / Açıklama')}</th>
                        <th className="p-5 font-bold">{t('sg.formula', 'Hesaplama Formülü')}</th>
                        <th className="p-5 font-bold">{t('sg.metric', 'Metrik Değer')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-sm font-medium">
                      <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {t('sg.t1_1', 'Toplam Desteklenen Yük (WT)')}</td>
                        <td className="p-5 font-mono text-slate-400 bg-slate-50/30">WT = kg × 9.81</td>
                        <td className="p-5 font-mono font-bold text-slate-800">WT = ...... N</td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {t('sg.t1_2', 'İzolatör Sayısı (n)')}</td>
                        <td className="p-5 font-mono text-slate-400 bg-slate-50/30">-</td>
                        <td className="p-5 font-mono font-bold text-slate-800">n = ......</td>
                      </tr>
                      <tr className="bg-blue-50/30 hover:bg-blue-50/60 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-delka-blue shadow-[0_0_10px_rgb(14,165,233)]"></div> {t('sg.t1_3', 'İzolatör Başına Statik Yük (W)')}</td>
                        <td className="p-5 font-mono text-slate-500">W = WT / n</td>
                        <td className="p-5 font-mono font-black text-delka-navy text-base">W = ...... N</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="bolum-3" className="bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.04)]">
                <div className="bg-gradient-to-r from-[#0c4a86] to-[#0862b8] p-6 flex items-center justify-between">
                  <h3 className="font-extrabold text-white tracking-wide flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-200">II</span>
                    {t('sg.table2', 'TİTREŞİM BOYUTLANDIRMA (VIBRATION SIZING)')}
                  </h3>
                </div>
                <div className="overflow-x-auto p-2">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-xs uppercase tracking-widest border-b-2 border-slate-100">
                        <th className="p-5 font-bold">{t('sg.param', 'Parametre / Açıklama')}</th>
                        <th className="p-5 font-bold">{t('sg.formula', 'Hesaplama Formülü')}</th>
                        <th className="p-5 font-bold">{t('sg.metric', 'Metrik Değer')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-sm font-medium">
                      <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {t('sg.t2_1', 'Girdi Uyarma Frekansı (fi)')}</td>
                        <td className="p-5 font-mono text-slate-400 bg-slate-50/30">fi = Hz</td>
                        <td className="p-5 font-mono font-bold text-slate-800">fi = ...... Hz</td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {t('sg.t2_2', 'Sistem Doğal Frekansı (fn)')}</td>
                        <td className="p-5 font-mono text-slate-400 bg-slate-50/30">fn = fi / 3.0</td>
                        <td className="p-5 font-mono font-bold text-slate-800">fn = ...... Hz</td>
                      </tr>
                      <tr className="bg-blue-50/30 hover:bg-blue-50/60 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-delka-blue shadow-[0_0_10px_rgb(14,165,233)]"></div> {t('sg.t2_3', 'Max. İzolatör Titreşim Rijitliği (Kv)')}</td>
                        <td className="p-5 font-mono text-slate-500">Kv = [W(2πfn)²] / g</td>
                        <td className="p-5 font-mono font-black text-delka-blue text-base">Kv = ...... N/m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="bolum-4" className="bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.04)]">
                <div className="bg-gradient-to-r from-[#0862b8] to-[#0ea5e9] p-6 flex items-center justify-between">
                  <h3 className="font-extrabold text-white tracking-wide flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-100">III</span>
                    {t('sg.table3', 'ŞOK BOYUTLANDIRMA (SHOCK SIZING)')}
                  </h3>
                </div>
                <div className="overflow-x-auto p-2">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 text-xs uppercase tracking-widest border-b-2 border-slate-100">
                        <th className="p-5 font-bold">{t('sg.param', 'Parametre / Açıklama')}</th>
                        <th className="p-5 font-bold">{t('sg.formula', 'Hesaplama Formülü')}</th>
                        <th className="p-5 font-bold">{t('sg.metric', 'Metrik Değer')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-sm font-medium">
                      <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {t('sg.t3_1', 'Max. İletilen İvme Sınırı (AT)')}</td>
                        <td className="p-5 font-mono text-slate-400 bg-slate-50/30">-</td>
                        <td className="p-5 font-mono font-bold text-slate-800">AT = ...... G</td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {t('sg.t3_2', 'Şok Girdi Hızı (V)')}</td>
                        <td className="p-5 font-mono text-slate-400 bg-slate-50/30">V = √(2gh)</td>
                        <td className="p-5 font-mono font-bold text-slate-800">V = ...... m/s</td>
                      </tr>
                      <tr className="bg-blue-50/30 hover:bg-blue-50/60 transition-colors">
                        <td className="p-5 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-delka-blue shadow-[0_0_10px_rgb(14,165,233)]"></div> {t('sg.t3_3', 'Min. İzolatör Defleksiyonu (Dmin)')}</td>
                        <td className="p-5 font-mono text-slate-500">Dmin = V² / [g(AT)]</td>
                        <td className="p-5 font-mono font-black text-delka-navy text-base">Dmin = ...... m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="bolum-5" className="relative bg-slate-900 text-white p-10 rounded-[2rem] shadow-2xl mt-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-delka-blue rounded-full mix-blend-screen filter blur-[80px] opacity-20 pointer-events-none" />
                <h3 className="font-extrabold text-2xl mb-4 text-white flex items-center gap-3">
                  <CheckCircle2 className="text-delka-blue" size={28} /> {t('sg.validation', 'Doğrulama ve Sonuç')}
                </h3>
                <p className="text-slate-300 leading-relaxed font-medium text-lg max-w-3xl">
                  {t('sg.valText1', 'Hesaplanan W değeri maksimum statik yükten az olmalı ve Kv değeri izolatörün rijitliğinden az olmalıdır.')}
                  <br /><br />
                  {t('sg.valText2', 'Eğer hesaplanan defleksiyon (Dactual) değeri, seçilen izolatörün fiziksel maksimum deplasman sınırını aşıyorsa, katalogdan daha yüksek deplasman kapasitesine sahip başka bir seri seçilmelidir.')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-8 border-t border-slate-700/50">
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 block">{t('sg.dept', 'Onaylayan Departman')}</span>
                    <strong className="text-white text-lg">{t('sg.deptVal', 'Delka Mühendislik Kurulu')}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 block">{t('sg.validity', 'Geçerlilik')}</span>
                    <strong className="text-white text-lg">{t('sg.validityVal', 'Tüm Askeri Standartlar (MIL-STD)')}</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {isPdfOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setIsPdfOpen(false)}></div>
          <div className="relative bg-white w-full max-w-6xl h-[90vh] rounded-[2rem] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.7)] flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center shrink-0 border-b border-slate-800">
              <h3 className="font-bold flex items-center gap-4 text-lg">
                <FileText className="text-delka-blue" size={24} /> 
                {t('sg.pdfTitle', 'İzolatör Seçim ve Tasarım Rehberi.pdf')}
              </h3>
              <button 
                onClick={() => setIsPdfOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 bg-slate-100 flex items-center justify-center">
              <iframe 
                src="/assets/catalog/secim-rehberi.pdf" 
                className="w-full h-full border-0"
                title="PDF Görüntüleyici"
              />
            </div>
            <div className="bg-white px-8 py-4 flex justify-between items-center shrink-0 border-t border-slate-200">
              <p className="text-slate-500 text-sm font-medium">{t('sg.pdfFooter', 'DELKA Savunma Sistemleri A.Ş.')}</p>
              <a 
                href="/assets/catalog/secim-rehberi.pdf" 
                download
                className="px-6 py-2.5 bg-delka-navy text-white text-sm font-bold rounded-xl hover:bg-delka-blue transition-colors flex items-center gap-2"
              >
                <Download size={16} /> {t('sg.pdfDownload', 'PDF İNDİR')}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
