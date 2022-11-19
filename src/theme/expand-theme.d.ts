import { ThemeColors } from './colors';


interface PaletteOverride {
  custom: ThemeColors
}

interface PaletteOptionsOverride {
  custom: ThemeColors
}

declare module '@mui/material/styles' {
  interface Palette extends PaletteOverride {}
  interface PaletteOptions extends PaletteOptionsOverride {}
}
