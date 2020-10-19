import React from 'react';

import { Grid, Box, IconButton } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons/hide/HideIcon';
import { NavBreadcrumbs } from 'ui/atoms/navBreadcrumbs/NavBreadcrumbs';

import { DmsHeaderProps } from './DmsHeader.types';
import { useStyles } from './DmsHeader.styles';

export const DmsHeader = ({
  isSidebarVisible,
  onSidebarOpen,
}: DmsHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid xs={12} item>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' alignItems='center'>
          {!isSidebarVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={onSidebarOpen}
              size='small'
              variant='roundedContained'
            >
              <HideIcon />
            </IconButton>
          )}
          <NavBreadcrumbs />
        </Box>
      </Box>
    </Grid>
  );
};
