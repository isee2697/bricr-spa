import React from 'react';

import { Grid, Paper } from 'ui/atoms';

import { AuthorizationProps } from './Authorization.types';
import { useStyles } from './Authorization.styles';

export const Authorization = ({ children }: AuthorizationProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={8} md={6} lg={4} component={Paper} elevation={6} square>
        <Grid item xs={10} lg={8} className={classes.content}>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={false} sm={4} md={6} lg={8} className={classes.image} />
    </Grid>
  );
};
