import { CrmStatus, ListPimsFilters } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { CrmItem } from '../Crm.types';

export type RelationsContainerProps = {
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
};

export type RelationsProps = {
  crms: CrmItem[];
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: CrmStatus;
  selectedItems: string[];
  onSelectItems: (key: string[]) => void;
  onStatusChange: (status: CrmStatus) => void;
  onUpdateItemStatus: (id: string, status: CrmStatus) => Promise<void>;
  onDeleteItem: (id: string) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  amounts?: {
    [CrmStatus.ActionRequired]: number;
    [CrmStatus.Active]: number;
    [CrmStatus.Inactive]: number;
  };
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
  bulkData: Record<string, string | string[]> | null;
  onBulkOpen: (projects: CrmItem[]) => void;
};
