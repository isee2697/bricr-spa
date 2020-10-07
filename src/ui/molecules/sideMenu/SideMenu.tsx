import React from 'react';
import classNames from 'classnames';
import { List } from 'ui/atoms';

import { SideMenuProps } from './SideMenu.types';
import { useStyles } from './SideMenu.styles';

export const SideMenu = ({ children, className, ...props }: SideMenuProps) => {
  const classes = useStyles();

  return (
    <List className={classNames(classes.list, className)} data-testid="side-menu" {...props}>
      {children}
    </List>
  );
};
