import { CrmItem } from 'app/crm/Crm.types';

export type CrmTableFixedHeader = 'type' | 'insertion' | 'lastName' | 'property';

export type CrmTableMovableHeader = 'firstName' | 'email' | 'phoneNumber' | 'status' | 'partner' | 'manager';

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
};
