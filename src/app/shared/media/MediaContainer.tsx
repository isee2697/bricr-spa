import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PimMediaDocument,
  NcpMediaDocument,
  SectionWithDescriptionType,
  usePimMediaQuery,
  useNcpMediaQuery,
  useUpdateDescriptionMutation,
  useUpdateNcpMediaDescriptionMutation,
  PimMediaQuery,
  NcpMediaQuery,
} from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { useEntityType, EntityType } from '../entityType';

import { usePicturesSorting } from './pictures/usePicturesSorting/usePicturesSorting';
import { Media } from './Media';

const getQuery = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Property:
      return usePimMediaQuery;
    case EntityType.Project:
      return useNcpMediaQuery;
    default:
      throw new Error('There is no such EntityType');
  }
};

export const MediaContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { sorting, query: sortQuery } = usePicturesSorting();
  const entityType = useEntityType();

  const useQuery = getQuery(entityType);
  const { data } = useQuery({ variables: { id, picturesSort: sortQuery }, fetchPolicy: 'network-only' });
  const [updateDescription] = useUpdateDescriptionMutation();
  const [updateNcpMediaDescription] = useUpdateNcpMediaDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      if (entityType === EntityType.Property) {
        updateDescription({
          variables: {
            input: {
              pimId: id,
              description: body.description,
              section: SectionWithDescriptionType.Media,
            },
          },
          refetchQueries: [{ query: PimMediaDocument, variables: { id, picturesSort: sortQuery } }],
        });
      }

      if (entityType === EntityType.Project) {
        updateNcpMediaDescription({
          variables: {
            input: {
              id,
              description: body.description,
            },
          },
          refetchQueries: [{ query: NcpMediaDocument, variables: { id, picturesSort: sortQuery } }],
        });
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (!data) {
    return null;
  }

  return (
    <Media
      {...props}
      media={(data as PimMediaQuery).getPimMedia || (data as NcpMediaQuery).getNcpMedia}
      description={
        (data as PimMediaQuery).getPimMedia?.description || (data as NcpMediaQuery).getNcpMedia?.mediaDescription || ''
      }
      onDescriptionUpdate={onDescriptionUpdate}
      sorting={sorting}
      sortQuery={sortQuery}
    />
  );
};
