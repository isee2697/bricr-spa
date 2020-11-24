import React from 'react';

import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { CheckboxField, GenericField } from 'form/fields';

export const CharacteristicsSection = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection isExpandable title={formatMessage({ id: 'settings.users.characteristics' })}>
      {isEditing => (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GenericField label="settings.users.initials_label" disabled={!isEditing} name="initials" />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericField label="settings.users.cost_unit_label" disabled={!isEditing} name="costUnit" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CheckboxField disabled={!isEditing} name="hideOnMemos" label="settings.users.hide_on_memos_label" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CheckboxField
              label="settings.users.is_accountmanager_label"
              disabled={!isEditing}
              name="isAccountmanager"
            />
          </Grid>
        </Grid>
      )}
    </FormSection>
  );
};
