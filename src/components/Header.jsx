import React from 'react';
import "../reset.css"
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';

const Header = () => {
  const { language } = useLanguage();  
  const langData = myData[language].bio;
  return (
    <section className="bg-[#F4F4F4] font-inter text-left px-28 py-24 z-10">

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
            <img src={langData.logo1} alt="Github" />
            <img src={langData.logo2} alt="Linkedin" />
          </figure>
          <p className='text-lg pt-8 w-2/4'>{langData.intro}</p>
        </article>
      </header>
    </section>
  );
}

export default Header;
