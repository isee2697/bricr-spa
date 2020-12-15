import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Grid, Typography } from 'ui/atoms';

export function ContractGuarenteeForm() {
  const { formatMessage } = useLocale();

  const percentage = 10;
  const price = '23,500.00';

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.guarentee',
      })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.guarentee_date',
                })}
                name="guarenteeDate"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="depositAmount"
                label="pim_details.documents.deposit_amount"
                size="medium"
                InputProps={{ endAdornment: <Typography>€</Typography> }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box mt={4} />
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.guarentee.placeholder' })} <br />
                <b>{percentage}%</b> {formatMessage({ id: 'pim_details.documents.salesprice' })}
                {' = '}
                <b>€ {price}</b>
              </Typography>
            </Grid>
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
