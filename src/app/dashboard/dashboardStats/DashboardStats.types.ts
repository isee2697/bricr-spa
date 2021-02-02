export type StatItem = {
  value: number;
  type: 'info' | 'warning' | 'error' | 'success';
  optionalValue?: number;
};

export type DashboardStatsProps = {
  pims?: StatItem;
  crms?: StatItem;
  sales?: StatItem;
  emails?: StatItem;
  appointments?: StatItem;
  documents?: StatItem;
};
