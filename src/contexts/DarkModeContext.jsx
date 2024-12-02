import React, { createContext, useState, useContext } from 'react';

export const DarkModeContext = createContext();

 const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev); 
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
export default DarkModeProvider;