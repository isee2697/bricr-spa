import React from 'react';
import classNames from 'classnames';

import { List, ListItem, Collapse, Box, Typography } from 'ui/atoms';

import { SideMenuItemProps } from './SideMenuItem.types';
import { useStyles } from './SideMenuItem.styles';

export const SideMenuItem = ({ icon, title, selected, onClick, children, className }: SideMenuItemProps) => {
  const classes = useStyles();

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <>
      <ListItem button className={classNames(classes.item, className)} selected={selected} onClick={handleClick}>
        {typeof title === 'string' ? (
          <>
            {icon || <Box ml={3} />}
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
          </>
        ) : (
          title
        )}
      </ListItem>
      {children && (
        <Collapse in={selected} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
};
