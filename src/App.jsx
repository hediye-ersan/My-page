import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LanguageProvider from './contexts/LanguageContext';
import './reset.css'
import WelcomeAnimation from './components/WelcomeAnimation';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';


function App() {

  return (

    <LanguageProvider>
      <WelcomeAnimation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LanguageProvider>

  )
}

export default App
