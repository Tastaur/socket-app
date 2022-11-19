import { PaletteOptions } from '@mui/material/styles/createPalette';

import {  customSuccess, customError, custom } from './colors';


export const palette: PaletteOptions = {
  success: {
    main: customSuccess,
  },
  error: {
    main: customError,
  },
  custom,
};
