import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { RadioGroupField } from 'form/fields';
import { AddressType } from '../addresses/Addresses.types';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';

import { AddNewAddressModalProps } from './AddNewAddressModal.types';

export const AddNewAddressModal = ({ isOpened, onSubmit }: AddNewAddressModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-address');
  };

  const addressTypes = Object.keys(AddressType).map(addressType => ({
    label: `dictionaries.contact_information.address_type.${addressType}`,
    icon: <SquareIcon />,
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
