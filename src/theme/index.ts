import { createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';


export const theme = createTheme({
  components: {
    MuiTab:{
      styleOverrides:{
        textColorSecondary: {
          color: 'black',
        },
      },
    },
  },
});
