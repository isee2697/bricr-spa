import React from 'react';
import { useParams } from 'react-router';
import { AogSpacesDataProps } from '../AogSpaces.types';
import { AogSpace, PimAogSpacesDocument, PimOverallInfoDocument, useUpdateAogSpaceMutation } from 'api/types';

import { AogSpaceForm } from './AogSpaceForm';

export const AogSpaceFormContainer = ({ data }: AogSpacesDataProps) => {
  const { id: pimId, aogSpaceId: spaceId } = useParams<{ id: string; aogSpaceId: string }>();
  const [updateAogSpace] = useUpdateAogSpaceMutation();
  const space = data.find(space => space.id === spaceId);

  const handleSave = async (body: AogSpace) => {
    try {
      const { data: result } = await updateAogSpace({
        variables: {
          input: {
            pimId,
            spaceId,
            spaceName: body.name || '',
            animalsConfiguration: body.animalsConfiguration,
            installationsConfiguration: body.installationsConfiguration,
            buildingsConfiguration: body.buildingsConfiguration,
            groundConfiguration: body.groundConfiguration,
          },
        },
        refetchQueries: [
          {
            query: PimAogSpacesDocument,
            variables: {
              id: pimId,
            },
          },
          {
            query: PimOverallInfoDocument,
            variables: {
              id: pimId,
            },
          },
        ],
      });

      if (!result) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (!space) {
    return null;
  }

  return <AogSpaceForm data={space} onSave={handleSave} />;
};
