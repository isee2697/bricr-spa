import { useContext } from 'react';

import { EntityTypeContext } from '../entityTypeContext/EntityTypeContext';

import { EntityType } from '..';

export const useEntityType = (): EntityType => {
  const entityType = useContext(EntityTypeContext);

  if (entityType === undefined) {
    throw new Error('EntityTypeContext is unavailable, make sure you are using EntityTypeProvider');
  }

  return entityType;
};
