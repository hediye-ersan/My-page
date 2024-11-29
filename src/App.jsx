
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import './App.css'
import Header from './components/Header';
import Skills from './components/Skills'
import myData from './data/myData.json';

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'Türkçeye Çevir' : 'Switch to English'}
    </button>
  );
};

const DarkModeToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};


function App() {
  

  return (
    
      <DarkModeProvider>
        <LanguageProvider>
          <div>
          <Header />
            <Skills/>
          </div>
        </LanguageProvider>
      </DarkModeProvider>
    
  )
}

export default App
