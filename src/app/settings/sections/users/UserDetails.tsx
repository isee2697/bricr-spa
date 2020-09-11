import React from 'react';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { Grid, NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { DatePickerField, GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { EntityWithFiles } from 'api/types';
import { GenderOptions } from 'app/settings/sections/users/dictionaries';
import { FormSubSectionHeader } from 'ui/molecules';

import { TeamPermissionsContainer } from './teamPermissions/TeamPermissionsContainer';
import { UserDetailsProps } from './Users.types';
import { useStyles } from './User.styles';
export const UserDetails = ({ data, onSave }: UserDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(data?.avatar ?? undefined);

  return (
    <>
      <NavBreadcrumb to={AppRoute.users} title={formatMessage({ id: 'settings.users.title' })} />
      <Page titleActions={<></>} showHeader title={`${data.firstName} ${data.lastName}`}>
        <AutosaveForm key={data.id} onSave={onSave} initialValues={data}>
          <FormSection isExpandable title={formatMessage({ id: 'settings.users.information' })}>
            {isEditing => (
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <div className={classes.uploadImage}>
                    <UploadImageField
                      disabled={!isEditing}
                      name="avatar"
                      entity={EntityWithFiles.Profile}
                      entityID={data.id}
                    />
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <GenericField
                    disabled={!isEditing}
                    label="settings.users.first_name"
                    placeholder="settings.users.first_name"
                    name="firstName"
                  />
                  <DatePickerField
                    disabled={!isEditing}
                    name="dateOfBirth"
                    label="settings.users.date_of_birth"
                    placeholder="settings.users.date_of_birth_placeholder"
                  />
                </Grid>
                <Grid item xs={5}>
                  <GenericField
                    disabled={!isEditing}
                    name="lastName"
                    label="settings.users.last_name"
                    placeholder="settings.users.last_name"
                  />
                  <GenericField
                    disabled={!isEditing}
                    name="functionDescription"
                    label="settings.users.function_description"
                    placeholder="settings.users.function_description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormSubSectionHeader
                    noBorder
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    title={formatMessage({ id: 'settings.users.gender' })}
                  />
                  <RadioGroupField name="gender" options={GenderOptions} />
                </Grid>
              </Grid>
            )}
          </FormSection>
        </AutosaveForm>
        <FormSection isExpandable title={formatMessage({ id: 'settings.users.team_rights' })}>
          {isEditing => (
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                {formatMessage({ id: 'settings.teams.name_label' })}
              </Grid>
              <Grid item xs={1}>
                {formatMessage({ id: 'dictionaries.settings.rights.Create' })}
              </Grid>
              <Grid item xs={1}>
                {formatMessage({ id: 'dictionaries.settings.rights.Read' })}
              </Grid>
              <Grid item xs={1}>
                {formatMessage({ id: 'dictionaries.settings.rights.Update' })}
              </Grid>
              <Grid item xs={1}>
                {formatMessage({ id: 'dictionaries.settings.rights.Delete' })}
              </Grid>
              {data?.teams?.map((team, key) => (
                <TeamPermissionsContainer isEditing={isEditing} key={key} index={key} data={team} />
              ))}
            </Grid>
          )}
        </FormSection>
      </Page>
    </>
  );
};
