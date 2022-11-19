import React, { lazy, Suspense, useState } from 'react';
import { CircularProgress, Stack, styled } from '@mui/material';

import { PageTabs } from '../PageTabs';
import { PAGE_TABS } from '../PageTabs/constants';
import { PERIOD_TABS } from '../PeriodTabs/constants';
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
  const [currentPage, setCurrentPage] = useState<PAGE_TABS>(PAGE_TABS.History);
  const [currentPeriod, setCurrentPeriod] = useState<PERIOD_TABS>(PERIOD_TABS.ONE_HOUR);
  return (
      <StyledWrapper gap={4}>
          <Suspense fallback={<CircularProgress/>}>
              <WebSocketContext>
                  <Header/>
              </WebSocketContext>
              <PageTabs setCurrentPage={setCurrentPage} currentPage={currentPage}/>
              <PeriodTabs currentPeriod={currentPeriod} setCurrentPeriod={setCurrentPeriod}/>
              <HistoryDataContext currentPeriod={currentPeriod}>
                  <Content/>
              </HistoryDataContext>
          </Suspense>
      </StyledWrapper>
  );
};
