import React from 'react';
import { useParams } from 'react-router-dom';
import { UserServiceType, CreateUserServiceType } from 'app/settings/sections/users/Users.types';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import {
  EmailAddressType,
  GetUserProfileDocument,
  PhoneNumberType,
  SocialMediaLinkType,
  useCreateEmailAddressMutation,
  useCreatePhoneNumberMutation,
  useCreateSocialMediaLinkMutation,
} from 'api/types';

import { AddUserServiceModal } from './AddUserServiceModal';

export const AddUserServiceModalContainer = ({
  type,
  onClose,
  ...props
}: ModalContainerProps & { type: UserServiceType }) => {
  const { id: profileId } = useParams<{ id: string }>();
  const [createMail] = useCreateEmailAddressMutation();
  const [createPhone] = useCreatePhoneNumberMutation();
  const [createSocial] = useCreateSocialMediaLinkMutation();

  const refetchQueries = [
    {
      query: GetUserProfileDocument,
      variables: { id: profileId },
    },
  ];

  const handleSubmit = async (data: CreateUserServiceType) => {
    try {
      switch (type) {
        case 'socialMedia':
          createSocial({
            variables: {
              input: {
                profileId,
                socialMediaLink: data.name,
                socialMediaLinkType: data.type as SocialMediaLinkType,
              },
            },
            refetchQueries,
          });
          break;
        case 'email':
          createMail({
            variables: {
              input: {
                profileId,
                emailAddress: data.name,
                emailAddressType: data.type as EmailAddressType,
              },
            },
            refetchQueries,
          });
          break;
        case 'phone':
          createPhone({
            variables: {
              input: {
                profileId,
                phoneNumber: data.name,
                phoneNumberType: data.type as PhoneNumberType,
              },
            },
            refetchQueries,
          });
          break;
      }

      onClose();

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <AddUserServiceModal {...props} onClose={onClose} type={type} onSubmit={handleSubmit} />;
};
