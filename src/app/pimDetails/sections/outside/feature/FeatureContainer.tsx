import React from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';

import { useUpdateOutsideFeatureMutation, PimOutsideDocument } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { FeatureContainerProps, AliasedFeatureConfiguration } from './Feature.types';
import { Feature } from './Feature';

export const FeatureContainer = ({ features }: FeatureContainerProps) => {
  const { id, featureId } = useParams<{ id: string; featureId: string }>();
  const [updateOutsideFeature] = useUpdateOutsideFeatureMutation();

  const feature = features.find(({ id }) => id === featureId);

  if (!feature) {
    return null;
  }

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
            query: PimOutsideDocument,
            variables: { id },
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

  const configuration = feature.configuration as AliasedFeatureConfiguration;
  const initialValues = {
    ...feature,
    configuration: {
      ...configuration,
      types: configuration?.garageTypes || configuration?.storageTypes,
      insulations: configuration?.garageInsulations || configuration?.storageInsulations,
      services: configuration?.garageServices || configuration?.storageServices,
      garageTypes: undefined,
      garageInsulations: undefined,
      garageServices: undefined,
      storageTypes: undefined,
      storageInsulations: undefined,
      storageServices: undefined,
    },
  };

  return (
    <AutosaveForm initialValues={initialValues} onSave={handleSave} mutators={{ ...arrayMutators }} subscription={{}}>
      <Feature feature={feature} />
    </AutosaveForm>
  );
};
