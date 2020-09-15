import React from 'react';

import { Grid } from 'ui/atoms';
import { CheckboxGroupField, DatePickerField, GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { AdminSettings, EntityWithFiles, Profile } from 'api/types';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenderOptions } from 'app/settings/sections/users/dictionaries';
import { UserIcon } from 'ui/atoms/icons';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from 'app/settings/sections/users/User.styles';

export const PersonalInformation = ({ avatar, id }: Profile) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(avatar ?? undefined);

  return (
    <FormSection isExpandable title={formatMessage({ id: 'settings.users.information' })}>
      {isEditing => (
        <Grid container spacing={3}>
          <Grid item xs={4} lg={2}>
            <div className={classes.uploadImage}>
              <UploadImageField disabled={!isEditing} name="avatar" entity={EntityWithFiles.Profile} entityID={id} />
            </div>
          </Grid>
          <Grid item xs={4} lg={5}>
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
          <Grid item xs={4} lg={5}>
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
            <RadioGroupField xs={3} lg={2} name="gender" options={GenderOptions} />
          </Grid>
          <Grid item xs={12}>
            <CheckboxGroupField
              options={Object.values(AdminSettings).map((val, key) => ({
                label: val,
                icon: <UserIcon />,
                value: val,
              }))}
              name={'adminSettings'}
            />
          </Grid>
        </Grid>
      )}
    </FormSection>
  );
};
