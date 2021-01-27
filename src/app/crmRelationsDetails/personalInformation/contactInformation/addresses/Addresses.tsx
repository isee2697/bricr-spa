import * as uuid from 'uuid';
import React, { useState } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, Grid, IconButton, Typography, Box } from 'ui/atoms';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { AddNewAddressModal } from '../addNewAddressModal/AddNewAddressModal';
import { AddNewAddressBody } from '../addNewAddressModal/AddNewAddressModal.types';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { PromiseFunction } from 'app/shared/types';
import { FormSubSectionHeader, InfoSection } from 'ui/molecules';
import { ContactAddressType } from 'api/types';

import { AddressesProps, AddressItem } from './Addresses.types';
import { useStyles } from './Addresses.styles';

export const Addresses = ({ data, onSave }: AddressesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-address');
  const [addresses, setAddresses] = useState<AddressItem[]>(
    (data.addresses || []).map(address => ({ ...address, key: uuid.v4() })),
  );

  const handleAddNewAddress: PromiseFunction<AddNewAddressBody> = async ({ addressType }) => {
    try {
      setAddresses([
        ...addresses,
        {
          key: uuid.v4(),
          type: addressType,
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

  const handleSave = async (values: Record<string, AddressItem>) => {
    const removeKeyAndAddType = (key: string, value: AddressItem) => {
      const { key: myKey, ...rest } = value;

      return { ...rest, type: addresses.find(address => address.key === key)?.type };
    };
    const newData = { addresses: Object.entries(values).map(([key, value]) => removeKeyAndAddType(key, value)) };

    return await onSave(newData);
  };

  const addressTypes = Object.keys(ContactAddressType).map(addressType => ({
    label: `dictionaries.contact_information.address_type.${addressType}`,
    icon: <SquareIcon />,
    value: addressType,
  }));

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
        <AutosaveForm onSave={handleSave} initialValues={initialValues}>
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
                        {formatMessage({ id: `dictionaries.contact_information.address_type.${address.type}` })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                  initiallyOpened={false}
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
                        name={`${address.key}.zipcode`}
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
                        type="number"
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
                  <FormSubSectionHeader
                    title={formatMessage({
                      id: 'crm.details.personal_information_contact_information.addresses.type_of_address',
                    })}
                    subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
                    noBorder
                  />
                  <Box mb={2} />
                  <RadioGroupField
                    spacing={1}
                    disabled={!isEditing}
                    xs={4}
                    md={3}
                    lg={2}
                    name={`${address.key}.type`}
                    options={addressTypes}
                  />
                  <Box mb={2} />
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
