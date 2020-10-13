import React from 'react';
import { useParams } from 'react-router';
import { PimMetersDocument, SectionWithDescriptionType, useUpdateDescriptionMutation } from 'api/types';

import { MetersInfo } from './MetersInfo';
import { MeterInfoContainerProps } from './MetersInfo.types';

export const MetersInfoContainer = ({ hasMeters, description }: MeterInfoContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateDescription] = useUpdateDescriptionMutation();

  const onDescriptionUpdate = async (body: { description?: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            description: body.description || '',
            pimId: id,
            section: SectionWithDescriptionType.MetersMetaInfo,
          },
        },
        refetchQueries: [
          {
            query: PimMetersDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <MetersInfo hasMeters={hasMeters} description={description} onSave={onDescriptionUpdate} />;
};
