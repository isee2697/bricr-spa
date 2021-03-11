import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { RadioGroupField } from 'form/fields';
import { SimpleLocationIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { ContactAddressType } from 'api/types';

import { AddNewAddressModalProps } from './AddNewAddressModal.types';

export const AddNewAddressModal = ({ isOpened, onSubmit }: AddNewAddressModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-address');
  };

  const addressTypes = Object.keys(ContactAddressType).map(addressType => ({
    label: `dictionaries.contact_information.address_type.${addressType}`,
    icon: <SimpleLocationIcon />,
    value: addressType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.personal_information_contact_information.addresses.add_new_address.title',
      })}
    >
      <RadioGroupField name="addressType" options={addressTypes} />
    </FormModal>
  );
};
