import { DashboardStatsProps } from 'app/dashboard/dashboardStats/DashboardStats.types';

type statsType = { labelId: string; stats: DashboardStatsProps };

export type PimDashBoardProps = {
  data: statsType[];
};
