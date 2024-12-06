import React from 'react';

import LanguageProvider from './contexts/LanguageContext';
import DarkModeProvider, { useDarkMode } from './contexts/DarkModeContext';
import './reset.css'
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';








function App() {

  return (

    <LanguageProvider>
      <DarkModeProvider>
        <div className="bg-[url('/images/sayfa-susleri.png')] z-10 relative">
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </DarkModeProvider>
    </LanguageProvider>

  )
}

export default App
