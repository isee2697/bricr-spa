import { ReactNode } from 'react';

import { CrmStatus, BulkOperations } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/tableList/TableList.types';
import { ActionModalAction } from 'ui/organisms/actionModal/ActionModal.types';
import { CrmItem } from '../Crm.types';

export type CrmTableFixedHeader = 'firstName' | 'lastName';

export type CrmTableMovableHeader =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'partners'
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
  renderDeleteTitle?: (item: CrmItem) => string;
  onBulk?: (selectedItems: CrmItem[], values: Record<string, string | string[]>) => Promise<undefined>;
  bulkActions?: ActionModalAction[];
  onBulkOpen?: (selectedItems: CrmItem[]) => void;
  bulkData?: Record<string, string | string[]> | null;
  bulkTitle?: string;
  bulkSubmitText?: string;
  onOperation?: (operation: BulkOperations, selectedItems: CrmItem[]) => Promise<undefined>;
};
