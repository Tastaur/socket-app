import React from 'react';
import { CircularProgress, Stack, styled } from '@mui/material';
import { useWebSocketContext } from 'context/WebSocketContext';

import { LeftHeaderSection } from './LeftHeaderSection';
import { RightHeaderSection } from './RightHeaderSection';
import { ErrorPage } from '../common/ErrorPage';


const HeaderWrapper = styled(Stack)(({ theme }) => ({
  boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.37)',
  padding: theme.spacing(2, 4),
}));

const PreloaderWrapper = styled(Stack)({
  minHeight: 90,
  width: '100%',
});

export const Header = () => {
  const { data, error, isLoading } = useWebSocketContext();
  if (error){
    return <ErrorPage message={error.message} stack={error.stack}/>;
  }
  
  return <HeaderWrapper
    aria-label="header"
    direction="row"
    justifyContent="space-between"
  >
    {isLoading || !data ?
      (
        <PreloaderWrapper
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress/>
        </PreloaderWrapper>
      ) : (
        <React.Fragment>
          <LeftHeaderSection lastUpdate={data.lastUpdate}/>
          <RightHeaderSection
            last={data.last}
            change={data.change}
            percentChange={data.percentChange}
            quoteSymbol={data.quoteSymbol}
          />
        </React.Fragment>
      )}
  </HeaderWrapper>;
};
