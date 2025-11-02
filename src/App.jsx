import React from 'react';

import LanguageProvider from './contexts/LanguageContext';
import './reset.css'
import WelcomeAnimation from './components/WelcomeAnimation';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certificates from './components/Certificates';


function App() {

  return (

    <LanguageProvider>
      <WelcomeAnimation />
        <div className='font-inter'>
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Certificates />
          <Footer />
        </div>
      
    </LanguageProvider>

  )
}

export default App
