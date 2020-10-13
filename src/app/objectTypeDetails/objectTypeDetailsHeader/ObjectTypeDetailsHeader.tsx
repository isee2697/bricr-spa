import React from 'react';
import { Box, IconButton, NavBreadcrumbs } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';

import { ObjectTypeDetailsHeaderProps } from './ObjectTypeDetailsHeader.types';
import { useStyles } from './ObjectTypeDetailsHeader.styles';

export const ObjectTypeDetailsHeader = ({ action, isSidebarVisible, onSidebarOpen }: ObjectTypeDetailsHeaderProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
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
      {action}
    </Box>
  );
};
