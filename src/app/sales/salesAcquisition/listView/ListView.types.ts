import { Sales, SalesStatus } from 'api/types';

export type ListViewProps = {
  items: Sales[];
  status: SalesStatus;
};
