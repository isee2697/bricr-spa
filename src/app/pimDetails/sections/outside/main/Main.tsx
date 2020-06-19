import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Grid, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { GeneralInformation } from './forms/GeneralInformation';
import { PropertyRelated } from './forms/PropertyRelated';
import { RoofInformation } from './forms/RoofInformation';
import { MainProps } from './Main.types';
import { Foundation } from './forms/Foundation';

export const Main = ({ pimOutside, onSave }: MainProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <AutosaveForm initialValues={pimOutside} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
        <Grid xs={12} item>
          <Typography variant="h1">{formatMessage({ id: 'pim_details.outside.title' })}</Typography>
          <GenericField placeholder="pim_details.outside.main.description_placeholder" name="houseOutside.notes" />
        </Grid>

        <Grid xs={12} item>
          <GeneralInformation />
        </Grid>
        <Grid xs={12} item>
          <PropertyRelated />
        </Grid>
        <Grid xs={12} item>
          <Foundation />
        </Grid>
        <Grid xs={12} item>
          <RoofInformation />
        </Grid>
      </AutosaveForm>
    </>
  );
};
