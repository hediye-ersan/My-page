import React, { createContext, useState, useContext } from 'react';

export const DarkModeContext = createContext();

 const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false; 
  }); 

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev; 
      localStorage.setItem('isDarkMode', JSON.stringify(newMode)); 
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
export default DarkModeProvider;