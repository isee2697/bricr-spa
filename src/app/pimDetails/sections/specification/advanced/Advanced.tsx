import React from 'react';

import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { AdvancedProps } from 'app/pimDetails/sections/specification/advanced/Advanced.types';

import { ParkingForm } from './forms/ParkingForm';
import { SpecialForm } from './forms/SpecialForm';
import { OwnerAssociation } from './forms/OwnerAssocition';

export const Advanced = ({ dateUpdated, updatedBy }: AdvancedProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page
        title={formatMessage({ id: 'pim_details.specification.advanced.title' })}
        placeholder="pim_details.specification.description_placeholder"
        name="specification.advanced.description"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
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
