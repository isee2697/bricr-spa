import React from 'react';
import { useParams } from 'react-router-dom';
import {
  usePimSpecificationQuery,
  LinkedPim,
  useUpdateDescriptionMutation,
  SectionWithDescriptionType,
  PimSpecificationDocument,
} from 'api/types';

import { LinkedProperty } from './LinkedProperty';

export const LinkedPropertyContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimSpecificationQuery({ variables: { id } });

  const [updateDescription] = useUpdateDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId: id,
            section: SectionWithDescriptionType.LinkedProperties,
          },
        },
        refetchQueries: [
          {
            query: PimSpecificationDocument,
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

  if (!data) return null;

  return (
    <LinkedProperty
      properties={data?.getPimSpecification.linkedProperties ?? ([] as LinkedPim[])}
      dateUpdated={data?.getPimSpecification.linkedPropertiesDateUpdated}
      updatedBy={data?.getPimSpecification.linkedPropertiesLastEditedBy}
      description={data?.getPimSpecification.linkedPropertiesDescription ?? ''}
      onDescriptionUpdate={onDescriptionUpdate}
    />
  );
};
