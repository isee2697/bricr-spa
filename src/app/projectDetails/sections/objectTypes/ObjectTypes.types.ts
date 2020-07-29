import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ListNcp } from 'api/types';

export type ObjectTypesProps = {
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  isLoading: boolean;
  isError: boolean;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData: ObjectTypeData[];
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
};

// @Todo remove this and add real data

export type ObjectTypeData = ListNcp;

export type ListObjectTypes = {
  listObjectTypes: ObjectTypeData[];
};
