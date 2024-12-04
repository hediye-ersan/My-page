import React, { createContext, useState, useContext, useEffect } from 'react';
import myData from '../data/myData';

const LanguageContext = createContext();


const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      return storedLanguage;
    }
    const browserLanguage = navigator.language.slice(0, 2);
    return myData[browserLanguage] ? browserLanguage : 'en';
  });


  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageProvider;
