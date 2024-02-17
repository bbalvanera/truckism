import React from 'react';
import ApiProvider from '@core/providers/ApiProvider';
import SnackbarProvider from '@core/providers/SnackbarProvider';
import ThemeProvider from '@core/providers/ThemeProvider';
import AppRoutes from 'app/AppRoutes';

import './App.css';

function App() {
  return (
    <ApiProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
