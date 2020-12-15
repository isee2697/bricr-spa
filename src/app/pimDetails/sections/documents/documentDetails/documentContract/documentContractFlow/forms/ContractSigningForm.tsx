import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';

export function ContractSigningForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.signing',
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
                {formatMessage({ id: 'pim_details.documents.check_if_signing_digital' })}
              </Typography>
            }
          />

          <Box mt={1} />
          <GenericField
            disabled={!editing}
            name="placePurchaseSigned"
            label="pim_details.documents.place_purchase_signed"
            size="medium"
          />

          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.date_purchase_signed',
                })}
                name="datePurchaseSigned"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
