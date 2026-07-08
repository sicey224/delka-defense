import React, { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

const initialNews = [
  {
    id: 1,
    iconName: 'Beaker',
    color: 'blue',
    titleTR: 'Test-Analiz Çözümleri & Düşme Senaryoları',
    titleEN: 'Test-Analysis Solutions & Drop Scenarios',
    descTR: 'Kendi tasarımımız olan test makinesi ile 3 eksende statik rijitlik testi yapılmaktadır. Bu veriler hem seçim yaparken hem de analizlerde kullanılmaktadır. Entegrasyon sonrası düşme testi gibi senaryolar analiz edilebilmektedir. Böylece optimum fayda ve zaman kazanılmaktadır. Yapısal tasarım konusunda da hizmet verilebilmektedir.',
    descEN: 'Static rigidity testing in 3 axes is performed with our custom-designed testing machine. These data are used in both selection and analyses. Scenarios like post-integration drop testing can be analyzed for optimum efficiency and time-saving. Structural design services are also available.',
    detailTR: 'Delka Savunma olarak, izolatör seçim sürecinde ve performans doğrulamasında test verilerine büyük önem veriyoruz. Kendi tasarladığımız test makinesi sayesinde, 3 eksende (X, Y, Z) statik rijitlik testleri gerçekleştirmekteyiz.\n\nBu testlerden elde edilen veriler, izolatör seçim kriterlerinin belirlenmesinde ve sonlu eleman analizlerinde (FEA) doğrudan kullanılmaktadır. Entegrasyon sonrası düşme testi gibi kritik senaryolar da analiz edilerek, optimum performans sağlanmaktadır.\n\nYapısal tasarım hizmetlerimiz kapsamında, müşterilerimize izolatör montaj noktalarının tasarımından platform entegrasyonuna kadar kapsamlı destek sunmaktayız.',
    detailEN: 'At Delka Defense, we place great importance on test data in the isolator selection process and performance validation. With our custom-designed testing machine, we perform static rigidity tests in 3 axes (X, Y, Z).\n\nThe data obtained from these tests are directly used in determining isolator selection criteria and in finite element analyses (FEA). Critical scenarios such as post-integration drop testing are also analyzed to ensure optimum performance.\n\nAs part of our structural design services, we provide comprehensive support to our customers from isolator mounting point design to platform integration.',
    imageUrl: '',
    date: '2026-07-09'
  },
  {
    id: 2,
    iconName: 'Activity',
    color: 'indigo',
    titleTR: 'Statik Rijitlik Testleri (10224-40 & 6154-20)',
    titleEN: 'Static Rigidity Tests (10224-40 & 6154-20)',
    descTR: '10224-40 Rijitlik Test Sonucu: Grafikte görüldüğü üzere, numunelerin rijitlik değerleri benzer seyir göstermektedir. 9 mm deplasmandaki rijitlik değeri referans alınmıştır. 6154-20 Rijitlik Test Sonucu: Rijitlik testi sonucu kuvvet-deplasman grafiği üzerinden değerlendirilir.',
    descEN: '10224-40 Rigidity Test Result: As seen in the graph, rigidity values of samples show a similar trend. Rigidity at 9 mm displacement is taken as reference. 6154-20 Rigidity Test Result: Rigidity test results are evaluated over the force-displacement graph.',
    detailTR: 'THS-10224-40 modeli için yapılan statik rijitlik testlerinde, numunelerin kuvvet-deplasman eğrileri karşılaştırılmıştır. Grafikte görüldüğü üzere, farklı numunelerin rijitlik değerleri benzer seyir göstermektedir ve bu durum üretim tutarlılığını kanıtlamaktadır.\n\n9 mm deplasmandaki rijitlik değeri referans noktası olarak alınmıştır. Bu değer, izolatörün operasyonel çalışma aralığında ne kadar kuvvet absorbe ettiğini göstermektedir.\n\nTHS-6154-20 modeli için ise rijitlik testi sonuçları kuvvet-deplasman grafiği üzerinden değerlendirilmiş; lineer ve nonlineer rijitlik bölgeleri net olarak ayrıştırılmıştır.',
    detailEN: 'For the THS-10224-40 model, force-displacement curves of specimens were compared in static rigidity tests. As seen in the graph, the rigidity values of different specimens show a similar trend, proving production consistency.\n\nThe rigidity value at 9 mm displacement was taken as the reference point. This value indicates how much force the isolator absorbs in its operational working range.\n\nFor the THS-6154-20 model, rigidity test results were evaluated through the force-displacement graph; linear and nonlinear rigidity regions were clearly distinguished.',
    imageUrl: '',
    date: '2026-07-08'
  },
  {
    id: 3,
    iconName: 'Cpu',
    color: 'emerald',
    titleTR: 'Ar-Ge: Gelecekte Neler Yapabiliriz?',
    titleEN: 'R&D: What Can We Do in the Future?',
    descTR: 'Titreşim, şok yüklerinin karma bir biçimde uygulandığı durumlarda ekipmandan veri almanın mümkün olmadığı durumlarda wire rope izolatörlerin lamalarını kompozit yapıp katmanları arasına ivme-ölçer sensörleri yerleştirerek veri toplamak mümkündür.',
    descEN: 'In cases where vibration and shock loads are applied mixedly and it is not possible to get data from the equipment, it is possible to make the lamellas of wire rope isolators composite and place accelerometer sensors between the layers to collect data.',
    detailTR: 'Ar-Ge vizyonumuz kapsamında, geleceğin izolatör teknolojileri üzerinde çalışmalar planlamaktayız.\n\nÖzellikle titreşim ve şok yüklerinin karma bir biçimde uygulandığı ve ekipmandan doğrudan veri almanın mümkün olmadığı durumlarda, yenilikçi bir yaklaşım geliştiriyoruz: Wire rope izolatörlerin lamalarını kompozit malzemeden üretip, katmanları arasına ivme-ölçer sensörleri yerleştirerek gerçek zamanlı veri toplamak.\n\nBu teknoloji sayesinde, izolatörlerin çalışma koşullarını anlık olarak izlemek ve performans optimizasyonu yapmak mümkün olacaktır. Ayrıca, toplanan verilerle makine öğrenmesi algoritmaları kullanılarak öngörücü bakım modelleri geliştirilmesi hedeflenmektedir.',
    detailEN: 'Within the scope of our R&D vision, we are planning studies on future isolator technologies.\n\nEspecially in cases where vibration and shock loads are applied in a mixed manner and it is not possible to obtain data directly from the equipment, we are developing an innovative approach: Producing the lamellas of wire rope isolators from composite material and placing accelerometer sensors between the layers to collect real-time data.\n\nWith this technology, it will be possible to monitor the working conditions of isolators in real-time and perform performance optimization. Additionally, predictive maintenance models are aimed to be developed using machine learning algorithms with the collected data.',
    imageUrl: '',
    date: '2026-07-07'
  },
  {
    id: 4,
    iconName: 'ShieldCheck',
    color: 'slate',
    titleTR: 'Sahip Olduğumuz Belgeler',
    titleEN: 'Our Certificates',
    descTR: 'Firmamızın sahip olduğu belgeler aşağıdadır. (Belgeler yakında eklenecektir).',
    descEN: 'The documents our company possesses are listed below. (Documents will be added soon).',
    detailTR: 'Delka Savunma olarak, kalite yönetim sistemi ve sektörel standartlara uygunluk konusunda gerekli belgelendirme süreçlerini yürütmekteyiz.\n\nBelgelerimiz ve standart uyumluluğumuz hakkında güncel bilgiler bu sayfada paylaşılacaktır. Devam eden belgelendirme süreçlerimiz tamamlandıkça içerik güncellenecektir.',
    detailEN: 'At Delka Defense, we are conducting the necessary certification processes for quality management system and sectoral standards compliance.\n\nCurrent information about our certificates and standards compliance will be shared on this page. Content will be updated as ongoing certification processes are completed.',
    imageUrl: '',
    date: '2026-07-06'
  },
  {
    id: 5,
    iconName: 'Video',
    color: 'amber',
    titleTR: 'Wirerope Testi',
    titleEN: 'Wirerope Test',
    descTR: 'Açıklama eklenecektir.',
    descEN: 'Description will be added.',
    detailTR: '',
    detailEN: '',
    imageUrl: '',
    date: '2026-07-05'
  }
];

const initialProducts = [
  { id: 'ths-3139', name: 'THS-3139', imgUrl: '/assets/catalog/ths-3139-urun.png', tableUrl: '/assets/catalog/ths-3139-tablo.png' },
  { id: 'ths-4139', name: 'THS-4139', imgUrl: '/assets/catalog/ths-4139-urun.png', tableUrl: '/assets/catalog/ths-4139-tablo.png' },
  { id: 'ths-6154', name: 'THS-6154', imgUrl: '/assets/catalog/ths-6154-urun.png', tableUrl: '/assets/catalog/ths-6154-tablo.png' },
  { id: 'ths-8154', name: 'THS-8154', imgUrl: '/assets/catalog/ths-8154-urun.png', tableUrl: '/assets/catalog/ths-8154-tablo.png' },
  { id: 'ths-10224', name: 'THS-10224', imgUrl: '/assets/catalog/ths-10224-urun.png', tableUrl: '/assets/catalog/ths-10224-tablo.png' },
  { id: 'ths-12224', name: 'THS-12224', imgUrl: '/assets/catalog/ths-12224-urun.png', tableUrl: '/assets/catalog/ths-12224-tablo.png' }
];

export const DataProvider = ({ children }) => {
  const [news, setNews] = useState(() => {
    const saved = localStorage.getItem('delka_news');
    return saved ? JSON.parse(saved) : initialNews;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('delka_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [submissions, setSubmissions] = useState(() => {
    const saved = localStorage.getItem('delka_submissions');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    const saved = sessionStorage.getItem('delka_admin_auth');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('delka_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('delka_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('delka_submissions', JSON.stringify(submissions));
  }, [submissions]);

  const loginAdmin = (passcode) => {
    if (passcode === 'delka2026') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('delka_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('delka_admin_auth');
  };

  // News Actions
  const addNews = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    setNews((prev) => [newItem, ...prev]);
  };

  const updateNews = (updatedItem) => {
    setNews((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteNews = (id) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  // Product Actions
  const addProduct = (item) => {
    setProducts((prev) => [...prev, item]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== id));
  };

  // Submission Actions
  const addSubmission = (submission) => {
    const newSubmission = {
      ...submission,
      id: Date.now(),
      submittedAt: new Date().toLocaleString()
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
  };

  const deleteSubmission = (id) => {
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        news,
        products,
        submissions,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        addNews,
        updateNews,
        deleteNews,
        addProduct,
        updateProduct,
        deleteProduct,
        addSubmission,
        deleteSubmission
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
