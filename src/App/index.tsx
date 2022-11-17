import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { WebSocketContext } from '../context/WebSocketContext';
import { MainContainer } from '../containers/MainContainer';
import { theme } from '../theme';


export const App = () => {
  return (
      <BrowserRouter >
          <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                  <ErrorBoundary>
                      <WebSocketContext>
                          <MainContainer/>
                      </WebSocketContext>
                  </ErrorBoundary>
              </ThemeProvider>
          </StyledEngineProvider>
      </BrowserRouter>
  );
};
