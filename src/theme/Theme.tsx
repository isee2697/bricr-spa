import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { typography } from './typography';
import { palette } from './palette';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiContainer: {
      root: {
        [defaultTheme.breakpoints.up('md')]: {
          width: 768,
        },
        [defaultTheme.breakpoints.up('lg')]: {
          width: 1024,
        },
      },
    },
  },
});

export const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
