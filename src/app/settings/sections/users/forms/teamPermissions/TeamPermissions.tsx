import React from 'react';
import { Grid, Avatar } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField } from 'form/fields';
import { TeamPermissionsProps } from 'app/settings/sections/users/forms/teamPermissions/TeamPermissions.types';

export const TeamPermissions = ({ data, index, onSave, isEditing }: TeamPermissionsProps) => {
  return (
    <AutosaveForm onSave={onSave} initialValues={data}>
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Avatar>{index + 1}</Avatar>
          </Grid>
          <Grid item xs={3} lg={2}>
            {data.name}
          </Grid>
          <Grid item xs={2} lg={1}>
            <CheckboxField disabled={!isEditing} name="createPermission" />
          </Grid>
          <Grid item xs={2} lg={1}>
            <CheckboxField disabled={!isEditing} name="readPermission" />
          </Grid>
          <Grid item xs={2} lg={1}>
            <CheckboxField disabled={!isEditing} name="updatePermission" />
          </Grid>
          <Grid item xs={2} lg={1}>
            <CheckboxField disabled={!isEditing} name="deletePermission" />
          </Grid>
        </Grid>
      </Grid>
    </AutosaveForm>
  );
};
