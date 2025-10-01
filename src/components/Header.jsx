import React from 'react';
import "../reset.css"
import { useLanguage } from '../contexts/LanguageContext';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {

  const { currentLangContent } = useLanguage();
  const bioData = currentLangContent.bio;


  const email = "hediyesnl9@gmail.com";
  //html içerik render etmek
  const pinkIntro = bioData.intro
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
    <section className="sm:text-left text-center px-4 sm:px-36 py-20 z-10 dark:bg-dark-bg1 dark:text-dark-text ">

      {/* Dark Mode & Language Toggle */}
      <div className='flex justify-center sm:justify-end gap-4 sm:gap-8 pb-8 sm:pb-0'>
        <DarkModeToggle />
        <LanguageToggleButton />
      </div>

      <header>
        <div>
          <h1 className='text-2xl sm:text-3xl mb-4'>{bioData.title}</h1>

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
            <p className="text-xl sm:text-2xl sm:pr-30 leading-relaxed sm:leading-snug text-justify">
              {bioData.text}
            </p>

            <img src={bioData.image} alt="Profile" className="w-40 sm:w-auto" />
          </div>
        </div>

        <article className='text-base sm:text-lg pt-6 sm:pt-0'>
          <figure className='flex gap-6 justify-center sm:justify-start flex-wrap mt-6 sm:mt-0'>

            {/* Github Icon */}
            <img src={bioData.logo1} alt="Github" className="dark:hidden w-8 h-8" />
            <img src={bioData.darkLogo1} alt="Github" className="hidden dark:block w-8 h-8" />

            {/* Linkedin Icon */}
            <img src={bioData.logo2} alt="Linkedin" className="dark:hidden w-8 h-8" />
            <img src={bioData.darkLogo2} alt="Linkedin" className="hidden dark:block w-8 h-8" />
          </figure>

          <p className='pt-6 sm:pt-8 sm:w-2/4 w-full mx-auto sm:mx-0'>
            <span dangerouslySetInnerHTML={{ __html: pinkIntro }}></span>
            <a href={`mailto:${email}`} className="text-pink">{email}</a>
          </p>
        </article>
      </header>
    </section>
  );

}

export default Header;
