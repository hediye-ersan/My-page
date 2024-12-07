import React from 'react';
import "../reset.css"
import { useLanguage } from '../contexts/LanguageContext';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {

  const { currentLangContent } = useLanguage();
  const bioData = currentLangContent.bio;


  const email = "hediye@example.com";
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

    <section className="sm:text-left text-center px-36 py-20 z-10 dark:bg-dark-bg1 dark:text-dark-text">

      <div className=' flex justify-end gap-8 pb-12 sm:pb-0'>
        <DarkModeToggle />
        <LanguageToggleButton />
      </div>

      <header>
        <div>
          <h1 className=' text-3xl'>{bioData.title}</h1>
          <div className="flex justify-between w-full flex-wrap sm:flex-nowrap ">
            <p className='text-[42px] sm:pr-32'>{bioData.text}</p>
            <img src={bioData.image} alt="Profile" />
          </div>
        </div>
        <article className='text-lg pt-6 sm:pt-0'>
          <figure className='flex gap-6 justify-center sm:justify-start'>

          <img
              src={bioData.logo1}
              alt="Github"
              className=" dark:hidden" // Normal modda göster
            />
            <img
              src={bioData.darkLogo1}
              alt="Github"
              className=" hidden dark:block" // Dark modda göster
            />

            {/* Normal modda logo2, dark modda Darklogo2 */}
            <img
              src={bioData.logo2}
              alt="Linkedin"
              className=" dark:hidden" // Normal modda göster
            />
            <img
              src={bioData.darkLogo2}
              alt="Linkedin"
              className=" hidden dark:block" // Dark modda göster
            />
          </figure>

          <p className='text-lg pt-8 sm:w-2/4 sm:text-left w-full'><span dangerouslySetInnerHTML={{ __html: pinkIntro }}></span>
            <a href={`mailto:${email}`} className="text-pink ">{email}</a></p>
        </article>
      </header>
    </section>
  );
}

export default Header;
