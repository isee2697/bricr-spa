import React from 'react';

import { List } from 'ui/atoms';

import { SideMenuProps } from './SideMenu.types';
import { useStyles } from './SideMenu.styles';

export const SideMenu = ({ children }: SideMenuProps) => {
  const classes = useStyles();

  return (
    <List className={classes.list} data-testid="side-menu">
      {children}
    </List>
  );
};
