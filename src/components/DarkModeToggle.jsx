import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sayfa yüklendiğinde kullanıcının tercihini kontrol et
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      const darkModeActive = savedMode === 'true';
      setIsDarkMode(darkModeActive);
      if (darkModeActive) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Dark Mode değişimini yönet
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div className='flex gap-2 justify-center items-center'>
    <button
      className={`p-1 w-16 flex focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2
      ${isDarkMode ? 'bg-[#000000] text-yellow-300 justify-start' : 'bg-[#E92577] text-gray-800 justify-end'} 
      rounded-full transition-all duration-300`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDarkMode}
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
    <span>
      {isDarkMode ? 'LIGHT MODE':'DARK MODE'}
    </span>
  </div>
);
};

export default DarkModeToggle;
