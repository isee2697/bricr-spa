import React from 'react';
import { Grid, InputLabel } from 'ui/atoms';
import { DatePickerField, GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { EntityWithFiles, Profile } from 'api/types';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenderOptions } from 'app/settings/sections/users/dictionaries';
import { FormSection, LocaleSwitch } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from 'app/settings/sections/users/User.styles';

export const PersonalInformation = ({ id, image }: Profile) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(image?.url ?? undefined);

  return (
    <FormSection isExpandable title={formatMessage({ id: 'settings.users.information' })}>
      {isEditing => (
        <Grid container spacing={3}>
          <Grid item xs={4} lg={2}>
            <div className={classes.uploadImage}>
              <UploadImageField disabled={!isEditing} name="image" entity={EntityWithFiles.Profile} entityID={id} />
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

            <InputLabel className={classes.label} disabled={!isEditing} variant={'standard'}>
              {formatMessage({ id: 'language.label' })}
            </InputLabel>
            <LocaleSwitch disabled={!isEditing} />
          </Grid>
          <Grid item xs={12}>
            <FormSubSectionHeader
              noBorder
              subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              title={formatMessage({ id: 'settings.users.gender' })}
            />
            <RadioGroupField xs={3} lg={2} name="gender" options={GenderOptions} />
          </Grid>
        </Grid>
      )}
    </FormSection>
  );
};
