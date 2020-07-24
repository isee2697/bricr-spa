import React from 'react';
import { useParams } from 'react-router';

import { AddServiceModal } from 'app/shared/services/modal/AddServiceModal';
import { AddServiceModalContainerProps, AddServiceSubmit } from 'app/shared/services/Service.types';
import { GetNcpServicesDocument, useAddNcpServiceMutation } from 'api/types';

export const AddServiceModalContainer = ({
  type,
  types,
  isOpened,
  onClose,
  onAddService,
}: AddServiceModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addNcpService] = useAddNcpServiceMutation();

  const handleSubmit: AddServiceSubmit = async body => {
    try {
      const { data: result } = await addNcpService({
        variables: {
          input: {
            parentId: id,
            name: body.name || '',
            type: type,
            configuration: {
              type: body.type,
            },
          },
        },
        refetchQueries: [
          {
            query: GetNcpServicesDocument,
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
      onClose(result?.addNcpService?.newService.id);

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
