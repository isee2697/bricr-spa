import React from 'react';

import { useUpdateOutsideFeatureMutation, PimDetailsDocument } from 'api/types';
import { usePim } from 'app/pimDetails/usePim/usePim';

import { GardenContainerProps } from './Garden.types';
import { Garden } from './Garden';

export const GardenContainer = ({ feature }: GardenContainerProps) => {
  const [updateOutsideFeature] = useUpdateOutsideFeatureMutation();
  const pim = usePim();

  const handleSave = async (body: unknown) => {
    try {
      const { data } = await updateOutsideFeature({
        variables: {
          input: {
            pimId: pim.id,
            outsideFeatureId: feature.id,
            feature: body,
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
            variables: {
              id: pim.id,
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

  return <Garden id={feature.id} feature={feature} onSave={handleSave} />;
};
