import React, { useState } from 'react';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, Grid, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { DatePickerField, GenericField, RadioGroupField, QuantityField } from 'form/fields';

import { useStyles } from './Family.styles';
import { martialStatuses } from './dictionaries';

export const Family = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    martialStatus: 'single',
    martialStatusDate: '',
    martialStatusExtraInformation: '',
    compositionChildren: 0,
    compositionAdults: 0,
    compositionExtraInformation: '',
  };

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_family_and_contacts.family.title' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
            className={classes.editSwitcher}
          />
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.family.martial_status' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box className={classes.marginTopTwo}>
                <RadioGroupField
                  disabled={!isEditing}
                  name="martialStatus"
                  options={martialStatuses}
                  classes={{ groupItem: classes.radioItem }}
                />
                <Grid container spacing={1} className={classes.marginTopFour}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_family_and_contacts.family.date_of_martial_status',
                      })}
                    </Typography>
                    <DatePickerField className={classes.formField} disabled={!isEditing} name="martialStatusDate" />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.marginTopFour}>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_family_and_contacts.family.extra_information',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name="martialStatusExtraInformation"
                      disabled={!isEditing}
                      placeholder="common.put_information_here"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_family_and_contacts.family.family_composition',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box className={classes.marginTopThree}>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_family_and_contacts.family.children',
                      })}
                    </Typography>
                    <QuantityField min={0} name="compositionChildren" label="quantity.label" disabled={!isEditing} />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_family_and_contacts.family.adults',
                      })}
                    </Typography>
                    <QuantityField min={0} name="compositionAdults" label="quantity.label" disabled={!isEditing} />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.marginTopFour}>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_family_and_contacts.family.extra_information',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name="compositionExtraInformation"
                      disabled={!isEditing}
                      placeholder="common.put_information_here"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
