import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { MainLayout } from '../components/MainLayout';
import { theme } from '../theme';


export const App = () => {
  return (
      <BrowserRouter>
          <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                  <ErrorBoundary>
                      <MainLayout/>
                  </ErrorBoundary>
              </ThemeProvider>
          </StyledEngineProvider>
      </BrowserRouter>
  );
};
