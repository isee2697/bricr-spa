import React, { useState } from 'react';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, Grid, IconButton, Typography } from 'ui/atoms';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AddIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField } from 'form/fields';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AddNewEmailAddressBody } from '../addNewEmailAddressModal/AddNewEmailAddressModal.types';
import { AddNewEmailAddressModal } from '../addNewEmailAddressModal/AddNewEmailAddressModal';
import { PromiseFunction } from 'app/shared/types';
import { DateTime } from 'luxon';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './EmailAddresses.styles';
import { EmailAddressItem } from './EmailAddresses.types';

export const EmailAddresses = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-email-address');
  const [emailAddresses, setEmailAddresses] = useState<EmailAddressItem[]>([]);

  const handleAddNewEmailAddress: PromiseFunction<AddNewEmailAddressBody> = async ({ emailAddressType }) => {
    try {
      setEmailAddresses([
        ...emailAddresses,
        {
          key: emailAddressType,
          emailAvailableDate: DateTime.local(),
          emailAddress: '',
          note: '',
        },
      ]);

      close('add-new-email-address');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const initialValues = emailAddresses.reduce((accu, currentValue) => {
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
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.email_addresses.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={() => open('add-new-email-address')}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            {emailAddresses.length === 0 && (
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.email_addresses.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.email_addresses.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {emailAddresses.length > 0 &&
              emailAddresses.map((emailAddress, index) => (
                <FormSubSection
                  key={index}
                  title={
                    <>
                      <Typography variant="h5" className={classes.emailAddressIndex}>
                        {index + 1}
                      </Typography>
                      <Typography variant="h3" className={classes.emailAddressTitle}>
                        {formatMessage({
                          id: `dictionaries.contact_information.email_address_type.${emailAddress.key}`,
                        })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
                  <Grid container spacing={1} className={classes.emailAddressFormFields}>
                    <Grid item xs={4}>
                      <Typography variant="h5">
                        {formatMessage({
                          id:
                            'crm.details.personal_information_contact_information.email_addresses.email_available_from',
                        })}
                      </Typography>
                      <DatePickerField
                        className={classes.formField}
                        disabled={!isEditing}
                        name={`${emailAddress.key}.emailAvailableDate`}
                        placeholder="crm.details.personal_information_contact_information.email_addresses.placeholder"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="h5">
                        {formatMessage({
                          id: 'crm.details.personal_information_contact_information.email_addresses.email_address',
                        })}
                      </Typography>
                      <GenericField
                        className={classes.formField}
                        name={`${emailAddress.key}.emailAddress`}
                        disabled={!isEditing}
                        placeholder="crm.details.personal_information_contact_information.email_addresses.placeholder"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} className={classes.emailAddressFormFields}>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        {formatMessage({
                          id:
                            'crm.details.personal_information_contact_information.email_addresses.note_about_the_email',
                        })}
                      </Typography>
                      <GenericField
                        className={classes.formField}
                        name={`${emailAddress.key}.note`}
                        disabled={!isEditing}
                        placeholder="crm.details.personal_information_contact_information.email_addresses.put_information_here"
                      />
                    </Grid>
                  </Grid>
                </FormSubSection>
              ))}
          </Grid>
        </AutosaveForm>
        <AddNewEmailAddressModal
          onSubmit={handleAddNewEmailAddress}
          isOpened={isModalOpen}
          onClose={() => close('add-new-email-address')}
        />
      </CardContent>
    </Card>
  );
};
