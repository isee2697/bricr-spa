import React from 'react';
import classNames from 'classnames';

import { ListItem, Typography } from 'ui/atoms';

import { SideMenuItemProps } from './SideMenuItem.types';
import { useStyles } from './SideMenuItem.styles';

export const SideMenuItem = ({ icon, title, selected, onClick, className }: SideMenuItemProps) => {
  const classes = useStyles();

  return (
    <ListItem button className={classNames(classes.item, className)} selected={selected} onClick={onClick}>
      {icon}
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
    </ListItem>
  );
};
