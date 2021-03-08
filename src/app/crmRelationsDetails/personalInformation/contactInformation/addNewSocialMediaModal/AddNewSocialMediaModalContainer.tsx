import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmContactInformationDocument, useUpdateCrmContactInformationMutation } from 'api/types';

import { AddNewSocialMediaModal } from './AddNewSocialMediaModal';
import { AddNewSocialMediaBody, AddNewSocialMediaModalContainerProps } from './AddNewSocialMediaModal.types';

export const AddNewSocialMediaModalContainer = ({ id, data }: AddNewSocialMediaModalContainerProps) => {
  const { isOpen } = useModalState('add-new-social-media');
  const { close } = useModalDispatch();
  const [updateContactInformation] = useUpdateCrmContactInformationMutation();

  const onClose = () => {
    close('add-new-social-media');
  };

  const handleAddNewSocialMedia = async (values: AddNewSocialMediaBody) => {
    try {
      const { data: updateData } = await updateContactInformation({
        variables: {
          input: {
            id,
            socialMedia: [
              ...(data?.socialMedia || []).map(item =>
                JSON.parse(
                  JSON.stringify(item, (key, value) =>
                    value === null || key === '__typename' || key === 'id' ? undefined : value,
                  ),
                ),
              ),
              {
                type: values.socialMediaType,
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

  return <AddNewSocialMediaModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewSocialMedia} />;
};
