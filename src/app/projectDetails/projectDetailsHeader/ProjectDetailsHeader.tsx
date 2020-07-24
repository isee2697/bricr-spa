import React from 'react';

import { Box, Grid, IconButton } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';
import { NavBreadcrumbs } from 'ui/atoms/navBreadcrumbs/NavBreadcrumbs';

import { useStyles } from './ProjectDetailsHeader.styles';
import { ProjectDetailsHeaderProps } from './ProjectDetailsHeader.types';

export const ProjectDetailsHeader = ({ isSidebarVisible, onOpenSidebar, action }: ProjectDetailsHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid xs={12} item>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {!isSidebarVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={onOpenSidebar}
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
