import React from 'react';

import { Box, IconButton, Grid, NavBreadcrumbs, Button } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons';
import { useLayout } from 'context/layout';

import { PageHeaderProps } from './PageHeader.types';
import { useStyles } from './PageHeader.styles';

export const PageHeader = ({ customAction, onAction, actionText, actionIcon }: PageHeaderProps) => {
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
        {!!customAction || !onAction ? (
          customAction
        ) : (
          <Button color="primary" variant="contained" startIcon={actionIcon} onClick={() => onAction()} size="small">
            {actionText}
          </Button>
        )}
      </Box>
    </Grid>
  );
};
