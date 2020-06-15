import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { useUpdateSpaceMutation, PimDetailsDocument } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { SpaceProps } from './Space.types';
import { Space } from './Space';

export const SpaceContainer = ({ space, ...props }: SpaceProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateSpace] = useUpdateSpaceMutation();

  const handleEdit = async (body: AnyObject) => {
    try {
      const { data } = await updateSpace({
        variables: {
          input: {
            pimId: id,
            spaceId: space.id,
            space: body,
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
    <AutosaveForm initialValues={space} onSave={handleEdit} mutators={{ ...arrayMutators }} subscription={{}}>
      <Space space={space} {...props} />
    </AutosaveForm>
  );
};
