import * as uuid from 'uuid';
import React, { useState } from 'react';
import { CountryCode, AsYouType } from 'libphonenumber-js';
import Flag from 'react-flagkit';

import {
  Card,
  CardHeader,
  CardContent,
  FormControlLabel,
  Switch,
  Grid,
  IconButton,
  Typography,
  InputAdornment,
} from 'ui/atoms';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AddIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField } from 'form/fields';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AddNewPhoneNumberBody } from '../addNewPhoneNumberModal/AddNewPhoneNumberModal.types';
import { AddNewPhoneNumberModal } from '../addNewPhoneNumberModal/AddNewPhoneNumberModal';
import { PromiseFunction } from 'app/shared/types';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './PhoneNumbers.styles';
import { PhoneNumber, PhoneNumbersObject, PhoneNumbersProps } from './PhoneNumbers.types';

export const PhoneNumbers = ({ data, onSave }: PhoneNumbersProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [countryCodes, setCountryCodes] = useState<string[]>(['PL']);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-phone-number');
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>(
    (data.phoneNumbers || []).map(phoneNumber => ({ ...phoneNumber, key: uuid.v4() })),
  );

  const handleAddNewPhoneNumber: PromiseFunction<AddNewPhoneNumberBody> = async ({ phoneNumberType }) => {
    try {
      setPhoneNumbers([
        ...phoneNumbers,
        {
          key: uuid.v4(),
          type: phoneNumberType,
          countryCode: '',
          phoneNumber: '',
        },
      ]);

      close('add-new-phone-number');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const initialValues: PhoneNumbersObject = phoneNumbers.reduce((accu, currentValue) => {
    return {
      ...accu,
      [currentValue.key]: {
        ...currentValue,
      },
    };
  }, {});

  const handleSave = async (values: PhoneNumbersObject) => {
    const removeKeyAndAddType = (key: string, value: PhoneNumber) => {
      const { key: myKey, ...rest } = value;

      return { ...rest, type: phoneNumbers.find(phoneNumber => phoneNumber.key === key)?.type };
    };

    const countryCodes: string[] = Object.keys(values).reduce((accu: string[], key) => {
      const { countryCode = '', phoneNumber = '' } = values[key];
      const asYouTube = new AsYouType('PL');
      asYouTube.input(`${countryCode}${phoneNumber}`);
      const country = asYouTube.country as CountryCode;

      return [...accu, country];
    }, []);

    setCountryCodes(countryCodes);

    const newData = {
      phoneNumbers: Object.entries(values).map(([key, value]) => removeKeyAndAddType(key, value)),
    };

    return await onSave(newData);
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
            <IconButton aria-label="add" color="primary" size="small" onClick={() => open('add-new-phone-number')}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} initialValues={initialValues}>
          <Grid item xs={12}>
            {phoneNumbers.length === 0 && (
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.phone_numbers.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.phone_numbers.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {phoneNumbers.length > 0 &&
              phoneNumbers.map((phoneNumber, index) => (
                <FormSubSection
                  key={index}
                  title={
                    <>
                      <Typography variant="h5" className={classes.phoneNumberIndex}>
                        {index + 1}
                      </Typography>
                      <Typography variant="h3" className={classes.phoneNumberTitle}>
                        {formatMessage({
                          id: `dictionaries.contact_information.phone_number_type.${phoneNumber.type}`,
                        })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
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
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Flag country={countryCodes[index]} />
                            </InputAdornment>
                          ),
                        }}
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
                          id:
                            'crm.details.personal_information_contact_information.phone_numbers.number_available_from',
                        })}
                      </Typography>
                      <DatePickerField
                        className={classes.formField}
                        disabled={!isEditing}
                        name={`${phoneNumber.key}.availableFrom`}
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
                </FormSubSection>
              ))}
          </Grid>
        </AutosaveForm>
        <AddNewPhoneNumberModal
          onSubmit={handleAddNewPhoneNumber}
          isOpened={isModalOpen}
          onClose={() => close('add-new-phone-number')}
        />
      </CardContent>
    </Card>
  );
};
