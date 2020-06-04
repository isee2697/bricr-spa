import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';

import { ParkingForm } from './forms/ParkingForm';
import { SpecialForm } from './forms/SpecialForm';
import { OwnerAssociation } from './forms/OwnerAssocition';

export const Advanced = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.specification.advanced.title' })}</Typography>
        <GenericField
          placeholder="pim_details.specification.description_placeholder"
          name="specification.advanced.description"
        />
      </Grid>
      <Grid xs={12} item>
        <ParkingForm />
      </Grid>
      <Grid xs={12} item>
        <SpecialForm />
      </Grid>
      <Grid xs={12} item>
        <OwnerAssociation />
      </Grid>
    </>
  );
};
