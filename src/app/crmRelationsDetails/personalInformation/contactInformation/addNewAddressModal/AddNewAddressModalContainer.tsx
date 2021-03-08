import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmContactInformationDocument, useUpdateCrmContactInformationMutation } from 'api/types';

import { AddNewAddressBody, AddNewAddressModalContainerProps } from './AddNewAddressModal.types';
import { AddNewAddressModal } from './AddNewAddressModal';

export const AddNewAddressModalContainer = ({ id, data }: AddNewAddressModalContainerProps) => {
  const { isOpen } = useModalState('add-new-address');
  const { close } = useModalDispatch();
  const [updateContactInformation] = useUpdateCrmContactInformationMutation();

  const onClose = () => {
    close('add-new-address');
  };

  const handleAddNewEmailAddress = async (values: AddNewAddressBody) => {
    try {
      const { data: updateData } = await updateContactInformation({
        variables: {
          input: {
            id,
            addresses: [
              ...(data?.addresses || []).map(item =>
                JSON.parse(
                  JSON.stringify(item, (key, value) =>
                    value === null || key === '__typename' || key === 'id' ? undefined : value,
                  ),
                ),
              ),
              {
                type: values.addressType,
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

  return <AddNewAddressModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewEmailAddress} />;
};
