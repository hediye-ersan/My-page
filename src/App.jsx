import React, { useState } from 'react';

import LanguageProvider, {useLanguage} from './contexts/LanguageContext';
import DarkModeProvider, {useDarkMode} from './contexts/DarkModeContext';
import './App.css'
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { FaMoon, FaSun } from 'react-icons/fa';

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      onClick={toggleLanguage}
    >
      {language === 'en' ? 'Türkçeye Çevir' : 'Switch to English'}
    </button>
  );
};

const DarkModeToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={`p-1 w-16  flex
      ${isDarkMode ? 'bg-gray-900 text-yellow-300 justify-start' : 'bg-[#E92577] text-gray-800 justify-end'} 
      rounded-full transition-all duration-300`}
      onClick={toggleDarkMode}
    >
      {/* İç yuvarlak simge */}
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full 
        ${isDarkMode ? 'bg-gray-900' : 'bg-yellow-300'}`}
      >
        {isDarkMode ? (
          <FaMoon className="text-yellow-300" />
        ) : (
          <FaSun className="text-yellow-300" />
        )}
      </div>
    </button>

  );
};


function App() {
  return (
    <>
      <LanguageProvider>
        <DarkModeProvider>
          <div className="bg-[url('/images/sayfa-susleri.png')] bg-no-repeat z-20 w-full">
            <DarkModeToggleButton/>
            <LanguageToggleButton />
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </div>
        </DarkModeProvider>
      </LanguageProvider>
    </>
  )
}

export default App
