import React, { useState } from 'react';
import classNames from 'classnames';

import { List, ListItem, Typography, Collapse, Box } from 'ui/atoms';

import { SideMenuItemProps } from './SideMenuItem.types';
import { useStyles } from './SideMenuItem.styles';

export const SideMenuItem = ({ icon, title, selected, onClick, children, className }: SideMenuItemProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (children) {
      setOpen(open => !open);
    }

    onClick && onClick();
  };

  return (
    <>
      <ListItem button className={classNames(classes.item, className)} selected={selected} onClick={handleClick}>
        {icon || <Box ml={3} />}
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
};
