import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { useAddFloorToPimMutation, PimInsideDocument } from 'api/types';

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
            query: PimInsideDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result?.addFloorToPim || !result.addFloorToPim.newFloor) {
        throw new Error();
      }

      onClose();
      push(`${AppRoute.pimDetails.replace(':id', id)}/inside/${result.addFloorToPim.newFloor.id}`);

      return undefined;
    } catch (e) {
      return {
        error: true,
      };
    }
  };

  return <AddNewFloorModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
