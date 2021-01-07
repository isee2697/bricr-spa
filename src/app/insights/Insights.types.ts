import { ReactNode } from 'react';

import { EntityType } from 'app/shared/entityType';

export type InsightsProps = {
  breadcrumbs: ReactNode;
  entityType: EntityType;
  path: string;
};

export type InsightsDashboardType = {
  id: string;
  title: string;
};

export type InsightsChartType = {
  id: string;
  title: string;
  count: number;
};
