import React from 'react';

import { Box, IconButton, NavBreadcrumbs } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';

import { HeaderProps } from './Header.types';
import { useStyles } from './Header.styles';

export const Header = ({ isSidebarVisible, onSidebarOpen }: HeaderProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      {!isSidebarVisible && (
        <IconButton
          className={classes.hideSidebarButton}
          onClick={onSidebarOpen}
          size="small"
          variant="roundedContained"
        >
          <HideIcon />
        </IconButton>
      )}
      <NavBreadcrumbs />
    </Box>
  );
};
