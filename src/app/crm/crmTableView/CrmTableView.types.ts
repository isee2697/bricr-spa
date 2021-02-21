import { ReactNode } from 'react';

import { CrmStatus } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/tableList/TableList.types';

export type CrmTableFixedHeader = 'firstName' | 'lastName';

export type CrmTableMovableHeader =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'partner'
  | 'manager'
  | 'property'
  | 'status'
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
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
  onDelete?: (id: string) => void;
  selected: string[];
  onSelectItem: (id: string) => void;
  onSelectAllItems: VoidFunction;
  pagination?: PaginationProps;
  renderAction?: (item: CrmItem) => ReactNode;
  sortOptions?: SortOption[];
  onSort?: (key: string) => void;
};
