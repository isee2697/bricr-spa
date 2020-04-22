import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { typography } from './typography';
import { palette, shadows } from './palette';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette,
  typography,
  shadows,
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
    MuiIconButton: {
      colorPrimary: {
        background: palette.gradientPrimary.main,
        '& svg': {
          color: palette.white.main,
        },
      },
      sizeSmall: {
        padding: 4,
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
