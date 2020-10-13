import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { RadioGroupField } from 'form/fields';
import { PhoneNumberType } from '../phoneNumbers/PhoneNumbers.types';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';

import { AddNewPhoneNumberModalProps } from './AddNewPhoneNumberModal.types';

export const AddNewPhoneNumberModal = ({ isOpened, onSubmit }: AddNewPhoneNumberModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-phone-number');
  };

  const phoneNumberTypes = Object.keys(PhoneNumberType).map(phoneNumberType => ({
    label: `dictionaries.contact_information.phone_number_type.${phoneNumberType}`,
    icon: <SquareIcon />,
    value: phoneNumberType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.personal_information_contact_information.addresses.add_new_phone_number.title',
      })}
    >
      <RadioGroupField name="phoneNumberType" options={phoneNumberTypes} />
    </FormModal>
  );
};
