import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Paper, Link } from 'ui/atoms';
import { TopBar } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ClaimSpaceContextController } from '../../../context/claimSpaceContext/ClaimSpaceContextController';
import { RegisterInfoScreen } from '../../../app/register/RegisterInfoScreen';
import { LocaleSwitch } from 'ui/organisms';

import { AuthorizationProps } from './Authorization.types';
import { useStyles } from './Authorization.styles';

export const Authorization = ({ children }: AuthorizationProps) => {
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();
  const isAuthPath = pathname.includes('auth');
  const classes = useStyles({ isAuthPath });

  return (
    <ClaimSpaceContextController>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8} md={7} lg={4} component={Paper} elevation={6} square>
          <TopBar className={classes.topBar} />

          <Grid item xs={10} md={9} lg={9} className={classes.content}>
            {children}
            {pathname !== AppRoute.login && isAuthPath && (
              <Link component={RouterLink} className={classes.backLink} to={AppRoute.login}>
                {formatMessage({ id: 'authorization.back_to_login' })}
              </Link>
            )}
          </Grid>
        </Grid>
        <Grid className={classes.language} item xs={2}>
          <LocaleSwitch isFormField={false} />
        </Grid>
        <Grid item xs={false} sm={4} md={5} lg={8} className={classes.image}>
          {pathname === AppRoute.register && <RegisterInfoScreen />}
        </Grid>
      </Grid>
    </ClaimSpaceContextController>
  );
};
