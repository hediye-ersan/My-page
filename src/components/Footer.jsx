import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Footer = () => {

  const { currentLangContent } = useLanguage();
  const footerData = currentLangContent.footer;
  return (
    <footer className='dark:bg-dark-bg2 dark:text-dark-text'>
      <div className=" mx-auto text-center flex justify-center items-center w-3/5 pt-20 pb-28" >
        <p className="text-[42px] text-right pr-8">{footerData.text}</p>
        <div className="flex flex-col text-left font-playfair w-1/2">
          <a href="#" className="text-2xl text-[#1769FF] dark:text-[#82BBFF]">
            {footerData.social.github}
          </a>
          <a href="#" className="text-2xl text-[#0A0A14] dark:text-dark-text">
            {footerData.social.blog}
          </a>
          <a href="#" className="text-2xl text-[#0077B5] dark:text-[#419CCB]">
            {footerData.social.linkedin}
          </a>
          <a href="#" className="text-2xl text-[#AF0C48] dark:text-[#EA2678]">
            {footerData.social.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
