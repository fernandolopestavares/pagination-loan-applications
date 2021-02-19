import React from 'react';

import { ToastProvider } from './toast';
import { CompanyProvider } from './company';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <CompanyProvider>{children}</CompanyProvider>
    </ToastProvider>
  );
};

export default AppProvider;
