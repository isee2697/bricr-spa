import React from 'react';

import { Box, IconButton, Grid, NavBreadcrumbs } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';

import { SettingsHeaderProps } from './SettingsHeader.types';
import { useStyles } from './SettingsHeader.styles';

export const SettingsHeader = ({ action, isSidebarVisible, onSidebarOpen }: SettingsHeaderProps) => {
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
