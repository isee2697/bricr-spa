import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmContactInformationDocument, useUpdateCrmContactInformationMutation } from 'api/types';

import { AddNewPhoneNumberBody, AddNewPhoneNumberModalContainerProps } from './AddNewPhoneNumberModal.types';
import { AddNewPhoneNumberModal } from './AddNewPhoneNumberModal';

export const AddNewPhoneNumberModalContainer = ({ id, data }: AddNewPhoneNumberModalContainerProps) => {
  const { isOpen } = useModalState('add-new-phone-number');
  const { close } = useModalDispatch();
  const [updateContactInformation] = useUpdateCrmContactInformationMutation();

  const onClose = () => {
    close('add-new-phone-number');
  };

  const handleAddNewPhoneNumber = async (values: AddNewPhoneNumberBody) => {
    try {
      const { data: updateData } = await updateContactInformation({
        variables: {
          input: {
            id,
            phoneNumbers: [
              ...(data?.phoneNumbers || []).map(item =>
                JSON.parse(
                  JSON.stringify(item, (key, value) =>
                    value === null || key === '__typename' || key === 'id' ? undefined : value,
                  ),
                ),
              ),
              {
                type: values.phoneNumberType,
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

  return <AddNewPhoneNumberModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewPhoneNumber} />;
};
