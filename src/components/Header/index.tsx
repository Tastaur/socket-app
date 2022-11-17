import React from 'react';
import { Stack, styled } from '@mui/material';


import { BitcoinData } from 'context/WebSocketContext/types';

import { LeftHeaderSection } from './LeftHeaderSection';
import { RightHeaderSection } from './RightHeaderSection';


const HeaderWrapper = styled(Stack)(({ theme }) => ({
  boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.37)',
  padding: theme.spacing(2, 4),
}));

export const Header = ({
  last, percentChange, change,
  lastUpdate, quoteSymbol,
}: BitcoinData) => {
  return (
      <HeaderWrapper
          aria-label={'header'}
          direction={'row'}
          justifyContent={'space-between'}
      >
          <LeftHeaderSection lastUpdate={lastUpdate}/>
          <RightHeaderSection
            last={last}
            change={change}
            percentChange={percentChange}
            quoteSymbol={quoteSymbol}
          />
      </HeaderWrapper>
  );
};
