import groupBy from 'lodash/groupBy';
import React from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';
import { FormRenderProps } from 'react-final-form';

import { useUpdateOutsideFeatureMutation, PimOutsideDocument, OutsideFeature, CuboidMeasurement } from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { calculateSurface, calculateVolume } from 'form/mutators/measurementMutators';

import { FeatureContainerProps, AliasedFeatureConfiguration } from './Feature.types';
import { Feature } from './Feature';

export const FeatureContainer = ({ features }: FeatureContainerProps) => {
  const { id, featureId } = useParams<{ id: string; featureId: string }>();
  const [updateOutsideFeature] = useUpdateOutsideFeatureMutation();

  const getCount = (item: OutsideFeature) => {
    const groupedSpaces = groupBy(features || [], items => items.type);
    let count: number | undefined;

    Object.values(groupedSpaces).flatMap(space =>
      space.forEach((spaceType, i) => {
        if (spaceType.id === item.id) {
          const numberOfSpaceTypeOccurence = groupedSpaces[spaceType.type].length;
          count = numberOfSpaceTypeOccurence > 1 ? numberOfSpaceTypeOccurence - i : undefined;
        }
      }),
    );

    return count;
  };

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
    <AutosaveForm
      key={featureId}
      initialValues={initialValues}
      onSave={handleSave}
      mutators={{
        ...arrayMutators,
        calculateSurface: (args, state, utils) => calculateSurface(state, utils),
        calculateVolume: (args, state, utils) => calculateVolume(state, utils),
      }}
    >
      {(form: FormRenderProps<CuboidMeasurement>) => (
        <Feature
          feature={feature}
          count={getCount(feature)}
          onDimensionChange={(field: string) => {
            if (field === 'configuration.measurement.height') {
              form.form.mutators.calculateVolume();
            } else {
              form.form.mutators.calculateSurface();
              form.form.mutators.calculateVolume();
            }
          }}
        />
      )}
    </AutosaveForm>
  );
};
