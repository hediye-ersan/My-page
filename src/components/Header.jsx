import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import "../reset.css"
import { useLanguage } from '../contexts/LanguageContext';
import DarkModeToggle from './DarkModeToggle';
import contactAnimationData from '../assets/lottie/Contact Title.json';

const Header = () => {

  const { currentLangContent } = useLanguage();
  const bioData = currentLangContent.bio;
  const footerData = currentLangContent.footer;


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
          <h1 className='text-2xl sm:text-3xl mb-4 sm:mb-0'>
            {(() => {
              // Emoji'yi bulmak için - tüm varyasyonları kontrol et
              const emojiPattern = /👋(🏻|🏼|🏽|🏾|🏿)?/;
              const match = bioData.title.match(emojiPattern);
              
              if (match && match.index !== undefined) {
                const emoji = match[0];
                const beforeEmoji = bioData.title.substring(0, match.index);
                const afterEmoji = bioData.title.substring(match.index + emoji.length);
                
                return (
                  <>
                    {beforeEmoji}
                    <motion.span
                      className="inline-block origin-[70%_70%] text-4xl sm:text-5xl"
                      initial={{ rotate: -20, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        rotate: [0, 25, -15, 25, -10, 18, 0],
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
                      }}
                    >
                      {emoji}
                    </motion.span>
                    {afterEmoji}
                  </>
                );
              }
              
              // Emoji bulunamazsa normal göster
              return bioData.title;
            })()}
          </h1>

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-12">
            <p className="text-xl sm:text-2xl sm:pr-30 leading-relaxed sm:leading-snug text-justify">
              {bioData.text}
            </p>

            <motion.img 
              src={bioData.image} 
              alt="Profile" 
              className="w-40 sm:w-auto"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.2, 0.7, 0.2, 1],
                delay: 0.3
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
            />
          </div>
        </div>

        <article className='text-base sm:text-lg pt-6 sm:pt-0'>
          <figure className='flex gap-6 justify-center sm:justify-start flex-wrap items-center mt-6 sm:mt-0'>
            
            {/* Contact Title Lottie Animation */}
            <div className="w-24 sm:w-32 flex-shrink-0 pr-4">
              <Lottie 
                animationData={contactAnimationData}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* Github Icon */}
            <a href={footerData.links.github} target="_blank" rel="noreferrer">
              <img src={bioData.logo1} alt="Github" className="dark:hidden w-8 h-8" />
            </a>
            <a href={footerData.links.github} target="_blank" rel="noreferrer">
              <img src={bioData.darkLogo1} alt="Github" className="hidden dark:block w-8 h-8" />
            </a>

            {/* Linkedin Icon */}
            <a href={footerData.links.linkedin} target="_blank" rel="noreferrer">
              <img src={bioData.logo2} alt="Linkedin" className="dark:hidden w-8 h-8" />
            </a>
            <a href={footerData.links.linkedin} target="_blank" rel="noreferrer">
              <img src={bioData.darkLogo2} alt="Linkedin" className="hidden dark:block w-8 h-8" />
            </a>
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
