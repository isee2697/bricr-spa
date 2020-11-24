export type SalesDashboardMetaHeaderProps = {
  item: SalesDashboardMetaItem;
};

export type SalesDashboardMetaItem = {
  label: string;
  count: number;
  percentage: number;
  status: 'success' | 'warning' | 'error';
};
