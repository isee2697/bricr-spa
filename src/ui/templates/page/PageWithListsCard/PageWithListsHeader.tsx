import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Box, IconButton, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { HideIcon } from 'ui/atoms/icons/hide/HideIcon';
import { useLayout } from 'context/layout';

import { PageWithListsHeaderProps } from './PageWithListsCard.types';
import { useStyles } from './PageWithListsCard.styles';

export const PageWithListsHeader = ({
  onAdd,
  titleId,
  addButtonTextId,
  hideAddButton,
  buttons,
}: PageWithListsHeaderProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();

  return (
    <Grid className={classes.header} container xs={12} item justify="space-between">
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
        <Typography variant="h1">{formatMessage({ id: titleId })}</Typography>
      </Box>
      {buttons}
      {!hideAddButton && (
        <Button
          color="primary"
          variant="contained"
          onClick={() => onAdd && onAdd()}
          startIcon={<AddIcon color="inherit" />}
          size="small"
        >
          {formatMessage({ id: addButtonTextId })}
        </Button>
      )}
    </Grid>
  );
};
