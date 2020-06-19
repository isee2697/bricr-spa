import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { LabelInput, useAddLabelMutation } from 'api/types';

import { AddCustomPropertyModalContainerProps } from './AddCustomPropertyModal.types';
import { AddCustomPropertyModal } from './AddCustomPropertyModal';

export const AddCustomPropertyModalContainer = ({
  isOpened,
  onClose,
  property,
}: AddCustomPropertyModalContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const [addLabel] = useAddLabelMutation({
    refetchQueries: ['GetLabels'],
  });

  const handleSubmit = useCallback(
    async (input: Pick<LabelInput, 'text' | 'icon'>) => {
      const { errors, data } = await addLabel({
        variables: {
          input: {
            ...input,
            pimId,
            property,
          },
        },
      });

      if (errors || !data?.addLabel) {
        throw new Error();
      }

      onClose();
    },
    [addLabel, onClose, pimId, property],
  );

  return <AddCustomPropertyModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
