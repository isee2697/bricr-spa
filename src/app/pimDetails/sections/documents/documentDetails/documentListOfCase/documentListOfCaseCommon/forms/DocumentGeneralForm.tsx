import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { SquareIcon } from 'ui/atoms/icons';
import { PricingType } from 'api/types';

export function DocumentGeneralForm() {
  const { formatMessage } = useLocale();

  const listTypes = [
    ...Object.keys(PricingType).map(type => ({
      label: `pim_details.prices.${type}`,
      icon: <SquareIcon />,
      value: type,
    })),
    {
      label: '+',
      icon: <SquareIcon />,
      value: '+',
    },
  ];

  return (
    <FormSection title={formatMessage({ id: 'pim_details.general.title' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.documents.list_of_case.type' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Box mt={3.5} />
          <RadioGroupField disabled={!editing} name="typeOfList" options={listTypes} />
          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <GenericField disabled={!editing} name="version" label="pim_details.documents.version" size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.version_started',
                })}
                name="versionStarted"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
          </Grid>
          <Box mt={1} />
          <GenericField disabled={!editing} name="note" label="pim_details.documents.note" size="medium" />
        </AutosaveForm>
      )}
    </FormSection>
  );
}
