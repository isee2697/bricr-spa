import React from 'react';

import { Box, IconButton, Grid } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';
import { NavBreadcrumbs } from 'ui/atoms/navBreadcrumbs/NavBreadcrumbs';

import { ProjectDetailsHeaderProps } from './ProjectDetailsHeader.types';
import { useStyles } from './ProjectDetailsHeader.styles';

export const ProjectDetailsHeader = ({ action, isSidebarVisible, onSidebarOpen }: ProjectDetailsHeaderProps) => {
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
        {action}
      </Box>
    </Grid>
  );
};
