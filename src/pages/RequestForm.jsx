import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, User, Box, Activity, CloudRain, Paperclip, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 relative z-10 min-h-screen bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('requestForm.pageTitle')}
            </h1>
            <p className="text-slate-500 mt-2 font-medium">{t('requestForm.website')}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100">
          {submitted ? (
            <div className="bg-emerald-50 text-emerald-700 p-16 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{t('requestForm.successTitle')}</h3>
              <p className="text-lg opacity-90 mb-8">{t('requestForm.successDesc')}</p>
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                <ChevronLeft size={20} /> {t('requestForm.backToHome')}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
              
              {/* BÖLÜM 1 */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-delka-blue">
                    <User size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{t('requestForm.section1')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.companyName')}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder={t('requestForm.companyNamePl')} required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.fullName')}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder={t('requestForm.fullNamePl')} required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.email')}</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder={t('requestForm.emailPl')} required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.phone')}</label>
                    <div className="flex gap-2">
                      <select className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 w-1/3 focus:outline-none focus:ring-2 focus:ring-delka-blue">
                        <option value="+90">Turkey +90</option>
                      </select>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder={t('requestForm.phonePl')} required />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.address')}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder={t('requestForm.addressPl')} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.projectName')}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue" placeholder={t('requestForm.projectNamePl')} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.applicationArea')}</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-delka-blue">
                      <option>{t('requestForm.areaNaval')}</option>
                      <option>{t('requestForm.areaLand')}</option>
                      <option>{t('requestForm.areaAir')}</option>
                      <option>{t('requestForm.areaIndustrial')}</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* BÖLÜM 2 */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
                    <Box size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{t('requestForm.section2')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.equipDesc')}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder={t('requestForm.equipDescPl')} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.equipDims')}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="W" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="L" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="H" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.equipMass')}</label>
                    <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder={t('requestForm.equipMassPl')} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.cog')}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="X" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="Y" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="Z" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.inertia')}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="Ixx" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="Iyy" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="Izz" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.connection')}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder={t('requestForm.connBase')} className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2" />
                      <input type="number" placeholder={t('requestForm.connBack')} className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.swaySpace')}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="X (Max)" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="Y (Max)" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                      <input type="number" placeholder="Z (Max)" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-center" />
                    </div>
                  </div>
                </div>
              </section>

              {/* BÖLÜM 3 */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                    <Activity size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{t('requestForm.section3')}</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-700 mb-4">{t('requestForm.s3_1')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2">{t('requestForm.srs')}</label>
                        <div className="flex gap-2">
                          <input type="number" placeholder={t('requestForm.accel')} className="w-1/3 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                          <input type="number" placeholder={t('requestForm.vel')} className="w-1/3 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                          <input type="number" placeholder={t('requestForm.disp')} className="w-1/3 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2">{t('requestForm.classicShock')}</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder={t('requestForm.profilePl')} className="w-1/3 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                          <input type="number" placeholder={t('requestForm.accelG')} className="w-1/3 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                          <input type="number" placeholder={t('requestForm.duration')} className="w-1/3 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2">{t('requestForm.standard')}</label>
                        <select className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm">
                          <option>{t('requestForm.select')}</option>
                          <option>MIL-STD-810H</option>
                          <option>MIL-S-901D</option>
                          <option>{t('requestForm.other')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2">{t('requestForm.fragility')}</label>
                        <input type="number" placeholder={t('requestForm.maxG')} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-700 mb-4">{t('requestForm.s3_2')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 bg-white p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-delka-blue transition-colors">
                          <input type="checkbox" className="w-5 h-5 text-delka-blue rounded border-slate-300 focus:ring-delka-blue" />
                          <span className="text-sm font-medium text-slate-700">{t('requestForm.sineSweep')}</span>
                        </label>
                        <label className="flex items-center gap-3 bg-white p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-delka-blue transition-colors">
                          <input type="checkbox" className="w-5 h-5 text-delka-blue rounded border-slate-300 focus:ring-delka-blue" />
                          <span className="text-sm font-medium text-slate-700">{t('requestForm.randomVib')}</span>
                        </label>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2">{t('requestForm.isoTarget')}</label>
                        <div className="relative">
                          <input type="number" placeholder={t('requestForm.targetFreq')} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm pr-12" />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Hz</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* BÖLÜM 4 */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CloudRain size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{t('requestForm.section4')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.temp')}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder={t('requestForm.min')} className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-center" />
                      <input type="number" placeholder={t('requestForm.max')} className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-center" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.chem')}</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>{t('requestForm.select')}</option>
                      <option>{t('requestForm.yes')}</option>
                      <option>{t('requestForm.no')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.atm')}</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>{t('requestForm.select')}</option>
                      <option>{t('requestForm.indoor')}</option>
                      <option>{t('requestForm.outdoor')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.corrosion')}</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>{t('requestForm.select')}</option>
                      <option>{t('requestForm.marine')}</option>
                      <option>{t('requestForm.no')}</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.material')}</label>
                    <div className="flex gap-4 items-center h-12">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="material" className="w-4 h-4 text-emerald-500" defaultChecked />
                        <span className="text-sm font-medium">{t('requestForm.matStandard')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="material" className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-medium">{t('requestForm.mat304')}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="material" className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-medium">{t('requestForm.mat316')}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* BÖLÜM 5 */}
              <section>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500">
                    <Paperclip size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800">{t('requestForm.section5')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.notes')}</label>
                    <textarea rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder={t('requestForm.notesPl')}></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('requestForm.attachments')}</label>
                    <div className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl px-4 py-8 flex flex-col items-center justify-center text-center hover:border-rose-300 hover:bg-rose-50/30 transition-colors cursor-pointer">
                      <Paperclip size={32} className="text-slate-400 mb-3" />
                      <p className="text-sm font-bold text-slate-700 mb-1">{t('requestForm.dragDrop')}</p>
                      <p className="text-xs text-slate-500">{t('requestForm.fileTypes')}</p>
                      <button type="button" className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">
                        {t('requestForm.selectFile')}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <Link to="/" className="text-slate-500 font-medium hover:text-delka-blue flex items-center gap-2">
                  <ChevronLeft size={18} /> {t('requestForm.backToHome')}
                </Link>
                <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-delka-navy text-white font-bold rounded-xl hover:bg-delka-blue transition-colors flex items-center justify-center gap-3 text-lg shadow-[0_10px_20px_rgba(10,48,85,0.2)] hover:-translate-y-1 hover:shadow-xl">
                  {t('requestForm.submitForm')} <Send size={20} />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
