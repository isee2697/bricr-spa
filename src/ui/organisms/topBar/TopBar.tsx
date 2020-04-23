import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar } from 'ui/atoms';
import { Logo } from 'ui/atoms';

import { TopBarProps } from './TopBar.types';
import { useStyles } from './TopBar.styles';

export const TopBar = ({ children }: TopBarProps) => {
  const classes = useStyles();

  return (
    <AppBar color="transparent" className={classes.root} position="sticky">
      <Toolbar>
        <Link to="/">
          <Logo className={classes.logo} />
        </Link>
        {children}
      </Toolbar>
    </AppBar>
  );
};
