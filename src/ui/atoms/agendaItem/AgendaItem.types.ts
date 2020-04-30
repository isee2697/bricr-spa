import { ReactNode } from 'react';

export type AgendaItemProps = {
  startDate: string;
  endDate?: string;
  isAllDay?: boolean;
  title: ReactNode;
};
