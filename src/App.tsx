import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Home />
    </AppProvider>
  );
};

export default App;
