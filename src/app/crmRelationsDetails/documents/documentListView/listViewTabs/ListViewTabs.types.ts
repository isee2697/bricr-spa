import { ListPimsFilters } from 'api/types';

export type DocumentListViewType = 'detail' | 'table';
export type ListViewTabsProps = {
  status: DocumentListViewType;
  onStatusChange: (status: DocumentListViewType) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  onAdd: (files: File[]) => void;
};
