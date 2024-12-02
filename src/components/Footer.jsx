import React from 'react';

const Footer = ({ footerData }) => {
  return (
    <footer className="my-24">
      <div className=" mx-auto text-center flex justify-center items-center w-3/5" >
        <p className="text-[42px] font-inter text-right pr-8">{footerData.text}</p>
        <div className="flex flex-col text-left font-playfair w-1/2">
          <a href="https://github.com" className=" text-2xl text-[#1769FF] ">
            {footerData.social.github}
          </a>
          <a href="#" className="text-2xl text-[#0A0A14]">
            {footerData.social.blog}
          </a>
          <a href="https://www.linkedin.com" className="text-2xl text-[#0077B5]">
            {footerData.social.linkedin}
          </a>
          <a href="mailto:someone@example.com" className=" text-2xl text-[#AF0C48]">
            {footerData.social.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
