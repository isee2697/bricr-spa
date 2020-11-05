import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { BulkField, BulkOperations, ListNcp, ProjectType } from 'api/types';

export type ProjectProps = {
  type: ProjectType;
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  isLoading: boolean;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData: ListNcp[];
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
  onOperation: (operation: BulkOperations, rojects: ListNcp[]) => Promise<undefined>;
  onBulkOpen: (projects: ListNcp[]) => void;
  bulkData: Record<string, string | string[]> | null;
  onBulk: (projects: ListNcp[], formData: Record<string, string | string[]>) => Promise<undefined>;
};

export type BulkForm = {
  operation: BulkField.City;
  City: string;
};
