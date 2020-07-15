import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { LabelInput, useAddLabelMutation, useAddNcpLabelMutation } from 'api/types';
import { EntityType } from 'app/shared/entityType';

import { AddCustomPropertyModalContainerProps } from './AddCustomPropertyModal.types';
import { AddCustomPropertyModal } from './AddCustomPropertyModal';

export const AddCustomPropertyModalContainer = ({
  isOpened,
  onClose,
  property,
  title,
  labelId,
  entityType = EntityType.Property,
}: AddCustomPropertyModalContainerProps) => {
  const { id } = useParams<{ id: string }>();

  const [addLabel] = useAddLabelMutation({ refetchQueries: ['GetLabels'] });
  const [addNcpLabel] = useAddNcpLabelMutation({ refetchQueries: ['GetNcpLabels'] });

  const handleSubmit = useCallback(
    async (input: Pick<LabelInput, 'text' | 'icon'>) => {
      if (entityType === EntityType.Property) {
        const { errors, data } = await addLabel({
          variables: {
            input: {
              ...input,
              pimId: id,
              property,
            },
          },
        });

        if (errors || !data?.addLabel) {
          throw new Error();
        }
      }

      if (entityType === EntityType.Project) {
        const { errors, data } = await addNcpLabel({
          variables: {
            input: {
              ...input,
              parentId: id,
              property,
            },
          },
        });

        if (errors || !data?.addNcpLabel) {
          throw new Error();
        }
      }

      onClose();
    },
    [entityType, onClose, addLabel, id, property, addNcpLabel],
  );

  return (
    <AddCustomPropertyModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={title}
      labelId={labelId}
    />
  );
};
