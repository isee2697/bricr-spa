import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { useUpdateSpaceMutation, PimDetailsDocument } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { KitchenContainerProps } from './Kitchen.types';
import { Kitchen } from './Kitchen';

export const KitchenContainer = ({ spaceId, initialValues, ...props }: KitchenContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateSpace] = useUpdateSpaceMutation();

  const handleEdit = async (body: AnyObject) => {
    try {
      const { data } = await updateSpace({
        variables: {
          input: {
            pimId: id,
            spaceId: spaceId,
            space: {
              ...body,
              configuration: {
                images: [], //@TODO - has to wait for API fix
              },
            },
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

      if (!data) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return (
    <AutosaveForm initialValues={initialValues} onSave={handleEdit} mutators={{ ...arrayMutators }} subscription={{}}>
      <Kitchen spaceId={spaceId} {...props} />
    </AutosaveForm>
  );
};
