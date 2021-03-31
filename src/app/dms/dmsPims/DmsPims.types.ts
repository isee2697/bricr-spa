import { ListPimsQuery } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type DmsPimsProps = {
  pims: ListPimsQuery;
  type: string;
  isLoading: boolean;
  pagination: PaginationProps;
};

export type DmsPimsContainerProps = {
  type: string;
};
