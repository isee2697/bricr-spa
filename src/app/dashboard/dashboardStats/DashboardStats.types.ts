type StatItem = {
  value: number;
  type: 'info' | 'warning' | 'error' | 'success';
};

export type DashboardStatsProps = {
  orders: StatItem;
  ordersValue: StatItem;
  visits: StatItem;
  properties: StatItem;
  emails: StatItem;
};
