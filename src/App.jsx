import React, { useState } from 'react';

import LanguageProvider, { useLanguage } from './contexts/LanguageContext';
import DarkModeProvider, { useDarkMode } from './contexts/DarkModeContext';
import './App.css'
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import myData from './data/myData.json';

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
      className="mt-4 ml-4 px-4 py-2 bg-gray-800 text-white rounded-md"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};


function App() {
  const [language, setLanguage] = useState('en');
  const langData = myData[language];
  

  return (
    <>
      <LanguageProvider>
        <DarkModeProvider>
        <div className="bg-[url('/images/sayfa-susleri.png')] bg-no-repeat z-20 w-full">
          <DarkModeToggleButton/>
          <LanguageToggleButton />
            <Header bioData={langData.bio} />
            <Skills skillsData={langData.skills} />
            <Profile profileData={langData.profile} />
            <Projects projectsData={langData.project} />
            <Footer footerData={langData.footer} />
          </div>
        </DarkModeProvider>
      </LanguageProvider>
    </>
  )
}

export default App
