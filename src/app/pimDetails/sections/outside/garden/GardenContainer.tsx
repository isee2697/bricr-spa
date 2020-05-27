import React from 'react';
import { useParams } from 'react-router-dom';

import { useUpdateOutsideFeatureMutation, PimDetailsDocument } from 'api/types';
import { usePim } from 'app/pimDetails/usePim/usePim';

import { Garden } from './Garden';

export const GardenContainer = () => {
  const { id, featureId } = useParams<{ id: string; featureId: string }>();
  const [updateOutsideFeature] = useUpdateOutsideFeatureMutation();
  const pim = usePim();

  const feature = pim.outsideFeatures?.find(({ id }) => featureId === id);

  const handleSave = async (body: unknown) => {
    try {
      const { data } = await updateOutsideFeature({
        variables: {
          input: {
            pimId: id,
            outsideFeatureId: featureId,
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

  if (!feature) {
    return null;
  }

  return <Garden feature={feature} onSave={handleSave} />;
};
