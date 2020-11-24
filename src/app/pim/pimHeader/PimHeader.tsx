import React from 'react';

import { Grid, Typography, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { PimTypes } from 'app/pim/dictionaries';

const mapTypeToPropertyCategory = (type?: string) => {
  const foundType = PimTypes.find(pimType => pimType.name === type);
  const category = !!foundType?.isProject ? PropertyCategory.PROJECT : PropertyCategory.PROPERTY;

  return { propertyCategory: category, availableTypes: foundType?.types };
};

export const PimHeader = ({ type }: { type?: string }) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Grid container xs={12} item justify="space-between">
      <Typography variant="h1">{formatMessage({ id: 'pim.title' })}</Typography>
      <Grid>
        <Button onClick={() => open('move-pim')}>{formatMessage({ id: 'pim.move' })}</Button>{' '}
        <Button
          color="primary"
          variant="contained"
          onClick={() => open('add-new-pim', mapTypeToPropertyCategory(type))}
          startIcon={<AddIcon color="inherit" />}
          size="small"
        >
          {formatMessage({ id: 'pim.add' })}
        </Button>
      </Grid>
    </Grid>
  );
};
