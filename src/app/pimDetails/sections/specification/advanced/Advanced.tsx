import React from 'react';

import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { ParkingForm } from './forms/ParkingForm';
import { SpecialForm } from './forms/SpecialForm';
import { OwnerAssociation } from './forms/OwnerAssocition';

export const Advanced = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page
        title={formatMessage({ id: 'pim_details.specification.advanced.title' })}
        placeholder="pim_details.specification.description_placeholder"
        name="specification.advanced.description"
      >
        <Grid xs={12} item>
          <ParkingForm />
        </Grid>
        <Grid xs={12} item>
          <SpecialForm />
        </Grid>
        <Grid xs={12} item>
          <OwnerAssociation />
        </Grid>
      </Page>
    </>
  );
};
