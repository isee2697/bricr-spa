import React from 'react';

import { IconButton, Box, Grid } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons/hide/HideIcon';
import { NavBreadcrumbs } from 'ui/atoms/navBreadcrumbs/NavBreadcrumbs';

import { PimDetailsHeaderProps } from './PimDetailsHeader.types';
import { useStyles } from './PimDetailsHeader.styles';

export const PimDetailsHeader = ({ isSidebarVisible, onSidebarOpen, action }: PimDetailsHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid xs={12} item>
      <Box className={classes.root} display="flex" justifyContent="space-between" alignItems="center">
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
    </Grid>
  );
};
