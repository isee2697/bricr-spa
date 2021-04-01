import { ListPimsQuery } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type DmsPimsProps = {
  pims: ListPimsQuery;
  type: string;
  isLoading: boolean;
  pagination: PaginationProps;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
};

export type DmsPimsContainerProps = {
  type: string;
};
