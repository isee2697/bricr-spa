import { BulkOperations, CrmStatus, ListCrmFilters } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { CrmItem } from '../Crm.types';

export type RelationsContainerProps = {
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
};

export type RelationsProps = {
  crms: CrmItem[];
  loading?: boolean;
  status: CrmStatus;
  selectedItems: string[];
  onSelectItems: (key: string[]) => void;
  onStatusChange: (status: CrmStatus) => void;
  onUpdateItemStatus: (id: string, status: CrmStatus) => Promise<void>;
  onFilter: (filters: ListCrmFilters) => void;
  activeFilters: ListCrmFilters;
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
  onOperation: (operation: BulkOperations, projects: CrmItem[]) => Promise<undefined>;
};
