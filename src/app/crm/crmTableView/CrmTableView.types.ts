import { CrmItem } from 'app/crm/Crm.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type CrmTableFixedHeader = 'type' | 'insertion' | 'lastName' | 'property';

export type CrmTableMovableHeader =
  | 'firstName'
  | 'email'
  | 'status'
  | 'phoneNumber'
  | 'partner'
  | 'manager'
  | 'property'
  | 'initials'
  | 'gender';

export type CrmTableHeaderCell = {
  field: CrmTableFixedHeader | CrmTableMovableHeader;
  label?: string;
  sortable?: boolean;
};

export type CrmTableViewProps = {
  items: CrmItem[];
  onClick?: (id: string) => void;
  onArchive?: VoidFunction;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  selected: string[];
  onSelectItem: (id: string) => void;
  onSelectAllItems: VoidFunction;
  pagination?: PaginationProps;
};
