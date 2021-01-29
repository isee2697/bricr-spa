import { Pim } from 'api/types';

export type PimTableFixedHeader = 'address' | 'houseNumber' | 'addition' | 'city';

export type PimTableMovableHeader =
  | 'propertyType'
  | 'status'
  | 'salePrice'
  | 'rentPrice'
  | 'attentionNote'
  | 'completeness';

export type PimTableHeaderCell = {
  field: PimTableFixedHeader | PimTableMovableHeader;
  label?: string;
  sortable?: boolean;
};

export type PimTableViewProps = {
  items: Pim[];
  onClick?: (id: string) => void;
  onArchive?: VoidFunction;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  selected: string[];
  onSelectItem: (id: string) => void;
  onSelectAllItems: VoidFunction;
};
