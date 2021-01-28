import { ReactNode } from 'react';

export type DashboardCardProps = {
  children: ReactNode;
  id: string;
  isUpdating?: boolean;
  onEdit: VoidFunction;
};
