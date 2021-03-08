import _ from 'lodash';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Box } from 'ui/atoms';
import { SimpleLocationIcon } from 'ui/atoms/icons';
import { DatePickerField, DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { FormSubSectionHeader } from 'ui/molecules';
import { ContactAddressType, CrmAddress } from 'api/types';
import { AddNewAddressModalContainer } from '../addNewAddressModal/AddNewAddressModalContainer';
import { CardWithList } from 'ui/templates';
import { useCountries } from 'hooks';
import { letterValidator, requireValidator } from 'form/validators';

import { AddressesProps } from './Addresses.types';
import { useStyles } from './Addresses.styles';

export const Addresses = ({ data, onSave }: AddressesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();
  const { countryOptions } = useCountries();

  const handleSave = async (values: CrmAddress) => {
    try {
      await onSave({
        id,
        addresses: (data.addresses || []).map(item =>
          JSON.parse(
            JSON.stringify(item.id === values.id ? _.omit(values, ['title']) : item, (key, value) =>
              value === null || key === '__typename' || key === 'id' ? undefined : value,
            ),
          ),
        ),
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  const addressTypes = Object.keys(ContactAddressType).map(addressType => ({
    label: `dictionaries.contact_information.address_type.${addressType}`,
    icon: <SimpleLocationIcon />,
    value: addressType,
  }));

  return (
    <>
      <CardWithList<CrmAddress>
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.social_medias.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_contact_information.social_medias.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_contact_information.social_medias.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmAddress, isEditing: boolean) => (
          <>
            <FormSubSectionHeader
              title={''}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <RadioGroupField
              spacing={1}
              disabled={!isEditing}
              xs={4}
              md={3}
              lg={2}
              name={'type'}
              options={addressTypes}
            />
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box mt={-1} />
                <DropdownField
                  validate={[requireValidator]}
                  items={countryOptions}
                  placeholder="crm.details.personal_information_contact_information.addresses.country.placeholder"
                  name="country"
                  label="crm.details.personal_information_contact_information.addresses.country"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={5}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.city' })}
                  name={'city'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                  validate={[letterValidator]}
                />
              </Grid>
              <Grid item xs={3}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.zip_code',
                  })}
                  name={'zipcode'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.street',
                  })}
                  name={'street'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                  validate={[letterValidator]}
                />
              </Grid>
              <Grid item xs={3}>
                <GenericField
                  className={classes.formField}
                  type="number"
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.house_number',
                  })}
                  name={'houseNumber'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                />
              </Grid>
              <Grid item xs={3}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.addition',
                  })}
                  name={'addition'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.extra_address_information',
                  })}
                  name={'extraInformation'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.put_information_here"
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <DatePickerField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.address_available_from',
                  })}
                  disabled={!isEditing}
                  name={'availableFrom'}
                  placeholder="crm.details.personal_information_contact_information.addresses.placeholder"
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.addresses.note_about_the_address',
                  })}
                  name={'note'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.addresses.put_information_here"
                />
              </Grid>
            </Grid>
          </>
        )}
        items={(data.addresses || []).map(address => ({
          ...address,
          title: formatMessage({ id: `dictionaries.contact_information.address_type.${address.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-address')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable={false}
      />
      <AddNewAddressModalContainer id={id} data={data} />
    </>
  );
};
