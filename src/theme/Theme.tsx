import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, SimplePaletteColorOptions } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

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
      root: {
        width: 32,
        height: 32,
      },
      colorDefault: {
        color: palette.gray.main,
        backgroundColor: palette.gray.light,
      },
      rounded: {
        borderRadius: defaultTheme.spacing(1),
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: palette.overlay.main,
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
    MuiBreadcrumbs: {
      root: {
        fontSize: typography.h5.fontSize,
        '& a': {
          color: palette.gray.main,
        },
      },
      separator: {
        color: (palette.primary as SimplePaletteColorOptions).main,
      },
      li: {
        maxWidth: defaultTheme.spacing(13.75),
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    },
    MuiButton: {
      root: {
        borderRadius: defaultTheme.spacing(1),
      },
      containedPrimary: {
        background: palette.gradientPrimary.main,
        '&:disabled': {
          background: palette.gray.light,
        },
      },
      label: {
        textTransform: 'initial',
      },
    },
    MuiCard: {
      root: {
        boxShadow: shadows[1],
        border: 'none',
        '& .MuiTabs-flexContainer': {
          borderBottom: `2px solid ${palette.gray.light}`,
        },
        borderRadius: defaultTheme.spacing(1),
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
          fontWeight: fontWeight.bold,
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
    MuiDialog: {
      paperWidthSm: {
        maxWidth: defaultTheme.spacing(91),
      },
      container: {
        alignItems: 'flex-start',
        marginTop: defaultTheme.spacing(4.5),
      },
    },
    MuiDialogActions: {
      root: {
        padding: defaultTheme.spacing(3),
        paddingTop: 0,
        justifyContent: 'space-between',
        '& > *:only-child': {
          margin: '0 auto',
        },
        color: palette.gray.main,
      },
    },
    MuiDialogContent: {
      root: {
        padding: defaultTheme.spacing(3),
      },
    },
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(3),
        '& h2': {
          ...typography.h2,
          fontWeight: fontWeight.medium,
        },
        '& button:last-child': {
          float: 'right',
        },
      },
    },
    MuiExpansionPanel: {
      rounded: {
        '&:last-child': {
          borderBottomLeftRadius: defaultTheme.spacing(1),
          borderBottomRightRadius: defaultTheme.spacing(1),
        },
        '&:first-child': {
          borderTopLeftRadius: defaultTheme.spacing(1),
          borderTopRightRadius: defaultTheme.spacing(1),
        },
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
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
        '&:not([variant="roundedContained"]):not([variant="rounded"])': {
          boxShadow: shadows[2],
        },
      },
    },
    MuiInputBase: {
      root: {
        '& fieldset > legend > span': {
          display: 'none',
        },
        '&.Mui-disabled': {
          opacity: 1,
          background: 'rgba(243, 245, 250, .5)',
          color: 'rgba(130, 141, 184, .5)',
          '& .MuiSvgIcon-root, & path': {
            color: 'rgba(130, 141, 184, .5)',
            fill: 'rgba(130, 141, 184, .5)',
          },
        },
        '& .Mui-disabled::placeholder': {
          color: 'rgba(130, 141, 184, .5)',
        },
      },
      input: {
        fontSize: '0.9rem',
        height: defaultTheme.spacing(2),
        color: palette.black.main,
        '&.Mui-disabled': {
          color: palette.gray.main,
        },
        '&:-webkit-autofill': {
          transitionDelay: '9999999s',
        },
        '&::placeholder': {
          color: palette.gray.main,
          opacity: 1,
          fontSize: defaultTheme.spacing(1.75),
        },
      },
      adornedEnd: {
        color: palette.gray.main,
        fontSize: typography.h5.fontSize,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: defaultTheme.spacing(1),
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: defaultTheme.spacing(1),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        background: palette.gray.light,
        '&:hover:not(.Mui-focused):not( .Mui-disabled) .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.gray.main,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopStyle: 'solid',
          borderLeftStyle: 'solid',
          borderRightStyle: 'solid',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderBottomWidth: 1,
        },
        '&.Mui-error': {
          background: palette.red.light,
          '& .MuiSvgIcon-root path': {
            fill: palette.red.main,
          },
        },
        '& .MuiOutlinedInput-inputMarginDense ': {
          padding: `${defaultTheme.spacing(1.5)}px ${defaultTheme.spacing(2)}px`,
        },
        '& .MuiIconButton-root': {
          padding: 0,
        },
      },
      notchedOutline: {
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottomRightRadius: 0,
        borderColor: palette.gray.main,
      },
      adornedEnd: {
        paddingRight: defaultTheme.spacing(1),
      },
      input: {
        padding: `${defaultTheme.spacing(2)}px ${defaultTheme.spacing(1.75)}px`,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: typography.h4.fontSize,
        lineHeight: typography.h4.lineHeight,
      },
    },
    MuiInputLabel: {
      root: {
        color: `${palette.black.main}`,
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          position: 'inherit',
          transform: 'none',
          fontSize: typography.h5.fontSize,
          fontWeight: fontWeight.medium,
          lineHeight: typography.h5.lineHeight,
          marginTop: 0,
          marginBottom: defaultTheme.spacing(1),
        },
        '&.Mui-disabled': {
          color: palette.gray.main,
        },
        '& > a': {
          pointerEvents: 'all',
          float: 'right',
        },
      },
    },
    MuiLink: {
      root: {
        fontWeight: typography.fontWeightMedium,
      },
    },
    MuiGrid: {
      item: {
        '&.right': {
          marginLeft: 'auto',
        },
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
        background: palette.gradientPrimary.main,
        borderRadius: 1,
      },
    },
  },
});

export const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
