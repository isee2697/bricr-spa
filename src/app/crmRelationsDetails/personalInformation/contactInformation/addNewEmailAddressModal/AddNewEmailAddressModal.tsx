import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { RadioGroupField } from 'form/fields';
import { MailIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { ContactEmailAddressType } from 'api/types';

import { AddNewEmailAddressModalProps } from './AddNewEmailAddressModal.types';

export const AddNewEmailAddressModal = ({ isOpened, onSubmit }: AddNewEmailAddressModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-email-address');
  };

  const addressTypes = Object.keys(ContactEmailAddressType).map(addressType => ({
    label: `dictionaries.contact_information.email_address_type.${addressType}`,
    icon: <MailIcon />,
    value: addressType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.personal_information_contact_information.addresses.add_new_email_address.title',
      })}
    >
      <RadioGroupField name="emailAddressType" options={addressTypes} />
    </FormModal>
  );
};
