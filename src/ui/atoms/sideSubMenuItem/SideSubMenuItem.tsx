import React from 'react';
import { SideMenuItem } from 'ui/atoms';

import { SideSubMenuItemProps } from './SideSubMenuItem.types';
import { useStyles } from './SideSubMenuItem.styles';

export const SideSubMenuItem = (props: SideSubMenuItemProps) => {
  const classes = useStyles();

  return <SideMenuItem className={classes.item} {...props} />;
};
