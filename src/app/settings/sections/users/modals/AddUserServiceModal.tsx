import React from 'react';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { FormModal } from 'ui/organisms';
import { CreateUserServiceType, UserServiceType } from 'app/settings/sections/users/Users.types';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { FormSubSectionHeader } from 'ui/molecules';
import { SocialTypes, PhoneNumberTypes, EmailAddressesTypes } from 'app/settings/sections/users/dictionaries';
import { Box } from 'ui/atoms';

export const AddUserServiceModal = ({
  type,
  ...props
}: ModalContainerProps & { type: UserServiceType; onSubmit: PromiseFunction<CreateUserServiceType> }) => {
  const { formatMessage } = useLocale();
  const inputType = type === 'email' ? type : 'text';

  return (
    <FormModal title={formatMessage({ id: `settings.users.create_${type.toLowerCase()}_title` })} {...props}>
      <GenericField
        placeholder={`settings.users.${type.toLowerCase()}_placeholder`}
        label={`settings.users.${type.toLowerCase()}_label`}
        type={inputType}
        name="name"
        required
      />
      <Box mb={3} />
      <FormSubSectionHeader
        noBorder
        title={formatMessage({ id: `settings.users.choose_${type.toLowerCase()}_type` })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <RadioGroupField
        xs={3}
        name="type"
        options={
          (type === 'socialMedia' && SocialTypes) ||
          (type === 'phone' && PhoneNumberTypes) ||
          (type === 'email' && EmailAddressesTypes) ||
          []
        }
      />
    </FormModal>
  );
};
