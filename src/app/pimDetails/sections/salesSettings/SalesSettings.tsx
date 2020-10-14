import React from 'react';
import arrayMutators from 'final-form-arrays';

import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { Moments } from './moments/Moments';

export const SalesSettings = ({ title, isSidebarVisible, onSidebarOpen, onAddAllocation }: PimDetailsSectionProps) => {
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
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={onAddAllocation}
            size="small"
          >
            {formatMessage({ id: `pim_details.sales_settings.add_new_allocation` })}
          </Button>
        }
      />

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
