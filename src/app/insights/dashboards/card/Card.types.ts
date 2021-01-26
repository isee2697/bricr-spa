import { ReactNode } from 'react';

export type DashboardCardProps = {
  children: ReactNode;
  id: string;
  onEdit: VoidFunction;
};
