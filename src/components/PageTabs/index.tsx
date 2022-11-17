import React, { FC } from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { PAGE_TABS, PAGE_TABS_LINK } from './constants';


const TabsWrapper = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
}));

export interface PageTabsProps {
  currentPage: PAGE_TABS,
  setCurrentPage: (page: PAGE_TABS) => void,
}

export const PageTabs: FC<PageTabsProps> = ({ setCurrentPage, currentPage }) => {
  const history = useHistory();
  return (
      <TabsWrapper>
          <Tabs value={currentPage} onChange={(_, newValue) => setCurrentPage(newValue)}>
              {Object.values(PAGE_TABS).map((item) => (
                  <Tab
                  onClick={() => {
                    history.push(PAGE_TABS_LINK[item]);
                  }}
                  value={item}
                  key={item}
                  label={item}
                  id={item}
                  aria-controls={`tab-${item}`}/>
              ))}
          </Tabs>
      </TabsWrapper>
  );
};
