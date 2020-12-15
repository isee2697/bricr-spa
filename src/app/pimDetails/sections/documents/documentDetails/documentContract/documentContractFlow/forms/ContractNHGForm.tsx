import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField } from 'form/fields';
import { Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';

export function ContractNHGForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.nhg',
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
                {formatMessage({ id: 'pim_details.documents.check_if_nhg_dissolution' })}
              </Typography>
            }
          />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.nhg_dissolution_date',
                })}
                name="nhgDissolutionDate"
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
