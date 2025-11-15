import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LanguageProvider from './contexts/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import './reset.css'
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';


function App() {

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
