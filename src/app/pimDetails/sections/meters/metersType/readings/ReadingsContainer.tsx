import React from 'react';
import { useParams } from 'react-router-dom';
import { PimServicesDocument, useUpdateReadingMutation, Reading } from 'api/types';

import { Readings } from './Readings';
import { ReadingContainerProps } from './Reading.types';

export const ReadingsContainer = ({ readings, editing, linkedPerson, isMeterAdded }: ReadingContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updatePimReading] = useUpdateReadingMutation();

  const onEdit = async (body: Reading) => {
    try {
      const { data } = await updatePimReading({
        variables: {
          input: {
            parentId: id,
            id: body.id,
            value: Number(body.value) || undefined,
            dateOfReading: body.dateOfReading,
            feedInId: body.feedInId,
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

      if (!data) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return (
    <Readings
      readings={readings}
      editing={editing}
      linkedPerson={linkedPerson}
      onSave={onEdit}
      isMeterAdded={isMeterAdded}
    />
  );
};
