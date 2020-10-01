import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  FormControlLabel,
  Switch,
  Grid,
  IconButton,
  Box,
  Typography,
  InputAdornment,
} from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AddIcon, ArrowUpIcon, MenuIcon } from '../../../../../ui/atoms/icons';
import { DatePickerField, GenericField } from '../../../../../form/fields';

import { useStyles } from './PhoneNumbers.styles';

export const PhoneNumbers = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const phoneNumbers = [
    {
      key: 'mainNumber',
      title: 'Main number',
      countryCode: '',
      phoneNumber: '',
      numberAvailableDate: '',
      note: '',
    },
  ];

  const initialValues = phoneNumbers.reduce((accu, currentValue) => {
    return {
      ...accu,
      [currentValue.key]: {
        ...currentValue,
      },
    };
  }, {});

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.phone_numbers.title' })}
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
            {phoneNumbers.map((phoneNumber, index) => (
              <React.Fragment key={index}>
                <Box display="flex" className={classes.phoneNumberHeader}>
                  <Typography variant="h5" className={classes.phoneNumberIndex}>
                    {index + 1}
                  </Typography>
                  <Typography variant="h3" className={classes.phoneNumberTitle}>
                    {phoneNumber.title}
                  </Typography>
                  <IconButton size="small" variant="rounded" className={classes.marginRightThree}>
                    <MenuIcon />
                  </IconButton>
                  <IconButton size="small" variant="rounded">
                    <ArrowUpIcon />
                  </IconButton>
                </Box>
                <Grid container spacing={1} className={classes.phoneNumberFormFields}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.phone_numbers.country_code',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${phoneNumber.key}.countryCode`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.phone_numbers.country_code_placeholder"
                      InputProps={{ endAdornment: <InputAdornment position="end">PO</InputAdornment> }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.phone_numbers.phone_number',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${phoneNumber.key}.phoneNumber`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.phone_numbers.placeholder"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.phoneNumberFormFields}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.phone_numbers.number_available_from',
                      })}
                    </Typography>
                    <DatePickerField
                      className={classes.formField}
                      disabled={!isEditing}
                      name={`${phoneNumber.key}.numberAvailableDate`}
                      placeholder="crm.details.personal_information_contact_information.phone_numbers.placeholder"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.phoneNumberFormFields}>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {formatMessage({
                        id:
                          'crm.details.personal_information_contact_information.phone_numbers.note_about_the_phone_number',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${phoneNumber.key}.note`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.phone_numbers.put_information_here"
                    />
                  </Grid>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
