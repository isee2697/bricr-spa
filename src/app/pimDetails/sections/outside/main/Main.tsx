import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { Page } from 'ui/templates';

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
        <Page
          title={formatMessage({ id: 'pim_details.outside.title' })}
          placeholder="pim_details.outside.main.description_placeholder"
          name="houseOutside.notes"
          updatedBy={pimOutside.lastEditedBy}
          dateUpdated={pimOutside.dateUpdated}
        >
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
        </Page>
      </AutosaveForm>
    </>
  );
};
