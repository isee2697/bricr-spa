import { ListNcp } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type DmsNcpsProps = {
  ncps: ListNcp[];
  type: string;
  isLoading: boolean;
  pagination: PaginationProps;
};

export type DmsNcpsContainerProps = {
  type: string;
};
