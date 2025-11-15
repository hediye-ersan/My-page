import React from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../contexts/LanguageContext';
import animationData from '../assets/lottie/Test.json';


const Footer = () => {

  const { currentLangContent } = useLanguage();
  const footerData = currentLangContent.footer;
  return (
    <footer className='dark:bg-dark-bg2 dark:text-dark-text' role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
          {/* Footer Content - Text and Links */}
          <div className="flex justify-center items-center gap-6 lg:gap-8">
            <p className="text-[42px] text-right pr-8 pl-8">{footerData.text}</p>
            <nav className="flex flex-col text-left font-playfair" aria-label="Social links">
              <a 
                href={footerData.links?.github || footerData.social?.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-[#1769FF] dark:text-[#82BBFF] hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Visit my GitHub profile"
              >
                {footerData.social.github}
              </a>
              <a 
                href="#" 
                className="text-2xl text-[#0A0A14] dark:text-dark-text hover:underline focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 rounded"
                aria-label="Visit my blog (coming soon)"
              >
                {footerData.social.blog}
              </a>
              <a 
                href={footerData.links?.linkedin || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-[#0077B5] dark:text-[#419CCB] hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label="Visit my LinkedIn profile"
              >
                {footerData.social.linkedin}
              </a>
              <a 
                href={footerData.links?.email ? `mailto:${footerData.links.email}` : '#'} 
                className="text-2xl text-[#AF0C48] dark:text-[#EA2678] hover:underline focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 rounded"
                aria-label={`Send email to ${footerData.links?.email || 'me'}`}
              >
                {footerData.social.email}
              </a>
            </nav>
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
