import { useContext } from 'react';

import { EntityTypeContext } from '../entityTypeContext/EntityTypeContext';
import { EntityType } from '../EntityType.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { useEntityTypeProps } from './useEntityType.types';

const getBasicUrl = {
  [EntityType.Property]: AppRoute.pimDetails,
  [EntityType.Project]: AppRoute.projectDetails,
  [EntityType.ObjectType]: AppRoute.objectTypeDetails,
  [EntityType.LinkedProperty]: AppRoute.linkedPropertyDetails,
};

export const useEntityType = (): useEntityTypeProps => {
  const entityType = useContext(EntityTypeContext);

  if (entityType === undefined) {
    throw new Error('EntityTypeContext is unavailable, make sure you are using EntityTypeProvider');
  }

  return {
    entityType,
    baseUrl: getBasicUrl[entityType],
  };
};
