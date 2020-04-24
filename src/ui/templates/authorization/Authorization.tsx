import React from 'react';

import { Grid, Paper } from 'ui/atoms';

import { AuthorizationProps } from './Authorization.types';
import { useStyles } from './Authorization.styles';

export const Authorization = ({ children }: AuthorizationProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.content}>{children}</div>
      </Grid>
    </Grid>
  );
};
