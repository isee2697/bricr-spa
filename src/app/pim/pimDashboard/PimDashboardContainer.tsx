import React, { useState } from 'react';

import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { ListPimsFilters } from 'api/types';

import { PimDashboard } from './PimDashboard';

export const PimDashboardContainer = () => {
  const { formatMessage } = useLocale();

  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.pim' })} to={AppRoute.pim} />
      <NavBreadcrumb title={formatMessage({ id: `pim.dashboard_portfolio` })} to={`${AppRoute.pim}/dashboard`} />
    </>
  );

  return (
    <PimDashboard
      breadcrumbs={breadcrumbs}
      onFilter={filters => setActiveFilters(filters)}
      activeFilters={activeFilters}
    />
  );
};
