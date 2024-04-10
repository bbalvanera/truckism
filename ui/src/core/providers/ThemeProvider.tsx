import React, { PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '@styles/themes';

console.log('defaultTheme', defaultTheme);

const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => (
  <MuiThemeProvider theme={defaultTheme}>
    <CssBaseline enableColorScheme />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
