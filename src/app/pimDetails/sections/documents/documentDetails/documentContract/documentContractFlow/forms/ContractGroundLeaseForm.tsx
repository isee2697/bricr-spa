import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';

export function ContractGroundLeaseForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.documents.ground_lease_conditions' })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <GenericField
            disabled={!editing}
            name="conditions"
            label="pim_details.documents.ground_lease_conditions"
            placeholder={formatMessage({ id: 'pim_details.documents.ground_lease_conditions.placeholder' })}
            size="medium"
          />
          <Box mt={3} />
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.leasehold_revision',
                })}
                name="leaseholdRevision"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.ground_lease_adjustment',
                })}
                name="groundLeaseAdjustment"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.indexation_ground_lease',
                })}
                name="indexationGroundLease"
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
