import React from 'react';

import { Grid, Avatar } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField } from 'form/fields';

import { TeamPermissionsProps } from './TeamPermissions.types';

export const TeamPermissions = ({ data, index, onSave, isEditing }: TeamPermissionsProps) => {
  return (
    <AutosaveForm onSave={onSave} initialValues={data}>
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Avatar>{index + 1}</Avatar>
          </Grid>
          <Grid item xs={2}>
            {data.name}
          </Grid>
          <Grid item xs={1}>
            <CheckboxField name="createPermission" />
          </Grid>
          <Grid item xs={1}>
            <CheckboxField name="readPermission" />
          </Grid>
          <Grid item xs={1}>
            <CheckboxField name="updatePermission" />
          </Grid>
          <Grid item xs={1}>
            <CheckboxField name="deletePermission" />
          </Grid>
        </Grid>
      </Grid>
    </AutosaveForm>
  );
};
