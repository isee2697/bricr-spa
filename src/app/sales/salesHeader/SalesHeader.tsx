import React from 'react';

import { Box, Grid, IconButton, NavBreadcrumbs } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';

import { SalesHeaderProps } from './SalesHeader.types';
import { useStyles } from './SalesHeader.styles';

export const SalesHeader = ({ isSidebarVisible, onSidebarOpen, actions }: SalesHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid xs={12} item>
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
        {actions}
      </Box>
    </Grid>
  );
};
