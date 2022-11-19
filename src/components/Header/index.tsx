import React from 'react';
import { CircularProgress, Stack, styled } from '@mui/material';

import { useWebSocketContext } from 'context/WebSocketContext';

import { LeftHeaderSection } from './LeftHeaderSection';
import { RightHeaderSection } from './RightHeaderSection';


const HeaderWrapper = styled(Stack)(({ theme }) => ({
  boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.37)',
  padding: theme.spacing(2, 4),
}));

export const Header = () => {
  const { data, error, isLoading } = useWebSocketContext();
  if (error) {
    return <h2>Ooops!... something went wrong</h2>;
  }
  
  return <HeaderWrapper
      aria-label={'header'}
      direction={'row'}
      justifyContent={'space-between'}
  >
      {isLoading || !data ?
        (
            <CircularProgress/>
        ) : (
            <>
                <LeftHeaderSection lastUpdate={data.lastUpdate}/>
                <RightHeaderSection
                  last={data.last}
                  change={data.change}
                  percentChange={data.percentChange}
                  quoteSymbol={data.quoteSymbol}
              />
            </>
        )}
  </HeaderWrapper>;
};
