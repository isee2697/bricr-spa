import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, SimplePaletteColorOptions } from '@material-ui/core/styles';

import { typography, fontWeight } from './typography';
import { palette } from './palette';
import { shadows } from './shadows';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette,
  typography,
  shadows,
  overrides: {
    MuiAvatar: {
      colorDefault: {
        color: palette.gray.main,
        backgroundColor: palette.gray.light,
      },
    },
    MuiBadge: {
      badge: {
        width: 16,
        height: 16,
        minWidth: 16,
        fontSize: '0.7rem',
      },
    },
    MuiCard: {
      root: {
        boxShadow: shadows[1],
        border: 'none',
        '& .MuiTabs-flexContainer': {
          borderBottom: `2px solid ${palette.gray.light}`,
        },
        borderRadius: 8,
      },
    },
    MuiCardHeader: {
      root: {
        paddingBottom: 0,
      },
      title: {
        ...typography.h2,
      },
      action: {
        marginTop: 'auto',
        marginRight: 'auto',
      },
    },
    MuiCardActions: {
      root: {
        borderTop: `2px solid ${palette.gray.light}`,
        padding: defaultTheme.spacing(2),
        '& .MuiButton-label': {
          textTransform: 'initial',
          color: palette.gray.main,
          fontWeight: fontWeight.semibold,
        },
      },
    },
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
    MuiTab: {
      root: {
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'initial',
        '&.MuiTab-textColorPrimary.Mui-selected, &:hover': {
          color: palette.black.main,
          '& > .MuiTab-wrapper > svg': {
            color: (palette.primary as SimplePaletteColorOptions).main,
          },
        },
      },
      wrapper: {
        flexDirection: 'row',
        '& > *:first-child': {
          marginRight: 4,
        },
      },
      labelIcon: {
        minHeight: 48,
      },
    },
    MuiTabs: {
      indicator: {
        '&[class*="PrivateTabIndicator-colorPrimary"]': {
          background: palette.gradientPrimary.main,
          borderRadius: 1,
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
