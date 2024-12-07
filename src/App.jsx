import React from 'react';

import LanguageProvider from './contexts/LanguageContext';
import './reset.css'
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {

  return (

    <LanguageProvider>
      
        <div className='font-inter'>
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      
    </LanguageProvider>

  )
}

export default App
