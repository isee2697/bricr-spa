import React from 'react';

import { useLocale } from 'hooks';
import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardsHeader } from './header/Header';

export const Dashboards = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.insights.dashboards' })}
        to={`${AppRoute.insights}/dashboards`}
      />
      <DashboardsHeader />
    </>
  );
};
