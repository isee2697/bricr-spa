import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ButtonProps } from '@material-ui/core/Button';

export const Button: React.ComponentType<ButtonProps> = withStyles(theme => ({
  sizeSmall: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  sizeLarge: {
    paddingTop: 7,
    paddingBottom: 7,
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
    border: 'none',
    boxShadow: 'none',
    color: 'currentColor',
    '& svg': {
      color: 'currentColor',
    },
    '&:hover': {
      background: 'transparent',
    },
  },
}));
