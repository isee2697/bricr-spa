import { ListCrmFilters } from 'api/types';

export type CrmSubHeaderProps = {
  viewMode: 'list' | 'table';
  setViewMode: (mode: 'list' | 'table') => void;
  onFilter: (filters: ListCrmFilters) => void;
  activeFilters: ListCrmFilters;
};
