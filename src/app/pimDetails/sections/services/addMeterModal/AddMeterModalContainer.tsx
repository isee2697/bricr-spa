import React from 'react';
import { useParams } from 'react-router-dom';

import { useAddMeterMutation, PimServicesDocument } from 'api/types';

import { AddMeterModalContainerProps, AddMeterSubmit } from './AddMeterModal.types';
import { AddMeterModal } from './AddMeterModal';

export const AddMeterModalContainer = ({ isOpened, onClose }: AddMeterModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addMeter] = useAddMeterMutation();
  const handleSubmit: AddMeterSubmit = async body => {
    try {
      const { data: result } = await addMeter({
        variables: {
          input: {
            pimId: id,
            name: body.name || '',
            type: body.type,
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

  return <AddMeterModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
