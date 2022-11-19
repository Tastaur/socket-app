import React, { useEffect } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { MainLayout } from '../components/MainLayout';
import { theme } from '../theme';
import { GlobalOverride } from '../components/GlobalOverride';


export const App = () => {
  useEffect(() => {
    const loading = document.getElementById('loading');
    loading?.remove();
  }, []);
  
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalOverride/>
          <ErrorBoundary>
            <MainLayout/>
          </ErrorBoundary>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};
