import React from 'react';
import "../reset.css"

const Header = ({ bioData }) => {
  return (
    <section className="bg-[#F4F4F4] font-inter text-left px-28 py-24 z-10">

      <header>
        <div>
          <h1 className='font-inter text-3xl'>{bioData.title}</h1>
          <div className="flex justify-center ">
            <p className='text-[42px] max-w-[14]'>{bioData.text}</p>
            <img src={bioData.image} alt="Profile" />
          </div>
        </div>
        <article className='text-lg'>
          <figure className='flex gap-6'>
            <img src={bioData.logo1} alt="Github" />
            <img src={bioData.logo2} alt="Linkedin" />
          </figure>
          <p className='text-lg pt-8 w-2/4'>{bioData.intro}</p>
        </article>
      </header>
    </section>
  );
}

export default Header;
