import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import Certificates from './Certificates';
import Footer from './Footer';
import FeedbackModal from './FeedbackModal';

const HomePage = () => {
  return (
    <>
      <FeedbackModal />
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

