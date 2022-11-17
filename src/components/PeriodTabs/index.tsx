import React, { FC } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import { PERIOD_TABS, PERIOD_TABS_NAME_RECORD } from './constants';


export interface PeriodTabsProps {
  currentPeriod: PERIOD_TABS,
  setCurrentPeriod: (page: PERIOD_TABS) => void,
}

export const PeriodTabs: FC<PeriodTabsProps> = ({ setCurrentPeriod, currentPeriod }) => {
  return (
      <Box>
          <Tabs
            TabIndicatorProps={{
              style: { background: 'black' },
            }}
            textColor="inherit"
            value={currentPeriod}
            onChange={(_, newValue) => setCurrentPeriod(newValue)}>
              {Object.values(PERIOD_TABS).map((item) => (
                  <Tab
                    value={item}
                   key={item}
                   label={PERIOD_TABS_NAME_RECORD[item]}
                   id={item}
                   aria-controls={`tab-${item}`}/>
              ))}
          </Tabs>
      </Box>
  );
};
