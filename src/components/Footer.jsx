import React from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../contexts/LanguageContext';
import animationData from '../assets/lottie/Test.json';


const Footer = () => {

  const { currentLangContent } = useLanguage();
  const footerData = currentLangContent.footer;
  return (
    <footer className='dark:bg-dark-bg2 dark:text-dark-text'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
          {/* Footer Content - Text and Links */}
          <div className="flex justify-center items-center gap-6 lg:gap-8">
            <p className="text-[42px] text-right pr-8 pl-8">{footerData.text}</p>
            <div className="flex flex-col text-left font-playfair">
              <a href={footerData.links?.github || footerData.social?.link || '#'} target="_blank" rel="noreferrer" className="text-2xl text-[#1769FF] dark:text-[#82BBFF]">
                {footerData.social.github}
              </a>
              <a href="#" className="text-2xl text-[#0A0A14] dark:text-dark-text">
                {footerData.social.blog}
              </a>
              <a href={footerData.links?.linkedin || '#'} target="_blank" rel="noreferrer" className="text-2xl text-[#0077B5] dark:text-[#419CCB]">
                {footerData.social.linkedin}
              </a>
              <a href={footerData.links?.email ? `mailto:${footerData.links.email}` : '#'} className="text-2xl text-[#AF0C48] dark:text-[#EA2678]">
                {footerData.social.email}
              </a>
            </div>
          </div>
          
          {/* Lottie Animation - Integrated seamlessly */}
          <div className="hidden lg:flex items-center justify-center ml-4 mr-8">
            <div className="w-80">
              <Lottie 
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile: Lottie below */}
        <div className="lg:hidden flex justify-center items-center mt-6">
          <div className="w-64">
            <Lottie 
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: 'auto', maxHeight: '350px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
