import React from 'react';

import { Grid } from 'ui/atoms';
import { CheckboxGroupField } from 'form/fields';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { AdminPermissionsTypes } from '../dictionaries';
export const AdminPermissions = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection isExpandable title={formatMessage({ id: 'settings.users.admin_permissions' })}>
      {isEditing => (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CheckboxGroupField
              xs={2}
              lg={1}
              disabled={!isEditing}
              options={AdminPermissionsTypes}
              name="adminSettings"
            />
          </Grid>
        </Grid>
      )}
    </FormSection>
  );
};
