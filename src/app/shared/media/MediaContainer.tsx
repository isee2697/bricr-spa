import React from 'react';
import { useParams } from 'react-router-dom';
import {
  NcpMediaDocument,
  NcpMediaQuery,
  ObjectTypeMediaDocument,
  ObjectTypeMediaQuery,
  PimMediaDocument,
  PimMediaQuery,
  SectionWithDescriptionType,
  useNcpMediaQuery,
  useObjectTypeMediaQuery,
  usePimMediaQuery,
  useUpdateDescriptionMutation,
  useUpdateNcpMediaDescriptionMutation,
  useUpdateObjectTypeMediaDescriptionMutation,
} from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { EntityType, useEntityType } from '../entityType';

import { usePicturesSorting } from './pictures/usePicturesSorting/usePicturesSorting';
import { Media } from './Media';

const getQuery = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Property:
      return usePimMediaQuery;
    case EntityType.LinkedProperty:
      return usePimMediaQuery;
    case EntityType.Project:
      return useNcpMediaQuery;
    case EntityType.ObjectType:
      return useObjectTypeMediaQuery;
    default:
      throw new Error('There is no such EntityType');
  }
};

export const MediaContainer = ({ isSidebarVisible, onSidebarOpen, ...props }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { sorting, query: sortQuery } = usePicturesSorting();
  const { entityType } = useEntityType();

  const useQuery = getQuery(entityType);
  const { data } = useQuery({ variables: { id, picturesSort: sortQuery }, fetchPolicy: 'network-only' });
  const [updateDescription] = useUpdateDescriptionMutation();
  const [updateNcpMediaDescription] = useUpdateNcpMediaDescriptionMutation();
  const [updateObjectTypeMediaDescription] = useUpdateObjectTypeMediaDescriptionMutation();

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

      if (entityType === EntityType.ObjectType) {
        updateObjectTypeMediaDescription({
          variables: {
            input: {
              id,
              description: body.description,
            },
          },
          refetchQueries: [{ query: ObjectTypeMediaDocument, variables: { id, picturesSort: sortQuery } }],
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
      media={
        (data as PimMediaQuery).getPimMedia ||
        (data as NcpMediaQuery).getNcpMedia ||
        (data as ObjectTypeMediaQuery).getObjectTypeMedia
      }
      description={
        (data as PimMediaQuery).getPimMedia?.description ||
        (data as NcpMediaQuery).getNcpMedia?.mediaDescription ||
        (data as ObjectTypeMediaQuery).getObjectTypeMedia?.mediaDescription ||
        ''
      }
      onDescriptionUpdate={onDescriptionUpdate}
      sorting={sorting}
      sortQuery={sortQuery}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
    />
  );
};
