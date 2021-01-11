export type PimDashboardMetaHeaderProps = {
  item: PimDashboardMetaItem;
};

export type PimDashboardMetaItem = {
  label: string;
  count: number;
  percentage: number;
  status: 'success' | 'warning' | 'error';
};
