import React from 'react';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { CheckboxField, DatePickerField } from 'form/fields';

export const SettingsGeneral = () => {
  const { formatMessage } = useLocale();

  const handleSaveSettingsGeneral = async () => {
    return undefined;
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.publication.funda.settings.general.title' })}
      isEditable
      isExpandable
    >
      {isEditing => (
        <AutosaveForm onSave={handleSaveSettingsGeneral}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <DatePickerField name="startDate" label={formatMessage({ id: 'common.start_date' })} />
              </Grid>
              <Grid item xs={6}>
                <DatePickerField name="endDate" label={formatMessage({ id: 'common.end_date' })} />
              </Grid>
              <Grid item xs={6}>
                <CheckboxField
                  name="activateFundaStatistics"
                  label={formatMessage({
                    id: 'pim_details.publication.funda.settings.general.activate_funda_statistics',
                  })}
                />
              </Grid>
            </Grid>
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
};
