import React from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import { PAGE_TAB_NAME, PAGE_TABS } from './constants';


const TabsWrapper = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
}));


export const PageTabs = () => {
  const location = useLocation();
  return (
    <TabsWrapper>
      <Tabs value={location.pathname}>
        {Object.values(PAGE_TABS).map((item) => (
          <Tab
            component={Link}
            to={item}
            value={item}
            key={item}
            label={PAGE_TAB_NAME[item]}
            id={item}
            aria-controls={`tab-${item}`}/>
        ))}
      </Tabs>
    </TabsWrapper>
  );
};
