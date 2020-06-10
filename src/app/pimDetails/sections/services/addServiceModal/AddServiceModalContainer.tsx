import React from 'react';
import { useParams } from 'react-router-dom';

import { useAddServiceMutation, PimServicesDocument } from 'api/types';

import { AddServiceModalContainerProps, AddServiceSubmit } from './AddServiceModal.types';
import { AddServiceModal } from './AddServiceModal';

export const AddServiceModalContainer = ({ type, types, isOpened, onClose }: AddServiceModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addService] = useAddServiceMutation();

  const handleSubmit: AddServiceSubmit = async body => {
    try {
      const { data: result } = await addService({
        variables: {
          input: {
            pimId: id,
            name: body.name || '',
            type: type,
            configuration: {
              type: body.type,
            },
          },
        },
        refetchQueries: [
          {
            query: PimServicesDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }

      onClose();

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return (
    <AddServiceModal
      title={`pim_details.services.${type.toLowerCase()}_modal_title`}
      nameLabel={`pim_details.services.${type.toLowerCase()}_name_label`}
      types={types}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
