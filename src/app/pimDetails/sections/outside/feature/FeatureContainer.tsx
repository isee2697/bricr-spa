import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useUpdateOutsideFeatureMutation, PimDetailsDocument } from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { usePim } from 'app/pimDetails/usePim/usePim';

import { FeatureContainerProps, AliasedFeatureConfiguration } from './Feature.types';
import { Feature } from './Feature';

export const FeatureContainer = ({ feature }: FeatureContainerProps) => {
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

  const configuration = feature.configuration as AliasedFeatureConfiguration;
  const initialValues = {
    ...feature,
    configuration: {
      ...configuration,
      types: configuration.garageTypes || configuration.storageTypes,
      insulations: configuration.garageInsulations || configuration.storageInsulations,
      services: configuration.garageServices || configuration.storageServices,
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
      <Feature id={feature.id} featureType={feature.type} />
    </AutosaveForm>
  );
};
