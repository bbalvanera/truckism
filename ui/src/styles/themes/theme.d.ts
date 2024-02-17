import { Color } from '@mui/material';
import type { PaletteColorOptions, PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    tooltip?: PaletteColorOptions;
    shade?: Partial<Color>;
  }

  interface Palette {
    tooltip?: PaletteColor;
    shade?: Partial<Color>;
  }
}
