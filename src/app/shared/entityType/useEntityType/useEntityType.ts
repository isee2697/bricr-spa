import { useContext } from 'react';

import { EntityTypeContext } from '../entityTypeContext/EntityTypeContext';
import { EntityType } from '../EntityType.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { useEntityTypeProps } from './useEntityType.types';

const baseUrls = {
  [EntityType.Property]: AppRoute.pimDetails,
  [EntityType.Project]: AppRoute.projectDetails,
  [EntityType.ObjectType]: AppRoute.objectTypeDetails,
  [EntityType.LinkedProperty]: AppRoute.linkedPropertyDetails,
  [EntityType.CrmRelations]: AppRoute.crmRelationsDetails,
  [EntityType.CrmBusinesses]: AppRoute.crmBusinessesDetails,
  [EntityType.Task]: AppRoute.taskDetails,
  [EntityType.Dms]: AppRoute.dms,
  [EntityType.Sales]: AppRoute.sales,
  [EntityType.Email]: AppRoute.email,
  [EntityType.Insights]: AppRoute.insights,
};

export const useEntityType = (): useEntityTypeProps => {
  const entityType = useContext(EntityTypeContext);

  if (entityType === undefined) {
    throw new Error('EntityTypeContext is unavailable, make sure you are using EntityTypeProvider');
  }

  return {
    entityType,
    baseUrl: baseUrls[entityType],
  };
};
