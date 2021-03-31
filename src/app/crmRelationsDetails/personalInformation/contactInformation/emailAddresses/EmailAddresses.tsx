import _ from 'lodash';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { MailIcon } from 'ui/atoms/icons';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { FormSubSectionHeader } from 'ui/molecules';
import { ContactEmailAddressType, CrmEmailAddress } from 'api/types';
import { AddNewEmailAddressModalContainer } from '../addNewEmailAddressModal/AddNewEmailAddressModalContainer';
import { CardWithList } from 'ui/templates';
import { emailValidator } from 'form/validators';

import { useStyles } from './EmailAddresses.styles';
import { EmailAddressesProps } from './EmailAddresses.types';

export const EmailAddresses = ({ data, onSave }: EmailAddressesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const handleSave = async (values: CrmEmailAddress) => {
    try {
      await onSave({
        id,
        emailAddresses: (data.emailAddresses || []).map(item =>
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

  const addressTypes = Object.keys(ContactEmailAddressType).map(addressType => ({
    label: `dictionaries.contact_information.email_address_type.${addressType}`,
    icon: <MailIcon />,
    value: addressType,
  }));

  return (
    <>
      <CardWithList<CrmEmailAddress>
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.email_addresses.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_contact_information.email_addresses.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_contact_information.email_addresses.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmEmailAddress, isEditing: boolean) => (
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
                <Typography variant="h5">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.email_addresses.email_available_from',
                  })}
                </Typography>
                <DatePickerField
                  className={classes.formField}
                  disabled={!isEditing}
                  name={'availableFrom'}
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
                  name={'email'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.email_addresses.placeholder"
                  validate={[emailValidator]}
                />
              </Grid>
            </Grid>
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.email_addresses.note_about_the_email',
                  })}
                </Typography>
                <GenericField
                  className={classes.formField}
                  name={'note'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.email_addresses.put_information_here"
                />
              </Grid>
            </Grid>
          </>
        )}
        items={(data.emailAddresses || []).map(emailAddress => ({
          ...emailAddress,
          title: formatMessage({ id: `dictionaries.contact_information.email_address_type.${emailAddress.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-email-address')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable={false}
      />
      <AddNewEmailAddressModalContainer id={id} data={data} />
    </>
  );
};
