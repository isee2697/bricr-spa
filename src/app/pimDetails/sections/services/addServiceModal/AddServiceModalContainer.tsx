import React from 'react';
import { useParams } from 'react-router-dom';

import { useAddServiceMutation, PimServicesDocument } from 'api/types';
import { AddServiceModal } from 'app/shared/services/modal/AddServiceModal';
import { AddServiceModalContainerProps, AddServiceSubmit } from 'app/shared/services/Service.types';

export const AddServiceModalContainer = ({
  type,
  types,
  isOpened,
  onClose,
  onAddService,
}: AddServiceModalContainerProps) => {
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

      onAddService();
      onClose(result?.addService?.newService.id);

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
