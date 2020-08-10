import { ReactNode } from 'react';

export type WorkflowSidebarItemProps = {
  type: WorkflowSidebarType;
  icon: ReactNode;
  title: string;
  searchValue: string;
};

export enum WorkflowSidebarType {
  TRIGGER = 'Trigger',
  ACTION = 'Action',
}
