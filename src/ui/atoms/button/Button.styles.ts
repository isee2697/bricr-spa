import ButtonBase from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ButtonProps } from '@material-ui/core/Button';
import React from 'react';

export const Button: React.ComponentType<ButtonProps> = withStyles(theme => ({
  containedPrimary: {
    '&:disabled': {
      position: 'relative',
      background: theme.palette.gradientPrimary.main,
      color: theme.palette.white.main,
      '&:before': {
        position: 'absolute',
        content: '""',
        width: '100%',
        height: '100%',
        background: theme.palette.white.main,
        opacity: 0.4,
      },
    },
  },
  sizeSmall: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  sizeLarge: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  startIcon: {
    marginRight: 4,
  },
  endIcon: {
    marginLeft: 4,
  },
}))(ButtonBase);

export const useStyles = makeStyles(theme => ({
  ghost: {
    background: 'transparent',
    borderColor: ({ variant }: Pick<ButtonProps, 'variant'>) =>
      variant === 'outlined' ? theme.palette.gray.main : 'none',
    boxShadow: 'none',
    color: 'inherit',
    '& svg': {
      color: 'currentColor',
    },
    '&:hover': {
      background: 'transparent',
      boxShadow: 'none',
    },
  },
}));
