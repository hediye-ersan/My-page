import React, {createContext, useContext, useState, useEffect} from 'react';
import data from '../data/myData.json';

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');
    useEffect(() => {
        const browserLanguage = navigator.language.slice(0,2);
        if(data[browserLanguage]){
            setLanguage(browserLanguage)
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage(language==='en' ? 'tr' : "en");
    };

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>{children}</LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);