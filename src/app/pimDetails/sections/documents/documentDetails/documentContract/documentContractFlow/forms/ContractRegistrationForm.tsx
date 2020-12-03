import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';
import { SquareIcon } from 'ui/atoms/icons';
import { RegistrationCostType } from '../DocumentContractFlow.types';
import { FormSubSectionHeader } from 'ui/molecules';

export function ContractRegistrationForm() {
  const { formatMessage } = useLocale();

  const costTypes = [
    ...Object.keys(RegistrationCostType).map(type => ({
      label: `pim_details.property.${type}`,
      icon: <SquareIcon />,
      value: type,
    })),
  ];

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.registration',
      })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.check_if_registration' })}
              </Typography>
            }
          />
          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.earliest_date',
                })}
                name="earliestDate"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
          </Grid>

          <Box mt={1} />
          <FormSubSectionHeader
            title={formatMessage({ id: `pim_details.documents.costs_registration_for` })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Box mt={1} />
          <RadioGroupField disabled={!editing} name="notaryAppointedBy" options={costTypes} />
        </AutosaveForm>
      )}
    </FormSection>
  );
}
