import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';

import { CrmHeaderProps } from './CrmHeader.types';

export const CrmHeader = ({ type }: CrmHeaderProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid container xs={12} item justify="space-between">
      <Typography variant="h1">{formatMessage({ id: 'crm.title' })}</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {}}
        startIcon={<AddIcon color="inherit" />}
        size="small"
      >
        {formatMessage({ id: `crm.add.${type}` })}
      </Button>
    </Grid>
  );
};
