import { ListPimsFilters } from 'api/types';

export type ListViewTabsProps = {
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  onAdd: (files: File[]) => void;
  isExpanded: boolean;
  onToggleExpand: VoidFunction;
};
