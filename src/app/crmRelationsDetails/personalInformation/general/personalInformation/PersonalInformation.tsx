import React, { useState } from 'react';

import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, Switch, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { DatePickerField, GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { EntityWithFiles } from 'api/types';
import { TileButton } from 'ui/molecules';

import { useStyles } from './PersonalInformation.styles';
import { genders, preferredLanguages } from './dictionaries';

export const PersonalInformation = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    avatar: '',
    firstName: '',
    extraNames: '',
    insertion: '',
    additional: '',
    gender: 'female',
    birthday: '',
    birthPlace: '',
    nationality: '',
    preferredLanguage: 'dutch',
  };

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_general.personal_info.title' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
          />
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            <Box display="flex">
              <Box className={classes.avatarContainer}>
                <UploadImageField
                  disabled={!isEditing}
                  name="avatar"
                  entity={EntityWithFiles.Profile}
                  entityID={'test'}
                  classes={{
                    item: classes.avatarItem,
                    empty: classes.avatarEmpty,
                  }}
                />
              </Box>
              <Box width="100%">
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_general.personal_info.first_name' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name="firstName"
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_general.personal_info.placeholder"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_general.personal_info.extra_names' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name="extraNames"
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_general.personal_info.placeholder"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_general.personal_info.insertion' })}
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <GenericField
                          className={classes.formField}
                          name="insertion"
                          disabled={!isEditing}
                          placeholder="crm.details.personal_information_general.personal_info.placeholder"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <GenericField
                          className={classes.formField}
                          name="additional"
                          disabled={!isEditing}
                          placeholder="crm.details.personal_information_general.personal_info.placeholder"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({ id: 'crm.details.personal_information_general.personal_info.gender' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box display="flex" className={classes.marginTopTwo}>
                <RadioGroupField
                  disabled={!isEditing}
                  name="gender"
                  options={genders}
                  classes={{ groupItem: classes.radioItem }}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({ id: 'crm.details.personal_information_general.personal_info.birth_information' })}
              </Typography>
              <Grid container spacing={1} className={classes.marginTopTwo}>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    {formatMessage({ id: 'crm.details.personal_information_general.personal_info.date_of_birth' })}
                  </Typography>
                  <DatePickerField className={classes.formField} disabled={!isEditing} name="birthday" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    {formatMessage({ id: 'crm.details.personal_information_general.personal_info.place_of_birth' })}
                  </Typography>
                  <GenericField
                    className={classes.formField}
                    name="birthPlace"
                    disabled={!isEditing}
                    placeholder="crm.details.personal_information_general.personal_info.placeholder"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5">
                    {formatMessage({ id: 'crm.details.personal_information_general.personal_info.nationality' })}
                  </Typography>
                  <GenericField
                    className={classes.formField}
                    name="nationality"
                    disabled={!isEditing}
                    placeholder="crm.details.personal_information_general.personal_info.placeholder"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({ id: 'crm.details.personal_information_general.personal_info.preferred_language' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box display="flex" className={classes.marginTopTwo}>
                <RadioGroupField
                  disabled={!isEditing}
                  name="preferredLanguage"
                  options={preferredLanguages}
                  actionElement={<TileButton onClick={() => {}} />}
                  classes={{ groupItem: classes.radioItem }}
                />
              </Box>
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
