import React from 'react';
import myData from '../data/myData';
import { useLanguage } from '../contexts/LanguageContext';
import { useDarkMode } from '../contexts/DarkModeContext';

const Footer = () => {
  const {isDarkMode} = useDarkMode();
  const { language } = useLanguage();  
  const footerData = myData[language].footer;
  return (
    <footer className={`${isDarkMode ? 'bg-[#484148] text-white' : ''}`}>
      <div className=" mx-auto text-center flex justify-center items-center w-3/5 pt-20 pb-28" >
        <p className="text-[42px] font-inter text-right pr-8">{footerData.text}</p>
        <div className="flex flex-col text-left font-playfair w-1/2">
          <a href="#" className={`text-2xl text-[#1769FF] ${isDarkMode ? 'text-[#82BBFF]' : ''}`}>
            {footerData.social.github}
          </a>
          <a href="#" className={`text-2xl text-[#0A0A14] ${isDarkMode ? 'text-[#FFFFFF]' : ''}`}>
            {footerData.social.blog}
          </a>
          <a href="#" className={`text-2xl text-[#0077B5] ${isDarkMode ? 'text-[#419CCB]' : ''}`}>
            {footerData.social.linkedin}
          </a>
          <a href="#" className={`text-2xl text-[#AF0C48] ${isDarkMode ? 'text-[#EA2678]' : ''}`}>
            {footerData.social.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
