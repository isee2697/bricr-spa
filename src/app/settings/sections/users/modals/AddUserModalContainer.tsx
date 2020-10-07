import React from 'react';
import { useHistory } from 'react-router-dom';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { GetUsersDocument, Profile, useCreateProfileMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddUserModal } from './AddUserModal';

export const AddUserModalContainer = ({ isOpened, onClose }: ModalContainerProps) => {
  const [addUser] = useCreateProfileMutation();
  const { push } = useHistory();

  const handleSave = async (data: Profile) => {
    try {
      if (!data.email) {
        throw Error();
      }

      const response = await addUser({
        variables: {
          input: {
            firstName: data.firstName,
            lastName: data.lastName,
            functionDescription: data.functionDescription,
            email: data.email,
          },
        },
        refetchQueries: [{ query: GetUsersDocument, variables: { from: 0 } }],
      });

      if (response && response?.data?.createProfile?.id) {
        push(AppRoute.userDetails.replace(':id', response?.data?.createProfile?.id));
        onClose();
      } else {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <AddUserModal isOpened={isOpened} onClose={onClose} onSubmit={handleSave} />;
};
