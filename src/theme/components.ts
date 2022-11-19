import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material/styles/createTheme';

import { customError, customSuccess } from './colors';


export const components: Components<Omit<Theme, 'components'>> = {
  MuiIcon:{
    styleOverrides:{
      colorError:{
        fill: customError,
      },
      colorSecondary: {
        fill: customSuccess,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
      textColorSecondary: {
        color: 'black',
      },
    },
  },
};
