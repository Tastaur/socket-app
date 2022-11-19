import React, { lazy, Suspense } from 'react';
import { CircularProgress, Stack, styled } from '@mui/material';

import { PageTabs } from '../PageTabs';
import { PeriodTabs } from '../PeriodTabs';
import { Content } from '../Content';
import { HistoryDataContext } from '../../context/HistoryDataContext';
import { WebSocketContext } from '../../context/WebSocketContext';


const Header = lazy(() => import('../Header/lazy'));

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  boxSizing: 'border-box',
}));

export const MainLayout = () => {
  return (
    <StyledWrapper gap={4}>
      <Suspense fallback={<CircularProgress/>}>
        <WebSocketContext>
          <Header/>
        </WebSocketContext>
        <HistoryDataContext>
          <PageTabs/>
          <PeriodTabs/>
          <Content/>
        </HistoryDataContext>
      </Suspense>
    </StyledWrapper>
  );
};
