import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { useUpdateSpaceMutation, PimInsideDocument, SpaceType } from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { dateToYear, yearToDate } from 'form/fields';
import { measurementDecorator } from 'decorators/measurementDecorator';

import { SpaceProps, AliasedSpace } from './Space.types';
import { Space as SpaceComponent } from './Space';

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
                constructionYear: hasConstructionYear
                  ? dateToYear(body.configuration?.constructionYear) ?? undefined
                  : undefined,
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
      decorators={[measurementDecorator]}
    >
      <SpaceComponent space={space} {...props} />
    </AutosaveForm>
  );
};
