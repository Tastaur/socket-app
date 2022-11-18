import React, { lazy, Suspense, useState } from 'react';
import { CircularProgress, Stack, styled } from '@mui/material';

import { PageTabs } from '../../components/PageTabs';
import { PAGE_TABS } from '../../components/PageTabs/constants';
import { PERIOD_TABS } from '../../components/PeriodTabs/constants';
import { PeriodTabs } from '../../components/PeriodTabs';
import { Content } from '../../components/Content';
import { HistoryDataContext } from '../../context/HistoryDataContext';
import { WebSocketContext } from '../../context/WebSocketContext';


const Header = lazy(() => import('../HeaderContainer/lazy'));

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  boxSizing: 'border-box',
}));

export const MainContainer = () => {
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
