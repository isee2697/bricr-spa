import React, { useState } from 'react';

import { Card, CardContent, CardHeader, FormControlLabel, Switch, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';

import { useStyles } from './Identification.styles';

export const Identification = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    id: '',
    number: '',
    cityIssue: '',
    issueDate: '',
  };

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_general.identification.title' })}
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
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Typography variant="h5">
                  {formatMessage({ id: 'crm.details.personal_information_general.identification.id' })}
                </Typography>
                <GenericField
                  className={classes.formField}
                  name="id"
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_general.identification.passport"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">
                  {formatMessage({ id: 'crm.details.personal_information_general.identification.number' })}
                </Typography>
                <GenericField
                  className={classes.formField}
                  name="number"
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_general.identification.placeholder"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">
                  {formatMessage({ id: 'crm.details.personal_information_general.identification.city_issue' })}
                </Typography>
                <GenericField
                  className={classes.formField}
                  name="cityIssue"
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_general.identification.placeholder"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">
                  {formatMessage({ id: 'crm.details.personal_information_general.identification.issue_date' })}
                </Typography>
                <DatePickerField
                  className={classes.formField}
                  disabled={!isEditing}
                  name="issueDate"
                  placeholder="crm.details.personal_information_general.identification.date_picker"
                />
              </Grid>
            </Grid>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
