import React from 'react';
import classNames from 'classnames';

import { List, ListItem, Collapse, Box, Typography } from 'ui/atoms';

import { SideMenuItemProps } from './SideMenuItem.types';
import { useStyles } from './SideMenuItem.styles';

export const SideMenuItem = ({ icon, title, selected, badge, onClick, children, className }: SideMenuItemProps) => {
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
            <Box display="flex" flex={1} justifyContent="space-between">
              <Typography variant="h3" className={classes.title}>
                {title}
              </Typography>
              {badge !== undefined && (
                <Typography variant="h4" className={classes.badge}>
                  {badge === 0 ? '-' : badge}
                </Typography>
              )}
            </Box>
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
