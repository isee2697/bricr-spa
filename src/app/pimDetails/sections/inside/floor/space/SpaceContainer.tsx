import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';
import createDecorator from 'final-form-calculate';

import { useUpdateSpaceMutation, PimInsideDocument, SpaceType, Space } from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { dateToYear, yearToDate } from 'form/fields';

import { SpaceProps, AliasedSpace } from './Space.types';
import { Space as SpaceComponent } from './Space';

const calculateSurface = ({ configuration }: Space) => {
  if (!!configuration?.measurement?.length && !!configuration?.measurement?.width) {
    return configuration?.measurement?.length * configuration?.measurement?.width;
  }
};

const calculateVolume = ({ configuration }: Space) => {
  if (
    !!configuration?.measurement?.length &&
    !!configuration?.measurement?.width &&
    !!configuration?.measurement?.height
  ) {
    return configuration?.measurement?.length * configuration?.measurement?.width * configuration?.measurement?.height;
  }
};

const decorator = createDecorator(
  {
    field: 'configuration.measurement.length',
    updates: {
      'configuration.measurement.surface': (value, allValues) => calculateSurface(allValues as Space),
      'configuration.measurement.volume': (value, allValues) => calculateVolume(allValues as Space),
    },
  },
  {
    field: 'configuration.measurement.width',
    updates: {
      'configuration.measurement.surface': (value, allValues) => calculateSurface(allValues as Space),
      'configuration.measurement.volume': (value, allValues) => calculateVolume(allValues as Space),
    },
  },
  {
    field: 'configuration.measurement.height',
    updates: {
      'configuration.measurement.volume': (value, allValues) => calculateVolume(allValues as Space),
    },
  },
);

export const SpaceContainer = ({ space, ...props }: SpaceProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateSpace] = useUpdateSpaceMutation();
  const hasConstructionYear = [SpaceType.Bathroom, SpaceType.Kitchen].includes(space.spaceType);

  const handleEdit = async (body: AnyObject) => {
    try {
      const { data } = await updateSpace({
        variables: {
          input: {
            pimId: id,
            spaceId: space.id,
            space: {
              ...body,
              configuration: {
                ...body.configuration,
                constructionYear: hasConstructionYear ? dateToYear(body.configuration?.constructionYear) : undefined,
              },
            },
          },
        },
        refetchQueries: [
          {
            query: PimInsideDocument,
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

  const configuration = space.configuration as AliasedSpace;

  const initialValues = {
    ...space,
    configuration: {
      ...space.configuration,
      constructionYear: hasConstructionYear ? yearToDate(space.configuration?.constructionYear) : undefined,
      type: configuration.kitchenType || configuration.livingRoomType,
      services: configuration.kitchenServices || configuration.bathroomServices,
      kitchenType: undefined,
      livingRoomType: undefined,
      kitchenServices: undefined,
      bathroomServices: undefined,
    },
  };

  return (
    <AutosaveForm
      initialValues={initialValues}
      onSave={handleEdit}
      mutators={{ ...arrayMutators }}
      subscription={{}}
      decorators={[decorator]}
    >
      <SpaceComponent space={space} {...props} />
    </AutosaveForm>
  );
};
