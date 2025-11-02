import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LanguageProvider from './contexts/LanguageContext';
import './reset.css'
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';


function App() {

  return (

    <LanguageProvider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </LanguageProvider>

  )
}

export default App
