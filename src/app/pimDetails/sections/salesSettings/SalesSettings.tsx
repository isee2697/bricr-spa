import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { Moments } from './moments/Moments';

export const SalesSettings = () => {
  const { formatMessage } = useLocale();

  const onSave = async (values: unknown) => {
    try {
      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <AutosaveForm initialValues={{}} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
        <Page
          title={formatMessage({ id: 'pim_details.sales_settings.title' })}
          placeholder="pim_details.sales_settings.description_placeholder"
          name="description"
        >
          <Grid item xs={12}>
            <Moments />
          </Grid>
        </Page>
      </AutosaveForm>
    </>
  );
};
