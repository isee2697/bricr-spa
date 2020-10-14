import React from 'react';

import { Grid } from 'ui/atoms';
import { CheckboxButtonField, GenericField } from 'form/fields';
import { UserPermissions } from '../dictionaries';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';

export const TeammemberItemForm = () => {
  const { formatMessage } = useLocale();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'settings.teams.members.rights' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
      </Grid>
      {Object.values(UserPermissions).map(permission => {
        return (
          <Grid key={permission.value} xs={3} item>
            <CheckboxButtonField xs={12} name={permission.value} option={permission} />
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <GenericField placeholder="settings.teams.members.notes_placeholder" label="common.notes" name="notes" />
      </Grid>
    </Grid>
  );
};
