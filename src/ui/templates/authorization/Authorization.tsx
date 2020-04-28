import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Paper, Link } from 'ui/atoms';
import { TopBar } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { AuthorizationProps } from './Authorization.types';
import { useStyles } from './Authorization.styles';

export const Authorization = ({ children }: AuthorizationProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={8} md={7} lg={4} component={Paper} elevation={6} square>
        <TopBar className={classes.topBar}>
          {pathname !== AppRoute.login && (
            <Link component={RouterLink} className={classes.topBarLink} to={AppRoute.login}>
              {formatMessage({ id: AppMessages['authorization.back_to_login'] })}
            </Link>
          )}
        </TopBar>

        <Grid item xs={10} md={9} lg={9} className={classes.content}>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={false} sm={4} md={5} lg={8} className={classes.image} />
    </Grid>
  );
};
