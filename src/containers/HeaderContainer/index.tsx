import React from 'react';
import { CircularProgress } from '@mui/material';

import { useWebSocketContext } from 'context/WebSocketContext';

import { Header } from '../../components/Header';


export const HeaderContainer = () => {
  const { data, error, isLoading } = useWebSocketContext();
  if (error) {
    return <h2>Ooops!... something went wrong</h2>;
  }
  
  return (data && !isLoading) ? (
      <Header {...data} />
  ) : <CircularProgress/>;
};
