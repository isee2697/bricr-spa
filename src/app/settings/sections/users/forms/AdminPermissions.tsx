import React, { useState } from 'react';
import { FormSpy, useForm } from 'react-final-form';
import { FormState } from 'final-form';

import { Checkbox, FormControlLabel, Grid } from 'ui/atoms';
import { CheckboxGroupField } from 'form/fields';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { AdminPermissionsTypes } from '../dictionaries';
import { Profile, AdminSettings } from 'api/types';
export const AdminPermissions = ({ data }: { data: AdminSettings[] }) => {
  const singleValuesData = Array.from(new Set(data));
  const { formatMessage } = useLocale();
  const AllPermissions = Object.values(AdminSettings);
  const [allChecked, setAllChecked] = useState(singleValuesData.length === AllPermissions.length);
  const form = useForm();

  const selectAllPermissions = (isChecked: boolean) => {
    setAllChecked(isChecked);

    form.change('adminSettings', isChecked ? AllPermissions : []);
  };

  return (
    <FormSection isExpandable title={formatMessage({ id: 'settings.users.admin_permissions' })}>
      {isEditing => (
        <Grid container spacing={3}>
          <FormSpy
            onChange={({ values }: FormState<Profile>) => {
              if (!!values.adminSettings) {
                setAllChecked(values.adminSettings.length === AllPermissions.length);
              }
            }}
          />
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allChecked}
                  onChange={e => selectAllPermissions(e.target.checked)}
                  name="selectAllPermissions"
                  disabled={!isEditing}
                  color="primary"
                />
              }
              label={formatMessage({ id: 'settings.users.select_all_permissions' })}
            />
          </Grid>
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
