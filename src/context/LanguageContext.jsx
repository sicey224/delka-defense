import React, { createContext, useState, useContext, useEffect } from 'react';
import tr from '../translations/tr';
import en from '../translations/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check localStorage for saved language or default to 'tr'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('delka_lang');
    return saved ? saved : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('delka_lang', language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key, defaultValue) => {
    const keys = key.split('.');
    let value = language === 'tr' ? tr : en;
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return defaultValue !== undefined ? defaultValue : key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
