import React from 'react';

import { Box, IconButton, Grid, NavBreadcrumbs } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';
import { useLayout } from 'context/layout';

import { SettingsHeaderProps } from './SettingsHeader.types';
import { useStyles } from './SettingsHeader.styles';

export const SettingsHeader = ({ action }: SettingsHeaderProps) => {
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const classes = useStyles();

  return (
    <Grid xs={12} item>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {!isSidebarMenuVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={() => setSidebarMenuVisible(true)}
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
