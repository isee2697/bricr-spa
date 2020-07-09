import { ListPimsQuery } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type PimProps = {
  type: string;
  onTypeChange: (type: string) => void;
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  isLoading: boolean;
  isError: boolean;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData?: ListPimsQuery;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
};
