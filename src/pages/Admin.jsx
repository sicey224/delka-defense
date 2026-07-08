import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Lock, LogOut, Newspaper, Box, Inbox, Plus, Edit2, Trash2, 
  Upload, CheckCircle, AlertCircle, Eye, RefreshCw, X, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const { t, language } = useLanguage();
  const { 
    news, products, submissions, isAdminLoggedIn, 
    loginAdmin, logoutAdmin, addNews, updateNews, deleteNews,
    addProduct, updateProduct, deleteProduct, deleteSubmission
  } = useData();

  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState('news'); // news, products, submissions

  // Modal / Form States
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [newsFormMode, setNewsFormMode] = useState('add'); // add, edit
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [newsForm, setNewsForm] = useState({
    titleTR: '', titleEN: '',
    descTR: '', descEN: '',
    detailTR: '', detailEN: '',
    iconName: 'Newspaper',
    color: 'blue',
    imageUrl: ''
  });

  const [showProductModal, setShowProductModal] = useState(false);
  const [productFormMode, setProductFormMode] = useState('add'); // add, edit
  const [editingProductId, setEditingProductId] = useState(null);
  const [productForm, setProductForm] = useState({
    id: '',
    name: '',
    imgUrl: '',
    tableUrl: ''
  });

  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // File Upload Handling refs
  const newsFileRef = useRef(null);
  const productFileRef = useRef(null);
  const tableFileRef = useRef(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(passcode);
    if (success) {
      setLoginError(false);
      setPasscode('');
    } else {
      setLoginError(true);
    }
  };

  // Convert files to base64
  const handleFileRead = (e, targetField, formSetter) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formSetter(prev => ({
          ...prev,
          [targetField]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // News Actions Handlers
  const handleOpenAddNews = () => {
    setNewsFormMode('add');
    setNewsForm({
      titleTR: '', titleEN: '',
      descTR: '', descEN: '',
      detailTR: '', detailEN: '',
      iconName: 'Newspaper',
      color: 'blue',
      imageUrl: ''
    });
    setShowNewsModal(true);
  };

  const handleOpenEditNews = (item) => {
    setNewsFormMode('edit');
    setEditingNewsId(item.id);
    setNewsForm({
      titleTR: item.titleTR, titleEN: item.titleEN,
      descTR: item.descTR, descEN: item.descEN,
      detailTR: item.detailTR, detailEN: item.detailEN,
      iconName: item.iconName || 'Newspaper',
      color: item.color || 'blue',
      imageUrl: item.imageUrl || ''
    });
    setShowNewsModal(true);
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    if (newsFormMode === 'add') {
      addNews(newsForm);
    } else {
      updateNews({ ...newsForm, id: editingNewsId });
    }
    setShowNewsModal(false);
  };

  // Product Actions Handlers
  const handleOpenAddProduct = () => {
    setProductFormMode('add');
    setProductForm({
      id: '',
      name: '',
      imgUrl: '',
      tableUrl: ''
    });
    setShowProductModal(true);
  };

  const handleOpenEditProduct = (prod) => {
    setProductFormMode('edit');
    setEditingProductId(prod.id);
    setProductForm({
      id: prod.id,
      name: prod.name,
      imgUrl: prod.imgUrl || '',
      tableUrl: prod.tableUrl || ''
    });
    setShowProductModal(true);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (productFormMode === 'add') {
      addProduct(productForm);
    } else {
      updateProduct(productForm);
    }
    setShowProductModal(false);
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md p-8 bg-slate-950/80 backdrop-blur-2xl rounded-3xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-2xl mx-auto mb-4 border border-blue-500/20 shadow-inner">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-black text-white tracking-wide">DELKA SAVUNMA</h1>
            <p className="text-slate-400 text-sm mt-2">Yönetici Paneli Girişi</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Giriş Şifresi</label>
              <input 
                type="password" 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Şifreyi giriniz (delka2026)"
                required
              />
            </div>

            {loginError && (
              <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                <AlertCircle size={16} />
                <span>Geçersiz şifre. Tekrar deneyin.</span>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-32 pb-24 relative overflow-x-hidden">
      {/* Dynamic BG elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Panel Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-slate-800 mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Yönetici Kontrol Paneli
              <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">CANLI</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">İçerik, haber, ürün yönetimi ve talep inceleme arayüzü.</p>
          </div>
          <button 
            onClick={logoutAdmin}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl font-bold text-sm flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
          >
            <LogOut size={16} /> Çıkış Yap
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 p-1.5 bg-slate-950/80 backdrop-blur rounded-2xl border border-slate-800 mb-8 max-w-xl">
          <button 
            onClick={() => setActiveTab('news')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${activeTab === 'news' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Newspaper size={16} /> Haberler
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${activeTab === 'products' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Box size={16} /> Ürünler
          </button>
          <button 
            onClick={() => setActiveTab('submissions')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer relative ${activeTab === 'submissions' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Inbox size={16} /> Gelen Kutusu
            {submissions.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {submissions.length}
              </span>
            )}
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'news' && (
          <div className="bg-slate-950/40 rounded-3xl border border-slate-800/80 p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-white">Haberler ve Ar-Ge Yazıları</h2>
              <button 
                onClick={handleOpenAddNews}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Plus size={16} /> Yeni Haber Ekle
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-4">Görsel / İkon</th>
                    <th className="py-4 px-4">Haber Başlığı (TR)</th>
                    <th className="py-4 px-4">Tarih</th>
                    <th className="py-4 px-4 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {news.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-950/40 transition-colors">
                      <td className="py-4 px-4">
                        {item.imageUrl ? (
                          <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                            <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center text-blue-400 font-mono text-xs">
                            {item.iconName || 'Newspaper'}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-bold text-white max-w-md truncate">{item.titleTR}</div>
                        <div className="text-slate-500 text-xs mt-1 truncate">{item.titleEN}</div>
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-400">{item.date}</td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button 
                            onClick={() => handleOpenEditNews(item)}
                            className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-slate-400 border border-slate-800 transition-colors cursor-pointer"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button 
                            onClick={() => {
                              if(window.confirm('Bu haberi silmek istediğinize emin misiniz?')) {
                                deleteNews(item.id);
                              }
                            }}
                            className="p-2 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-lg text-slate-400 border border-slate-800 transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {news.length === 0 && (
                    <tr>
                      <td colSpan="4" className="py-12 text-center text-slate-500 text-sm">Kayıtlı haber bulunmamaktadır.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-slate-950/40 rounded-3xl border border-slate-800/80 p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-white">Ürün Vitrini</h2>
              <button 
                onClick={handleOpenAddProduct}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Plus size={16} /> Yeni Ürün Ekle
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-4">Görsel</th>
                    <th className="py-4 px-4">Ürün Kodu / ID</th>
                    <th className="py-4 px-4">Ürün Adı</th>
                    <th className="py-4 px-4 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {products.map((prod) => (
                    <tr key={prod.id} className="hover:bg-slate-950/40 transition-colors">
                      <td className="py-4 px-4">
                        <div className="w-16 h-12 bg-white rounded-lg overflow-hidden border border-slate-800 flex items-center justify-center p-1">
                          <img src={prod.imgUrl} alt={prod.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      </td>
                      <td className="py-4 px-4 font-mono text-sm text-blue-400">{prod.id}</td>
                      <td className="py-4 px-4 font-bold text-white">{prod.name}</td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button 
                            onClick={() => handleOpenEditProduct(prod)}
                            className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-slate-400 border border-slate-800 transition-colors cursor-pointer"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button 
                            onClick={() => {
                              if(window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
                                deleteProduct(prod.id);
                              }
                            }}
                            className="p-2 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-lg text-slate-400 border border-slate-800 transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan="4" className="py-12 text-center text-slate-500 text-sm">Vitrin ürünü bulunmamaktadır.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'submissions' && (
          <div className="bg-slate-950/40 rounded-3xl border border-slate-800/80 p-8 shadow-xl">
            <h2 className="text-xl font-black text-white mb-6">Talep ve İletişim Formu Başvuruları</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-4">Tarih</th>
                    <th className="py-4 px-4">Firma Adı</th>
                    <th className="py-4 px-4">Adı Soyadı</th>
                    <th className="py-4 px-4">Talep Alanı</th>
                    <th className="py-4 px-4 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-950/40 transition-colors">
                      <td className="py-4 px-4 text-sm text-slate-400">{sub.submittedAt}</td>
                      <td className="py-4 px-4 font-bold text-white">{sub.companyName || '-'}</td>
                      <td className="py-4 px-4 text-slate-300">{sub.fullName}</td>
                      <td className="py-4 px-4 text-sm">
                        <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700 text-xs font-bold">
                          {sub.applicationArea || 'İletişim'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button 
                            onClick={() => setSelectedSubmission(sub)}
                            className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-slate-400 border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                          >
                            <Eye size={12} /> İncele
                          </button>
                          <button 
                            onClick={() => {
                              if(window.confirm('Bu formu silmek istediğinize emin misiniz?')) {
                                deleteSubmission(sub.id);
                              }
                            }}
                            className="p-2 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-lg text-slate-400 border border-slate-800 transition-colors cursor-pointer"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {submissions.length === 0 && (
                    <tr>
                      <td colSpan="5" className="py-12 text-center text-slate-500 text-sm">Gelen kutusu boş. Henüz başvuru bulunmuyor.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* ================= MODALS ================= */}

      {/* News Modal */}
      {showNewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-8 py-5 border-b border-slate-800 sticky top-0 bg-slate-900/90 backdrop-blur z-10">
              <h3 className="text-xl font-black text-white">
                {newsFormMode === 'add' ? 'Yeni Haber Ekle' : 'Haberi Düzenle'}
              </h3>
              <button onClick={() => setShowNewsModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleNewsSubmit} className="p-8 space-y-6">
              
              {/* Image Preview / Upload Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Upload Field */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Ön Görsel Yükle (Dosya Seçin)</label>
                  <div 
                    onClick={() => newsFileRef.current?.click()}
                    className="w-full border-2 border-dashed border-slate-800 hover:border-blue-500/50 bg-slate-950 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                  >
                    <Upload size={32} className="text-slate-500 mb-2" />
                    <span className="text-sm font-bold text-slate-300">Resim Seçin veya Sürükleyin</span>
                    <span className="text-xs text-slate-500 mt-1">PNG, JPG, WEBP (Max 2MB)</span>
                    <input 
                      type="file" 
                      ref={newsFileRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleFileRead(e, 'imageUrl', setNewsForm)}
                    />
                  </div>
                </div>

                {/* Local Preview */}
                <div className="flex flex-col">
                  <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Görsel Önizleme</span>
                  <div className="flex-grow border border-slate-800 bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center p-2 min-h-[120px]">
                    {newsForm.imageUrl ? (
                      <div className="relative w-full h-full group">
                        <img src={newsForm.imageUrl} alt="" className="w-full h-full object-cover rounded-xl max-h-[140px]" />
                        <button 
                          type="button"
                          onClick={() => setNewsForm(prev => ({ ...prev, imageUrl: '' }))}
                          className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-rose-600 rounded-lg text-white"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ) : (
                      <div className="text-slate-600 text-xs font-medium text-center">Görsel Seçilmedi<br/>(İkon Gösterilecektir)</div>
                    )}
                  </div>
                </div>

              </div>

              {/* Title Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Başlık (Türkçe)</label>
                  <input 
                    type="text" 
                    value={newsForm.titleTR}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, titleTR: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Başlık (İngilizce)</label>
                  <input 
                    type="text" 
                    value={newsForm.titleEN}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, titleEN: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Kısa Açıklama (Türkçe)</label>
                  <textarea 
                    value={newsForm.descTR}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, descTR: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Kısa Açıklama (İngilizce)</label>
                  <textarea 
                    value={newsForm.descEN}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, descEN: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Full Content (Details) Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Detaylı İçerik (Türkçe)</label>
                  <textarea 
                    value={newsForm.detailTR}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, detailTR: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm leading-relaxed"
                    rows={8}
                    placeholder="Paragrafları boşluklar (Enter tuşuna çift basarak) ile ayırabilirsiniz."
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Detaylı İçerik (İngilizce)</label>
                  <textarea 
                    value={newsForm.detailEN}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, detailEN: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm leading-relaxed"
                    rows={8}
                    placeholder="Separate paragraphs using double spacing/Enter."
                  />
                </div>
              </div>

              {/* Fallback Icon and Color */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Görsel Yoksa Gösterilecek İkon</label>
                  <select 
                    value={newsForm.iconName}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, iconName: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Newspaper">Varsayılan Haber İkonu (Newspaper)</option>
                    <option value="Beaker">Ar-Ge / Deney (Beaker)</option>
                    <option value="Activity">Sismik / Titreşim (Activity)</option>
                    <option value="Cpu">Akıllı Kart / Çip (Cpu)</option>
                    <option value="ShieldCheck">Güvenlik / Kalite Sertifikası (ShieldCheck)</option>
                    <option value="Video">Video / Tanıtım (Video)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">İkon Arka Plan Teması</label>
                  <select 
                    value={newsForm.color}
                    onChange={(e) => setNewsForm(prev => ({ ...prev, color: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="blue">Mavi (Mühendislik)</option>
                    <option value="indigo">Çivit Mavisi (Tasarım)</option>
                    <option value="emerald">Yeşil (Geliştirme)</option>
                    <option value="slate">Gri (Raporlar)</option>
                    <option value="amber">Turuncu (Video/Dinamik)</option>
                  </select>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-end pt-4 border-t border-slate-800">
                <button 
                  type="button" 
                  onClick={() => setShowNewsModal(false)}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Vazgeç
                </button>
                <button 
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  {newsFormMode === 'add' ? 'Haber Ekle' : 'Değişiklikleri Kaydet'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-xl">
            <div className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
              <h3 className="text-xl font-black text-white">
                {productFormMode === 'add' ? 'Yeni Ürün Ekle' : 'Ürünü Düzenle'}
              </h3>
              <button onClick={() => setShowProductModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleProductSubmit} className="p-8 space-y-6">
              
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Ürün Kodu (URL ID - örn: ths-3139)</label>
                <input 
                  type="text" 
                  value={productForm.id}
                  onChange={(e) => setProductForm(prev => ({ ...prev, id: e.target.value.toLowerCase().trim() }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  placeholder="ths-XXXX"
                  required
                  disabled={productFormMode === 'edit'}
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Ürün Adı</label>
                <input 
                  type="text" 
                  value={productForm.name}
                  onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Örn: THS-3139"
                  required
                />
              </div>

              {/* File selectors for Product */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Ürün Görseli</label>
                  <div 
                    onClick={() => productFileRef.current?.click()}
                    className="border border-dashed border-slate-800 hover:border-blue-500 bg-slate-950 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                  >
                    <Upload size={20} className="text-slate-500 mb-1" />
                    <span className="text-xs font-bold text-slate-300">Görsel Seç</span>
                    {productForm.imgUrl && <span className="text-[10px] text-emerald-400 mt-1">Yüklendi</span>}
                    <input 
                      type="file" 
                      ref={productFileRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleFileRead(e, 'imgUrl', setProductForm)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Katalog Tablosu</label>
                  <div 
                    onClick={() => tableFileRef.current?.click()}
                    className="border border-dashed border-slate-800 hover:border-blue-500 bg-slate-950 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                  >
                    <Upload size={20} className="text-slate-500 mb-1" />
                    <span className="text-xs font-bold text-slate-300">Tablo Seç</span>
                    {productForm.tableUrl && <span className="text-[10px] text-emerald-400 mt-1">Yüklendi</span>}
                    <input 
                      type="file" 
                      ref={tableFileRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleFileRead(e, 'tableUrl', setProductForm)}
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 justify-end pt-4 border-t border-slate-800">
                <button 
                  type="button" 
                  onClick={() => setShowProductModal(false)}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Vazgeç
                </button>
                <button 
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  {productFormMode === 'add' ? 'Ürün Ekle' : 'Değişiklikleri Kaydet'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-8 py-5 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
              <h3 className="text-xl font-black text-white">Form Başvuru Detayı</h3>
              <button onClick={() => setSelectedSubmission(null)} className="text-slate-400 hover:text-white cursor-pointer">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-500 text-xs block mb-1">Başvuru Tipi</span>
                  <span className="font-bold text-white">{selectedSubmission.type}</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-500 text-xs block mb-1">Gönderim Tarihi</span>
                  <span className="font-bold text-white">{selectedSubmission.submittedAt}</span>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="text-white font-bold border-b border-slate-800 pb-2 text-sm uppercase tracking-wider">Müşteri & İletişim Bilgileri</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500 block">Firma Adı:</span>
                    <span className="font-bold text-slate-200">{selectedSubmission.companyName || '-'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Ad Soyad:</span>
                    <span className="font-bold text-slate-200">{selectedSubmission.fullName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">E-posta:</span>
                    <a href={`mailto:${selectedSubmission.email}`} className="font-bold text-blue-400 hover:underline">{selectedSubmission.email}</a>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Telefon:</span>
                    <a href={`tel:${selectedSubmission.phone}`} className="font-bold text-blue-400 hover:underline">{selectedSubmission.phonePrefix || ''} {selectedSubmission.phone}</a>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-slate-500 block">Adres:</span>
                    <span className="font-medium text-slate-300">{selectedSubmission.address || '-'}</span>
                  </div>
                </div>
              </div>

              {selectedSubmission.type === "İzolatör Talep Formu" && (
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <h4 className="text-white font-bold border-b border-slate-800 pb-2 text-sm uppercase tracking-wider">Teknik Detaylar</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500 block">Proje Adı / Tanımı:</span>
                      <span className="font-bold text-slate-200">{selectedSubmission.projectName || '-'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Uygulama Alanı:</span>
                      <span className="font-bold text-slate-200">{selectedSubmission.applicationArea || '-'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Ekipman Tanımı:</span>
                      <span className="font-bold text-slate-200">{selectedSubmission.equipDesc || '-'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Kütle (kg):</span>
                      <span className="font-bold text-slate-200">{selectedSubmission.equipMass || '-'} kg</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Boyutlar (W x L x H):</span>
                      <span className="font-bold text-slate-200">
                        {selectedSubmission.dimW || '-' } x {selectedSubmission.dimL || '-'} x {selectedSubmission.dimH || '-'} mm
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedSubmission.notes && (
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">Ek Notlar</h4>
                  <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    {selectedSubmission.notes}
                  </p>
                </div>
              )}

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button 
                  type="button" 
                  onClick={() => setSelectedSubmission(null)}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Kapat
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
