import React from 'react';
import "../reset.css"
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';
import { useDarkMode } from '../contexts/DarkModeContext';


const Header = () => {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
  const langData = myData[language].bio;


  const email = "hediye@example.com";
  //html içerik render etmek
  const pinkIntro = langData.intro
    .replace(/(Freelancing|UX|UI|Web Design|Web Tasarım|Freelance)/g, (match) => {
      return `<span class="text-pink">${match}</span>`;
    });

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


    <section className={`bg-[#F4F4F4] font-inter text-left px-28 py-24 z-10  ${isDarkMode ? 'text-white bg-[#2A262B]' : ''}`}>
      <div className='text-right pb-4'><LanguageToggleButton /></div>

      <header>
        <div>
          <h1 className='font-inter text-3xl'>{langData.title}</h1>
          <div className="flex justify-center ">
            <p className='text-[42px] max-w-[14]'>{langData.text}</p>
            <img src={langData.image} alt="Profile" />
          </div>
        </div>
        <article className='text-lg'>
          <figure className='flex gap-6'>

            <img src={isDarkMode ? langData.darkLogo1 : langData.logo1} alt="Github" />
            <img src={isDarkMode ? langData.darkLogo2 : langData.logo2} alt="Linkedin" />
          </figure>

          <p className='text-lg pt-8 w-2/4'><span dangerouslySetInnerHTML={{ __html: pinkIntro }}></span>
            <a href={`mailto:${email}`} className="text-pink font-inter">{email}</a></p>
        </article>
      </header>
    </section>
  );
}

export default Header;
