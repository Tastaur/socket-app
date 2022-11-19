import React, { FC } from 'react';
import {
  Box, Divider, Stack, styled, Typography,
} from '@mui/material';
import BitcoinIcon from 'static/btc.png';
import { BitcoinData } from 'context/WebSocketContext/types';
import { format } from 'date-fns';
import { alpha } from '@mui/material/styles';


const StyledDivider = styled(Divider)(({ theme }) => ({
  marginLeft: theme.spacing(6),
  borderColor: alpha(theme.palette.divider, 0.04),
}));

type LeftHeaderSectionProps = Pick<BitcoinData, 'lastUpdate'>;

export const LeftHeaderSection: FC<LeftHeaderSectionProps> = ({ lastUpdate }) => {
  const lastDate = new Date(lastUpdate);
  return (
    <Stack direction='column' gap={1} width="20%">
      <Stack direction="row" spacing={1} alignItems='center'>
        <Box>
          <img src={BitcoinIcon} alt='Bitcoin'/>
        </Box>
        <Typography variant='h4'>Bitcoin</Typography>
      </Stack>
      <StyledDivider variant="middle" orientation="horizontal"/>
      <Box>
        <Typography variant='subtitle1' color="textSecondary">
          As of: {format(lastDate, 'MMM dd, yyyy k:mm OOOO')}
        </Typography>
      </Box>
    </Stack>
  
  );
};
