import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';

export function ContractConstructionInsForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.construction_inspection',
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
                {formatMessage({ id: 'pim_details.documents.check_if_construction_inspection' })}
              </Typography>
            }
          />
          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.construction_inspection_date',
                })}
                name="constructionInsDate"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <GenericField
                disabled={!editing}
                name="constructionInsBy"
                label="pim_details.documents.construction_inspection_by"
                placeholder="pim_details.documents.select_company_from_crm"
                size="medium"
              />
            </Grid>
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
