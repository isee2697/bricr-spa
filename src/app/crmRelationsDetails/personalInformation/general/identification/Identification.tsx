import React, { useState } from 'react';

import { Card, CardContent, CardHeader, FormControlLabel, Switch, Grid } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { DatePickerField, DropdownField, GenericField } from 'form/fields';

import { useStyles } from './Identification.styles';
import { IdentificationProps } from './Identification.types';
import { idTypes } from './dictionaries';

export const Identification = ({ data, onSave }: IdentificationProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

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
        <AutosaveForm onSave={onSave} initialValues={data}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <DropdownField
                  items={idTypes.map(type => ({
                    ...type,
                    label: formatMessage({ id: `dictionaries.identification_type.${type.label}` }),
                  }))}
                  name="identification"
                  disabled={!isEditing}
                  label={formatMessage({ id: 'crm.details.personal_information_general.identification.id' })}
                  placeholder="crm.details.personal_information_general.identification.passport"
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="identificationNumber"
                  disabled={!isEditing}
                  label={formatMessage({ id: 'crm.details.personal_information_general.identification.number' })}
                  placeholder="crm.details.personal_information_general.identification.placeholder"
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="identificationIssueCity"
                  disabled={!isEditing}
                  label={formatMessage({ id: 'crm.details.personal_information_general.identification.city_issue' })}
                  placeholder="crm.details.personal_information_general.identification.placeholder"
                />
              </Grid>
              <Grid item xs={4}>
                <DatePickerField
                  disabled={!isEditing}
                  name="identificationIssueDate"
                  label={formatMessage({ id: 'crm.details.personal_information_general.identification.issue_date' })}
                  placeholder="crm.details.personal_information_general.identification.date_picker"
                  disableToolbar={false}
                />
              </Grid>
              <Grid item xs={4}>
                <DatePickerField
                  disabled={!isEditing}
                  name="identificationExpirationDate"
                  label={formatMessage({ id: 'crm.details.personal_information_general.identification.expire_date' })}
                  placeholder="crm.details.personal_information_general.identification.date_picker"
                  disableToolbar={false}
                />
              </Grid>
            </Grid>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
