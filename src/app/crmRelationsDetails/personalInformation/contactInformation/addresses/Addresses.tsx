import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, Grid, IconButton, Typography } from 'ui/atoms';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField } from 'form/fields';
import { AddNewAddressModal } from '../addNewAddressModal/AddNewAddressModal';
import { AddNewAddressBody } from '../addNewAddressModal/AddNewAddressModal.types';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { PromiseFunction } from 'app/shared/types';
import { InfoSection } from 'ui/molecules';

import { AddressItem } from './Addresses.types';
import { useStyles } from './Addresses.styles';

export const Addresses = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-address');
  const [addresses, setAddresses] = useState<AddressItem[]>([]);

  const handleAddNewAddress: PromiseFunction<AddNewAddressBody> = async ({ addressType }) => {
    try {
      setAddresses([
        ...addresses,
        {
          key: addressType,
          country: '',
          city: '',
          zipCode: '',
          street: '',
          houseNumber: '',
          addition: '',
          extraAddressInformation: '',
          addressAvailableDate: DateTime.local(),
          note: '',
        },
      ]);

      close('add-new-address');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

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
            <IconButton aria-label="add" color="primary" size="small" onClick={() => open('add-new-address')}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            {addresses.length === 0 && (
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {addresses.length > 0 &&
              addresses.map((address, index) => (
                <FormSubSection
                  key={index}
                  title={
                    <>
                      <Typography variant="h5" className={classes.addressIndex}>
                        {index + 1}
                      </Typography>
                      <Typography variant="h3" className={classes.addressTitle}>
                        {formatMessage({ id: `dictionaries.contact_information.address_type.${address.key}` })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
                  <Grid container spacing={1} className={classes.addressFormFields}>
                    <Grid item xs={4}>
                      <Typography variant="h5">
                        {formatMessage({
                          id: 'crm.details.personal_information_contact_information.addresses.country',
                        })}
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
                        {formatMessage({
                          id: 'crm.details.personal_information_contact_information.addresses.zip_code',
                        })}
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
                        {formatMessage({
                          id: 'crm.details.personal_information_contact_information.addresses.addition',
                        })}
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
                          id:
                            'crm.details.personal_information_contact_information.addresses.extra_address_information',
                        })}
                      </Typography>
                      <GenericField
                        className={classes.formField}
                        name={`${address.key}.extraAddressInformation`}
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
                </FormSubSection>
              ))}
          </Grid>
        </AutosaveForm>
        <AddNewAddressModal
          onSubmit={handleAddNewAddress}
          isOpened={isModalOpen}
          onClose={() => close('add-new-address')}
        />
      </CardContent>
    </Card>
  );
};
