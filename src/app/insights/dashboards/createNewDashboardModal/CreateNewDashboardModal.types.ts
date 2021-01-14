import { DashboardType } from '../Dashboards.types';

export type CreateNewDashboardBody = {
  type: DashboardType;
  name: string;
};

export type CreateNewDashboardModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (payload: CreateNewDashboardBody) => Promise<boolean>;
};
