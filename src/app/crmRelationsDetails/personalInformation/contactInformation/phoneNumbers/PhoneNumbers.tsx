import _ from 'lodash';
import React from 'react';
import { CountryCode, AsYouType } from 'libphonenumber-js';
import Flag from 'react-flagkit';
import { useParams } from 'react-router-dom';

import { Grid, InputAdornment, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { MobileIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { FormSubSectionHeader } from 'ui/molecules';
import { ContactPhoneNumberType, CrmPhoneNumber } from 'api/types';
import { CardWithList } from 'ui/templates';
import { AddNewPhoneNumberModalContainer } from '../addNewPhoneNumberModal/AddNewPhoneNumberModalContainer';

import { useStyles } from './PhoneNumbers.styles';
import { PhoneNumbersProps } from './PhoneNumbers.types';

export const PhoneNumbers = ({ data, onSave }: PhoneNumbersProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const convertCountryCode = (countryCode: string, phoneNumber: string) => {
    const asYouTube = new AsYouType('PL');
    asYouTube.input(`${countryCode}${phoneNumber}`);
    const country = asYouTube.country as CountryCode;

    return country;
  };

  const handleSave = async (values: CrmPhoneNumber) => {
    try {
      await onSave({
        id,
        phoneNumbers: (data.phoneNumbers || []).map(item =>
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

  const phoneNumberTypes = Object.keys(ContactPhoneNumberType).map(phoneNumberType => ({
    label: `dictionaries.contact_information.phone_number_type.${phoneNumberType}`,
    icon: <MobileIcon />,
    value: phoneNumberType,
  }));

  return (
    <>
      <CardWithList<CrmPhoneNumber>
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.phone_numbers.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_contact_information.phone_numbers.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_contact_information.phone_numbers.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmPhoneNumber, isEditing: boolean) => (
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
              options={phoneNumberTypes}
            />
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.phone_numbers.country_code',
                  })}
                  name={'countryCode'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.phone_numbers.country_code_placeholder"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Flag
                          country={
                            item.countryCode ? convertCountryCode(item.countryCode || '', item.phoneNumber || '') : 'PL'
                          }
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <GenericField
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.phone_numbers.phone_number',
                  })}
                  className={classes.formField}
                  name={'phoneNumber'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.phone_numbers.phone_number.placeholder"
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'crm.details.personal_information_contact_information.phone_numbers.number_available_from',
                  })}
                  className={classes.formField}
                  disabled={!isEditing}
                  name={'availableFrom'}
                  placeholder="crm.details.personal_information_contact_information.phone_numbers.number_available_from.placeholder"
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <GenericField
                  label={formatMessage({
                    id:
                      'crm.details.personal_information_contact_information.phone_numbers.note_about_the_phone_number',
                  })}
                  className={classes.formField}
                  name={`note`}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.phone_numbers.put_information_here"
                />
              </Grid>
            </Grid>
          </>
        )}
        items={(data.phoneNumbers || []).map(phoneNumber => ({
          ...phoneNumber,
          title: formatMessage({ id: `dictionaries.contact_information.social_media_type.${phoneNumber.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-phone-number')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable={false}
      />
      <AddNewPhoneNumberModalContainer id={id} data={data} />
    </>
  );
};
