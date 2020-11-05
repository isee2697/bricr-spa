import React from 'react';

import { Box, Grid, IconButton, NavBreadcrumbs } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';

import { EmailHeaderProps } from './EmailHeader.types';
import { useStyles } from './EmailHeader.styles';

export const EmailHeader = ({ isSidebarVisible, onSidebarOpen, actions }: EmailHeaderProps) => {
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
