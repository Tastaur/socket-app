import React from 'react';
import { GlobalStyles, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';


export const SCROLLBAR_SIZE = 6;

export const GlobalOverride = () => {
  const theme = useTheme();
  
  return (
    <GlobalStyles styles={{
      html: {
        ['*::-webkit-scrollbar']: {
          width: SCROLLBAR_SIZE,
          height: SCROLLBAR_SIZE,
          ['&-track']: {
            backgroundColor: 'transparent',
          },
          ['&-thumb']: {
            borderRadius: 8,
            backgroundColor: alpha(theme.palette.divider, 0.2),
            ['&:hover']: {
              backgroundColor: theme.palette.divider,
            },
          },
        },
      },
      ['::selection']: {
        backgroundColor: theme.palette.divider,
      },
    }}
    />
  );
};
