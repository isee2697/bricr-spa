import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';
import { EnergyForm } from '../forms/EnergyForm';
import { ApprovalsForm } from '../forms/ApprovalsForm';
import { ObligationForm } from '../forms/ObligationForm';

export const SpecificationGeneral = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.specification.title' })}</Typography>
        <GenericField
          placeholder="pim_details.specification.description_placeholder"
          name="specification.description"
        />
      </Grid>
      <Grid item xs={12}>
        <EnergyForm />
      </Grid>
      <Grid item xs={12}>
        <ApprovalsForm />
      </Grid>
      <Grid item xs={12}>
        <ObligationForm />
      </Grid>
    </>
  );
};
