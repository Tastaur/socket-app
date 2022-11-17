import React, { FC } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';

import { BitcoinData } from 'context/WebSocketContext/types';


type RightHeaderSectionProps = Pick<BitcoinData, 'last' | 'change' | 'percentChange' | 'quoteSymbol'>;

const SubtitlePrice = styled(Stack)(({ theme }) =>({
  padding: theme.spacing(0, 2),
}));


export const RightHeaderSection: FC<RightHeaderSectionProps> = ({
  last,
  percentChange,
  change,
  quoteSymbol,
}) => {
  const isPositive = percentChange > 0 && change > 0;
  const currentTypographyColor = isPositive ? 'green' : 'red';
  const sign = isPositive ? '+' : '-';
  return (
      <Stack direction='column'>
          <Stack gap={2} direction='row'  justifyContent='space-between'>
              <Typography color={currentTypographyColor} variant={'h3'}>
                  {isPositive
                    ? <ArrowDropUpSharpIcon fontSize={'inherit'}  htmlColor={'inherit'}/>
                    : <ArrowDropUpSharpIcon fontSize={'inherit'} htmlColor={'inherit'}/>}
              </Typography>
              <Typography variant='h3'>
                  {`${quoteSymbol}${last.toFixed(2)}`}
              </Typography>
          </Stack>
          <SubtitlePrice direction='row' justifyContent='space-between' gap={1} >
              <Typography variant='h5'  color={currentTypographyColor}>
                  {`${sign}${change.toFixed(2)}`}
              </Typography>
              <Typography variant='h5' color={currentTypographyColor}>
                  {`(${sign}${percentChange.toFixed(2)}%)`}
              </Typography>
          </SubtitlePrice>
      </Stack>
  );
};


