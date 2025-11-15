import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import Certificates from './Certificates';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <div className='font-inter'>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

