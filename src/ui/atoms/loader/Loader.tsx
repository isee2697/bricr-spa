import CircularProgress from '@material-ui/core/CircularProgress';

import React from 'react';

import { useStyles } from './Loader.styles';

export const Loader = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.progress} />;
};
