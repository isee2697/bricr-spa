import React from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';

import { Sales } from './Sales';

export const SalesContainer = () => {
  return <Sales path={AppRoute.sales} entityType={EntityType.Sales} />;
};
