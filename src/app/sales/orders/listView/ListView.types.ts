import { Sales, SalesStatus } from 'api/types';

export type ListViewProps = {
  items: Sales[];
  status: SalesStatus;
  sortType: string;
  onChangeSortType: (sortType: string) => void;
};
