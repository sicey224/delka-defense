import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import { ArrowRight, Shield, Target, Zap, Users, ShieldCheck, Plane, Cpu, Box, Compass, Rocket, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DroneModel from '../components/DroneModel';
import IsolatorModel from '../components/IsolatorModel';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();
  const products = [
    { id: 'ths-3139', name: 'THS-3139' },
    { id: 'ths-4139', name: 'THS-4139' },
    { id: 'ths-6154', name: 'THS-6154' },
    { id: 'ths-8154', name: 'THS-8154' },
    { id: 'ths-10224', name: 'THS-10224' },
    { id: 'ths-12224', name: 'THS-12224' },
  ];

  return (
    <>
      {/* Background Logo Watermark */}
      <div 
        className="fixed -left-[5%] top-[5%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0 rotate-12"
        style={{
          backgroundImage: 'url(/logo.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      {/* Hero Section */}
      <main className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden z-10 flex min-h-[75vh] items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center order-2 md:order-1 mt-10 md:mt-0">

          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900 drop-shadow-sm">
            {t('home.heroTitle1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-delka-navy to-delka-blue">
              {t('home.heroTitle2')}
            </span>
          </h1>
          
          <p className="text-slate-600 text-lg mb-10 max-w-md leading-relaxed font-medium">
            {t('home.heroDesc')}
          </p>
          
          <div className="flex gap-4">
            <Link to="/secim-rehberi" className="px-8 py-4 bg-delka-navy hover:bg-delka-navy-hover text-white font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(10,48,85,0.25)] hover:shadow-[0_15px_25px_rgba(10,48,85,0.35)] hover:-translate-y-1 flex items-center gap-2">
              {t('home.heroBtnPrimary')} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Right 3D Canvas */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative cursor-grab active:cursor-grabbing order-1 md:order-2">
          {/* Splash Effect Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 pointer-events-none opacity-40">
            <div className="absolute top-10 left-10 w-72 h-72 bg-delka-blue rounded-full mix-blend-multiply filter blur-[50px] animate-pulse" />
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-[40px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-delka-navy rounded-full mix-blend-multiply filter blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-[30px] animate-bounce" style={{ animationDelay: '3s' }} />
          </div>
          
          <Canvas camera={{ position: [0, 1.5, 7], fov: 45 }} className="z-10 relative">
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 20, 15]} intensity={3.5} castShadow color="#ffffff" />
            <directionalLight position={[-10, -5, -10]} intensity={2} color="#f0f9ff" />
            <pointLight position={[0, -2, 4]} intensity={1.5} color="#0ea5e9" />
            
            <Suspense fallback={null}>
              <Float speed={2.5} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.2, 0.2]}>
                <IsolatorModel />
              </Float>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              <ContactShadows position={[0, -2, 0]} opacity={0.15} scale={10} blur={2} far={4} color="#0a3055" />
            </Suspense>
          </Canvas>
        </div>
        </div>
      </main>

      {/* About Section on Home */}
      <section id="hakkimizda" className="relative z-10 container mx-auto pt-16 pb-24 px-6">
        <div className="pt-8 pb-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
              {t('home.aboutBadge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t('home.aboutTitle')}
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              {t('home.aboutDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Mission */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-delka-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('home.missionTitle')}</h3>
              <p className="text-slate-500 leading-relaxed">
                {t('home.missionDesc')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Compass size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('home.visionTitle')}</h3>
              <p className="text-slate-500 leading-relaxed">
                {t('home.visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach Section */}
      <section className="relative z-10 container mx-auto pb-24 px-6 mt-10 md:mt-0">
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-delka-blue font-black uppercase tracking-widest text-sm mb-4 block">
              {t('home.approachBadge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t('home.approachTitle')}
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              {t('home.approachDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 text-delka-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 group-hover:border-blue-100">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.feature1Title')}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {t('home.feature1Desc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 text-delka-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 group-hover:border-blue-100">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.feature2Title')}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {t('home.feature2Desc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 text-delka-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 group-hover:border-blue-100">
                <Rocket size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.feature3Title')}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {t('home.feature3Desc')}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-50 text-delka-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 group-hover:border-blue-100">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.feature4Title')}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {t('home.feature4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 container mx-auto pb-24 px-6">
        <div className="bg-delka-navy rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl mb-10 group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{t('home.whyTitle')}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{t('home.why1')}</h4>
                <p className="text-slate-400 text-sm">{t('home.why1Desc')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                  <Users size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{t('home.why2')}</h4>
                <p className="text-slate-400 text-sm">{t('home.why2Desc')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                  <Zap size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{t('home.why3')}</h4>
                <p className="text-slate-400 text-sm">{t('home.why3Desc')}</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                  <Target size={32} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{t('home.why4')}</h4>
                <p className="text-slate-400 text-sm">{t('home.why4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Solutions Section */}
      <section className="relative z-10 container mx-auto pb-24 px-6">
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">{t('home.productsTitle')}</h2>
              <p className="text-slate-500 text-lg">
                {t('home.productsDesc')}
              </p>
            </div>
            <Link to="/urunler" className="text-delka-blue font-bold flex items-center gap-2 hover:gap-4 transition-all shrink-0">
              {t('home.viewAll')} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/urunler/${product.id}`}
              className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(14,165,233,0.12)] hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[160px]"
            >
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500 text-delka-navy">
                <Box size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-delka-navy transition-colors mb-2">
                  {product.name}
                </h3>
              </div>
                
              <div className="relative z-10 inline-flex items-center gap-2 text-delka-blue font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all mt-4">
                Detayları İncele <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/urunler" className="inline-flex items-center gap-2 text-delka-navy font-bold hover:text-delka-blue transition-colors group">
            Tümünü Gör <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div className="glass bg-white/50 p-8 rounded-3xl border border-white hover:border-delka-blue/40 hover:shadow-[0_20px_40px_-15px_rgba(10,48,85,0.15)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-delka-blue/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-delka-navy mb-6 group-hover:text-white group-hover:scale-110 group-hover:bg-delka-navy transition-all duration-300 shadow-sm border border-slate-100 relative z-10">
        {icon}
      </div>
      <h3 className="font-extrabold text-xl mb-3 text-slate-900 relative z-10">{title}</h3>
      <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">Yeni nesil teknolojik altyapı ile üstün performans, sürdürülebilirlik ve maksimum güvenlik sağlar.</p>
    </div>
  );
}
