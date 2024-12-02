import React, { createContext, useState, useContext, useEffect } from 'react';
import myData from '../data/myData.json';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2);
    if (myData[browserLanguage]) {
      setLanguage(browserLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageProvider;
