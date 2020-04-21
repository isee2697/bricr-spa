import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { AppRoutes } from 'routing/AppRoutes';
import { AppRoute } from 'routing/AppRoute.enum';
import { AppBar, Toolbar, Typography, Button, Card, CardContent } from 'ui/atoms';

import { useStyles } from './App.styles';

export const App = () => {
  const { isAuthorized } = useAuthState();
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            Demo App
          </Typography>
          <Link to={AppRoute.home} className={classes.menuButton}>
            <Button color="secondary" variant={pathname === AppRoute.home ? 'outlined' : 'contained'}>
              Home
            </Button>
          </Link>
          <Link to={AppRoute.about} className={classes.menuButton}>
            <Button color="secondary" variant={pathname === AppRoute.about ? 'outlined' : 'contained'}>
              About
            </Button>
          </Link>
          <Link to={AppRoute.help} className={classes.menuButton}>
            <Button color="secondary" variant={pathname === AppRoute.help ? 'outlined' : 'contained'}>
              Help
            </Button>
          </Link>
          <Link to={isAuthorized ? AppRoute.logout : AppRoute.login} className={classes.menuButton}>
            <Button color="secondary" variant={pathname === AppRoute.login ? 'outlined' : 'contained'}>
              {isAuthorized ? 'Logout' : 'Login'}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Card className={classes.content} variant="outlined">
        <CardContent>
          <AppRoutes />
        </CardContent>
      </Card>
    </div>
  );
};
