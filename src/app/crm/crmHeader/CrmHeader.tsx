import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Box, IconButton, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { HideIcon } from 'ui/atoms/icons/hide/HideIcon';
import { useModalDispatch } from 'hooks';
import { CrmType } from 'api/types';

import { CrmHeaderProps } from './CrmHeader.types';
import { useStyles } from './CrmHeader.styles';

export const CrmHeader = ({ type, isSidebarVisible, onSidebarOpen }: CrmHeaderProps) => {
  const { open } = useModalDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid container xs={12} item justify="space-between">
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
        <Typography variant="h1">{formatMessage({ id: 'crm.title' })}</Typography>
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() => (type === CrmType.Relation ? open('add-relation') : open('add-business'))}
        startIcon={<AddIcon color="inherit" />}
        size="small"
      >
        {formatMessage({ id: `crm.add.${type}` })}
      </Button>
    </Grid>
  );
};
