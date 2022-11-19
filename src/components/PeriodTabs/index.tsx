import React, { FC } from 'react';
import { Box, Tab, Tabs, useTheme } from '@mui/material';

import { PERIOD_TABS, PERIOD_TABS_NAME_RECORD } from './constants';
import { useHistoryDataContext } from '../../context/HistoryDataContext';


export const PeriodTabs: FC = () => {
  const { currentPeriod, setCurrentPeriod } = useHistoryDataContext();
  const theme = useTheme();
  return (
    <Box>
      <Tabs
        TabIndicatorProps={{
          style: { background: theme.palette.common.black },
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
