import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmContactInformationDocument, useUpdateCrmContactInformationMutation } from 'api/types';

import { AddNewEmailAddressBody, AddNewEmailAddressModalContainerProps } from './AddNewEmailAddressModal.types';
import { AddNewEmailAddressModal } from './AddNewEmailAddressModal';

export const AddNewEmailAddressModalContainer = ({ id, data }: AddNewEmailAddressModalContainerProps) => {
  const { isOpen } = useModalState('add-new-email-address');
  const { close } = useModalDispatch();
  const [updateContactInformation] = useUpdateCrmContactInformationMutation();

  const onClose = () => {
    close('add-new-email-address');
  };

  const handleAddNewEmailAddress = async (values: AddNewEmailAddressBody) => {
    try {
      const { data: updateData } = await updateContactInformation({
        variables: {
          input: {
            id,
            emailAddresses: [
              ...(data?.emailAddresses || []).map(item =>
                JSON.parse(
                  JSON.stringify(item, (key, value) =>
                    value === null || key === '__typename' || key === 'id' ? undefined : value,
                  ),
                ),
              ),
              {
                type: values.emailAddressType,
              },
            ],
          },
        },
        refetchQueries: [
          {
            query: GetCrmContactInformationDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!updateData || !updateData.updateCrmContactInformation) {
        throw new Error();
      }

      onClose();

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return <AddNewEmailAddressModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewEmailAddress} />;
};
