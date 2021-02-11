import { AllocatedProperty } from '../List.types';

export type AllocateResultsTableFixedHeader = 'name' | 'size' | 'rooms' | 'monthlyPrice';

export type AllocateResultsTableMovableHeader = 'properties' | 'allocated' | 'allocationBase';

export type AllocateResultsTableHeaderCell = {
  field: AllocateResultsTableFixedHeader | AllocateResultsTableMovableHeader;
  label?: string;
  sortable?: boolean;
};

export type AllocateResultsTableViewProps = {
  items: AllocatedProperty[];
  onClick?: (id: string) => void;
  onArchive?: VoidFunction;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  selected: string[];
  onSelectItem: (id: string) => void;
  onSelectAllItems: VoidFunction;
};
