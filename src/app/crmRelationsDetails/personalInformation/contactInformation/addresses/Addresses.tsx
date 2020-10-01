import React, { useState } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, Grid, IconButton, Box, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { AddIcon, ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField } from '../../../../../form/fields';

import { useStyles } from './Addresses.styles';

export const Addresses = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const addresses = [
    {
      key: 'homeAddress',
      title: 'Home address',
      country: '',
      city: '',
      zipCode: '',
      street: '',
      houseNumber: '',
      addition: '',
      extraAddressInformatoin: '',
      addressAvailableDate: '',
      note: '',
    },
  ];

  const initialValues = addresses.reduce((accu, currentValue) => {
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
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.title' })}
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
            {addresses.map((address, index) => (
              <React.Fragment key={index}>
                <Box display="flex" className={classes.addressHeader}>
                  <Typography variant="h5" className={classes.addressIndex}>
                    {index + 1}
                  </Typography>
                  <Typography variant="h3" className={classes.addressTitle}>
                    {address.title}
                  </Typography>
                  <IconButton size="small" variant="rounded" className={classes.marginRightThree}>
                    <MenuIcon />
                  </IconButton>
                  <IconButton size="small" variant="rounded">
                    <ArrowUpIcon />
                  </IconButton>
                </Box>
                <Grid container spacing={1} className={classes.addressFormFields}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.country' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.country`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.city' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.city`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.zip_code' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.zipCode`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.addressFormFields}>
                  <Grid item xs={6}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.street' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.street`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.addresses.house_number',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.houseNumber`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.addition' })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.addition`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.addressFormFields}>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.addresses.extra_address_information',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.extraAddressInformatoin`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.put_information_here"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.addressFormFields}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.addresses.address_available_from',
                      })}
                    </Typography>
                    <DatePickerField
                      className={classes.formField}
                      disabled={!isEditing}
                      name={`${address.key}.addressAvailableDate`}
                      placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.addressFormFields}>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {formatMessage({
                        id: 'crm.details.personal_information_contact_information.addresses.note_about_the_address',
                      })}
                    </Typography>
                    <GenericField
                      className={classes.formField}
                      name={`${address.key}.note`}
                      disabled={!isEditing}
                      placeholder="crm.details.personal_information_contact_information.addresses.put_information_here"
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
