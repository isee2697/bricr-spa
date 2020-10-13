import React from 'react';
import arrayMutators from 'final-form-arrays';
import { AutosaveForm } from 'ui/organisms';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { Moments } from './moments/Moments';

export const SalesSettings = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
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
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />

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
