import React, { lazy, Suspense, useState } from 'react';
import { CircularProgress, Stack, styled } from '@mui/material';

import { useWebSocketContext } from '../../context/WebSocketContext';
import { PageTabs } from '../../components/PageTabs';
import { PAGE_TABS } from '../../components/PageTabs/constants';
import { PERIOD_TABS } from '../../components/PeriodTabs/constants';
import { PeriodTabs } from '../../components/PeriodTabs';
import { Content } from '../../components/Content';


const Header = lazy(() => import('../HeaderContainer/lazy'));

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const MainContainer = () => {
  const { isLoading } = useWebSocketContext();
  const [currentPage, setCurrentPage] = useState<PAGE_TABS>(PAGE_TABS.History);
  const [currentPeriod, setCurrentPeriod] = useState<PERIOD_TABS>(PERIOD_TABS.ONE_HOUR);
  return isLoading ? <CircularProgress/> : (
      <StyledWrapper gap={4}>
          <Suspense fallback={<CircularProgress/>}>
              <Header/>
              <PageTabs setCurrentPage={setCurrentPage} currentPage={currentPage}/>
              <PeriodTabs currentPeriod={currentPeriod} setCurrentPeriod={setCurrentPeriod}/>
              <Content/>
          </Suspense>
      </StyledWrapper>
  );
};
