import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { RadioGroupField } from 'form/fields';
import { SocialMediaIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { ContactSocialMediaType } from 'api/types';

import { AddNewSocialMediaModalProps } from './AddNewSocialMediaModal.types';

export const AddNewSocialMediaModal = ({ isOpened, onSubmit }: AddNewSocialMediaModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-social-media');
  };

  const addressTypes = Object.keys(ContactSocialMediaType).map(addressType => ({
    label: `dictionaries.contact_information.social_media_type.${addressType}`,
    icon: <SocialMediaIcon />,
    value: addressType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.personal_information_contact_information.addresses.add_new_social_media.title',
      })}
    >
      <RadioGroupField name="socialMediaType" options={addressTypes} />
    </FormModal>
  );
};
