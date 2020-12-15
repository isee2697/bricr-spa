import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { SquareIcon } from 'ui/atoms/icons';
import { CustomerType } from '../DocumentContractFlow.types';

export function ContractHandoverForm() {
  const { formatMessage } = useLocale();

  const listCustomers = Object.keys(CustomerType).map(type => ({
    label: `pim_details.customer_type.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.handover',
      })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({ id: `pim_details.documents.costs_borne_by` })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Box mt={1} />
          <RadioGroupField disabled={!editing} name="costsBorneBy" options={listCustomers} />

          <Box mt={1} />
          <FormSubSectionHeader
            title={formatMessage({ id: `pim_details.documents.notary_appointed_by` })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Box mt={1} />
          <RadioGroupField disabled={!editing} name="notaryAppointedBy" options={listCustomers} />

          <Box mt={1} />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({
                  id: 'pim_details.documents.handover.check',
                })}
              </Typography>
            }
          />

          <Box mt={1} />
          <Grid item xs={12} sm={4}>
            <DatePickerField
              label={formatMessage({
                id: 'pim_details.documents.transfer_of_ownership',
              })}
              name="transferOfOwnership"
              disabled={!editing}
              placeholder={formatMessage({ id: 'common.date_picker' })}
            />
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
