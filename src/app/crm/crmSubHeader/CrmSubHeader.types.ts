import { ListPimsFilters } from 'api/types';

export type CrmSubHeaderProps = {
  viewMode: 'list' | 'table';
  setViewMode: (mode: 'list' | 'table') => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
};
