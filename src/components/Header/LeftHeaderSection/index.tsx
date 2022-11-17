import React, { FC } from 'react';
import {
  Box, Divider, Stack, styled, Typography,
} from '@mui/material';

import BitcoinIcon from 'static/btc.png';
import { BitcoinData } from 'context/WebSocketContext/types';


const StyledDivider = styled(Divider)(({ theme }) =>({
  marginLeft: theme.spacing(6),
  borderColor: 'rgb(0 0 0 / 4%)',
}));

type LeftHeaderSectionProps =  Pick<BitcoinData, 'lastUpdate'>;

export const LeftHeaderSection: FC<LeftHeaderSectionProps> = ({ lastUpdate }) => {
  return (
      <Stack direction='column' gap={1} width={'20%'}>
          <Stack direction={'row'} spacing={1} alignItems='center'>
              <Box>
                  <img src={BitcoinIcon} alt='Bitcoin'/>
              </Box>
              <Typography variant='h4'>Bitcoin</Typography>
          </Stack>
          <StyledDivider variant="middle" orientation={'horizontal'}/>
          <Box>
              <Typography variant='subtitle1' color="textSecondary">
                  As of: {new Date(lastUpdate).toUTCString()}
              </Typography>
          </Box>
      </Stack>
  
  );
};
