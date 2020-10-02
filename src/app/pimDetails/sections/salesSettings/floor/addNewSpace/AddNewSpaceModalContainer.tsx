import React from 'react';
import { useParams } from 'react-router-dom';

import { useAddSpaceToFloorMutation, PimOverallInfoDocument, PimInsideDocument } from 'api/types';

import { AddNewSpaceModal } from './AddNewSpaceModal';
import { AddNewSpaceSubmit, AddNewSpaceModalContainerProps } from './AddNewSpaceModal.types';

export const AddNewSpaceModalContainer = ({ isOpened, onClose, floorId }: AddNewSpaceModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addSpace] = useAddSpaceToFloorMutation();

  const handleSubmit: AddNewSpaceSubmit = async body => {
    try {
      const { data: result } = await addSpace({
        variables: {
          input: {
            pimId: id,
            floorId,
            spaceType: body.type,
            spaceName: body.name,
            extraRoomPossibility: !!body.extraRoom,
          },
        },
        refetchQueries: [
          {
            query: PimOverallInfoDocument,
            variables: { id },
          },
          {
            query: PimInsideDocument,
            variables: { id },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }

      onClose(result.addSpaceToFloor?.newSpace.id);

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AddNewSpaceModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
