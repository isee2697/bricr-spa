import { ListPimsFilters } from 'api/types';

export type DmsViewType = 'detail' | 'table';
export type DmsViewTabsProps = {
  status: DmsViewType;
  onStatusChange: (status: DmsViewType) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  onAdd: (files: File[]) => void;
};
