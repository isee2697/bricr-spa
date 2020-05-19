import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Grid, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';

import { MainDescriptionContainer } from './mainDescription/MainDescriptionContainer';
import { GeneralInformation } from './forms/GeneralInformation';
import { PropertyRelated } from './forms/PropertyRelated';
import { RoofInformation } from './forms/RoofInformation';

export const Main = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.outside.title' })}</Typography>
        <MainDescriptionContainer />
      </Grid>

      <AutosaveForm onSave={() => Promise.resolve({ error: false })} mutators={{ ...arrayMutators }} subscription={{}}>
        <Grid xs={12} item>
          <GeneralInformation />
        </Grid>
        <Grid xs={12} item>
          <PropertyRelated />
        </Grid>
        <Grid xs={12} item>
          <RoofInformation />
        </Grid>
      </AutosaveForm>
    </>
  );
};
