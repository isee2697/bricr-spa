import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { LabelInput, useAddTaskLabelMutation } from 'api/types';

import { AddCustomTaskLabelModalContainerProps } from './AddCustomTaskLabelModal.types';
import { AddCustomTaskLabelModal } from './AddCustomTaskLabelModal';

export const AddCustomTaskLabelModalContainer = ({
  isOpened,
  onClose,
  property,
}: AddCustomTaskLabelModalContainerProps) => {
  const { id } = useParams<{ id: string }>();

  const [addLabel] = useAddTaskLabelMutation({ refetchQueries: ['GetTaskLabels'] });

  const handleSubmit = useCallback(
    async (input: Pick<LabelInput, 'text' | 'icon'>) => {
      const { errors, data } = await addLabel({
        variables: {
          input: {
            ...input,
            parentId: id,
            property,
          },
        },
      });

      if (errors || !data?.addTaskLabel) {
        throw new Error();
      }

      onClose();
    },
    [onClose, addLabel, id, property],
  );

  return <AddCustomTaskLabelModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
