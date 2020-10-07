import CircularProgressBase from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';
import { CircularProgressProps } from '@material-ui/core';

export const CircularProgress: React.ComponentType<CircularProgressProps> = withStyles(theme => ({
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
}))(CircularProgressBase);

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
  },
  top: {
    opacity: 0.4,
  },
  bottom: {
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
    '& circle': {
      strokeDasharray: `${theme.spacing(4)}px ${theme.spacing(25)}px`,
    },
  },
}));
