import { DmsEntityType } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type FoldersContainerProps = {
  entityItems: DmsEntityItem[];
  entityType: DmsEntityType;
  type: string;
  isLoading: boolean;
  pagination: PaginationProps;
  sorting?: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
};

export type FoldersProps = FoldersContainerProps & {};

export type DmsEntityItem = {
  id: string;
  name: string;
};
