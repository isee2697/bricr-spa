import React from 'react';

import { Grid, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';

/* eslint-disable @typescript-eslint/camelcase */
const mapTypeToPropertyCategory = (type?: string) => {
  const types: Record<string, string> = {
    nc_sale: PropertyCategory.PROJECT,
    nc_rent: PropertyCategory.PROJECT,
  };

  return type && types[type];
};
/* eslint-enable @typescript-eslint/camelcase */

export const PimHeader = ({ type }: { type?: string }) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Grid container xs={12} item justify="space-between">
      <Typography variant="h1">{formatMessage({ id: 'pim.title' })}</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => open('add-new-pim', { propertyCategory: mapTypeToPropertyCategory(type) })}
        startIcon={<AddIcon color="inherit" />}
        size="small"
      >
        {formatMessage({ id: 'pim.add' })}
      </Button>
    </Grid>
  );
};
