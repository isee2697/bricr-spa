import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { AppBar, Toolbar, Box, Typography, Link } from 'ui/atoms';
import { Logo } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { TopBarProps } from './TopBar.types';
import { useStyles } from './TopBar.styles';

export const TopBar = ({ children, className }: TopBarProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();

  return (
    <AppBar color="transparent" className={classNames(classes.root, className)} position="sticky">
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>

        {pathname === AppRoute.login && (
          <Box display="flex" alignItems="center">
            <Typography variant="h4">{formatMessage({ id: 'authorization.no_account' })}</Typography>
            <Box ml={1} />
            <Link component={RouterLink} to={AppRoute.register}>
              {formatMessage({ id: 'authorization.sign_up' })}
            </Link>
          </Box>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};
