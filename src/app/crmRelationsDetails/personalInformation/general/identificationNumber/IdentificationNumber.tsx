import React, { useState } from 'react';
import { Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './IdentificationNumber.styles';

export const IdentificationNumber = () => {
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
        title={formatMessage({ id: 'crm.details.personal_information_general.identification_number.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={() => {}}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            <InfoSection emoji="🛰">
              <Typography variant="h3">
                {formatMessage({ id: 'crm.details.personal_information_general.identification_number.empty_title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_general.identification_number.empty_description',
                })}
              </Typography>
            </InfoSection>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
