import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { useAddFloorToPimMutation, PimDetailsDocument } from 'api/types';

import { AddNewFloorModal } from './AddNewFloorModal';
import { AddNewFloorSubmit, AddNewFloorModalContainerProps } from './AddNewFloorModal.types';

export const AddNewFloorModalContainer = ({ isOpened, onClose }: AddNewFloorModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addFloor] = useAddFloorToPimMutation();
  const { push } = useHistory();

  const handleSubmit: AddNewFloorSubmit = async body => {
    try {
      const { data: result } = await addFloor({
        variables: {
          input: {
            pimId: id,
            floorType: body.type,
            floorDescription: body.description,
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result?.addFloorToPim || !result.addFloorToPim.floors) {
        throw new Error();
      }

      onClose();

      const floors = result.addFloorToPim.floors;
      push(AppRoute.pimDetails.replace(':id', id) + '/inside/' + floors[0].id);

      return undefined;
    } catch (e) {
      return {
        error: true,
      };
    }
  };

  return <AddNewFloorModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
