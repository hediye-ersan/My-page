import React from 'react';
import "../reset.css"
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';


const Header = () => {
  const { isDarkMode } = useDarkMode();
  const { currentLangContent } = useLanguage();
  const bioData = currentLangContent.bio;


  const email = "hediye@example.com";
  //html içerik render etmek
  const pinkIntro = bioData.intro
    .replace(/(Freelancing|UX|UI|Web Design|Web Tasarım|Freelance)/g, (match) => {
      return `<span class="text-pink">${match}</span>`;
    });

  const DarkModeToggleButton = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
      <div className='flex gap-1 justify-center items-center'>
        <button
          className={`p-1 w-16  flex
          ${isDarkMode ? 'bg-[#000000] text-yellow-300 justify-start' : 'bg-[#E92577] text-gray-800 justify-end'} 
          rounded-full transition-all duration-300`}
          onClick={toggleDarkMode}
        >
          {/* İç yuvarlak simge */}
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full 
            ${isDarkMode ? 'bg-gray-900' : 'bg-yellow-300'}`}
          >
            {isDarkMode ? (
              <FaMoon className="text-yellow-300" />
            ) : (
              <FaSun className="text-yellow-300" />
            )}
          </div>
        </button>
        <span>
          {isDarkMode ? 'LIGHT MODE':'DARK MODE'}
        </span>
      </div>
    );
  };

  const LanguageToggleButton = () => {
    const { language, toggleLanguage } = useLanguage();


    return (
      <button
        className=" bg-transparent"
        onClick={toggleLanguage}
      >
        {language === 'en' ? (
          <>
            <span className="text-pink text-bold">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          <>
            SWITCH TO <span className="text-pink">ENGLISH</span>
          </>
        )}
      </button>
    );
  };
  return (


    <section className={`font-inter sm:text-left text-center px-36 py-20 z-10  ${isDarkMode ? 'text-white bg-[#2A262B]' : 'bg-[#F4F4F4] '}`}>
      
      <div className=' flex justify-end gap-8 pb-12 sm:pb-0'>
        <DarkModeToggleButton />
        <LanguageToggleButton />
      </div>
      
      <header>
        <div>
          <h1 className='font-inter text-3xl'>{bioData.title}</h1>
          <div className="flex justify-between w-full flex-wrap sm:flex-nowrap ">
            <p className='text-[42px] sm:pr-32'>{bioData.text}</p>
            <img src={bioData.image} alt="Profile" />
          </div>
        </div>
        <article className='text-lg pt-6 sm:pt-0'>
          <figure className='flex gap-6 justify-center sm:justify-start'>

            <img src={isDarkMode ? bioData.darkLogo1 : bioData.logo1} alt="Github" />
            <img src={isDarkMode ? bioData.darkLogo2 : bioData.logo2} alt="Linkedin" />
          </figure>

          <p className='text-lg pt-8 sm:w-2/4 sm:text-left w-full'><span dangerouslySetInnerHTML={{ __html: pinkIntro }}></span>
            <a href={`mailto:${email}`} className="text-pink font-inter">{email}</a></p>
        </article>
      </header>
    </section>
  );
}

export default Header;
