import React from 'react';
import { useParams } from 'react-router-dom';
import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';
import { PimInsideDocument, useUpdateFloorMutation } from 'api/types';

import { FloorDescriptionProps } from './FloorDescription.types';

export const FloorDescriptionContainer = ({ floorId, floorDescription }: FloorDescriptionProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const [updateFloor] = useUpdateFloorMutation();

  const handleSubmit = async (body: { description: string }) => {
    try {
      const { data: result } = await updateFloor({
        variables: {
          input: {
            pimId,
            floorId,
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

  return (
    <AutosaveForm initialValues={{ description: floorDescription }} onSave={handleSubmit} subscription={{}}>
      <GenericField placeholder="pim_details.inside.floor.description_placeholder" name="description" />
    </AutosaveForm>
  );
};
