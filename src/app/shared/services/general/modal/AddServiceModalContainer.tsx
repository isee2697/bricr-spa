import React from 'react';
import { useParams } from 'react-router';

import { AddServiceModal } from 'app/shared/services/modal/AddServiceModal';
import { AddServiceModalContainerProps, AddServiceSubmit } from 'app/shared/services/Service.types';
import {
  GetNcpServicesDocument,
  useAddNcpServiceMutation,
  GetObjectTypeServicesDocument,
  useAddObjectTypeServiceMutation,
} from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';

export const AddServiceModalContainer = ({
  type,
  types,
  isOpened,
  onClose,
  onAddService,
}: AddServiceModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();

  const [addNcpService] = useAddNcpServiceMutation();
  const [addObjectType] = useAddObjectTypeServiceMutation();

  const handleSubmit: AddServiceSubmit = async body => {
    try {
      if (entityType === EntityType.Project) {
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
      }

      if (entityType === EntityType.ObjectType) {
        const { data: result } = await addObjectType({
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
              query: GetObjectTypeServicesDocument,
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
        onClose(result?.addObjectTypeService?.newService.id);
      }

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
