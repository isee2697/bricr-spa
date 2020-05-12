import { ListPimsQuery } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

import { PimTabsStatus } from './pimTabs/PimTabs.types';

export type PimProps = {
  type: string;
  onTypeChange: (type: string) => void;
  status: PimTabsStatus;
  onStatusChange: (type: PimTabsStatus) => void;
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
