import React from 'react';
import { Grid } from 'ui/atoms';
import { TeamPermissionsContainer } from 'app/settings/sections/users/forms/teamPermissions/TeamPermissionsContainer';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { ProfileTeam } from 'api/types';

export const TeamPermissionsSection = ({ data }: { data: ProfileTeam[] }) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection isExpandable title={formatMessage({ id: 'settings.users.team_rights' })}>
      {isEditing => (
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={3} lg={2}>
            {formatMessage({ id: 'settings.teams.name_label' })}
          </Grid>
          <Grid item xs={2} lg={1}>
            {formatMessage({ id: 'dictionaries.settings.rights.Create' })}
          </Grid>
          <Grid item xs={2} lg={1}>
            {formatMessage({ id: 'dictionaries.settings.rights.Read' })}
          </Grid>
          <Grid item xs={2} lg={1}>
            {formatMessage({ id: 'dictionaries.settings.rights.Update' })}
          </Grid>
          <Grid item xs={2} lg={1}>
            {formatMessage({ id: 'dictionaries.settings.rights.Delete' })}
          </Grid>
          {data.map((team, key) => (
            <TeamPermissionsContainer isEditing={isEditing} key={key} index={key} data={team} />
          ))}
        </Grid>
      )}
    </FormSection>
  );
};
