import React from 'react';
import { useParams } from 'react-router-dom';

import { PimInsideDocument, useUpdateFloorMutation } from 'api/types';
import { FloorContainerProps } from 'app/pimDetails/sections/inside/floor/Floor.types';
import { Floor } from 'app/pimDetails/sections/inside/floor/Floor';

export const FloorContainer = ({ floor, count }: FloorContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const [updateFloor] = useUpdateFloorMutation();

  const handleSubmit = async (body: { description: string }) => {
    try {
      const { data: result } = await updateFloor({
        variables: {
          input: {
            pimId,
            floorId: floor.id,
            floorDescription: body.description,
          },
        },
        refetchQueries: [
          {
            query: PimInsideDocument,
            variables: { id: pimId },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <Floor floor={floor} onSave={handleSubmit} count={count} />;
};
