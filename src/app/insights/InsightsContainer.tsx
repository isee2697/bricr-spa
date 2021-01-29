import React from 'react';

import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms';
import { EntityType } from 'app/shared/entityType';

import { Insights } from './Insights';

export const InsightsContainer = () => {
  const { formatMessage } = useLocale();
  const breadcrumbs = <NavBreadcrumb title={formatMessage({ id: 'header.links.insights' })} to={AppRoute.insights} />;

  return <Insights breadcrumbs={breadcrumbs} entityType={EntityType.Insights} path={AppRoute.insights} />;
};

export default InsightsContainer;
