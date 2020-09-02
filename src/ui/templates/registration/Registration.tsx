import React from 'react';
import { useLocation } from 'react-router-dom';

import { ClaimSpaceContextController } from 'context/claimSpaceContext/ClaimSpaceContextController';
import { Grid, Paper } from 'ui/atoms';
import { TopBar } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { AuthorizationProps } from '../authorization/Authorization.types';
import { RegisterInfoScreen } from 'app/register/RegisterInfoScreen';

import { useStyles } from './Registration.styles';

export const Registration = ({ children }: AuthorizationProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <ClaimSpaceContextController>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8} md={7} lg={4} component={Paper} elevation={6} square>
          <TopBar className={classes.topBar} />

          <Grid item xs={10} md={9} lg={9} className={classes.content}>
            {children}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={4} md={5} lg={8} className={classes.image}>
          {pathname === AppRoute.register && <RegisterInfoScreen />}
        </Grid>
      </Grid>
    </ClaimSpaceContextController>
  );
};
