import { ThemeOptions } from '@mui/material';

// prettier-ignore
const fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
const borderRadiusDefault = 20;

const baseTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960 + 280,
      lg: 1200 + 280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily,
  },
  spacing: 4,
  shape: {
    borderRadius: borderRadiusDefault,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
};

export default baseTheme;
