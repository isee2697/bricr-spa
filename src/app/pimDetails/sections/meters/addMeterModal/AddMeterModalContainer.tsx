import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAddMeterMutation, PimMetersDocument } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddMeterModalContainerProps, AddMeterSubmit } from './AddMeterModal.types';
import { AddMeterModal } from './AddMeterModal';

export const AddMeterModalContainer = ({ isOpened, onClose, onAddMeter }: AddMeterModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addPimMeter] = useAddMeterMutation();
  const { push } = useHistory();

  const handleSubmit: AddMeterSubmit = async body => {
    try {
      const { data: result } = await addPimMeter({
        variables: {
          input: {
            parentId: id,
            name: body.name || '',
            type: body.type,
          },
        },
        refetchQueries: [
          {
            query: PimMetersDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }
      await onAddMeter();
      onClose();
      push(`${AppRoute.pimDetails.replace(':id', id)}/meters/${body.type.toLowerCase()}`);

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AddMeterModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
