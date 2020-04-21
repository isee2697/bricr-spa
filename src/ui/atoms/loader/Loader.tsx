import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './Loader.styles';

export const Loader = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.progress} />;
};
