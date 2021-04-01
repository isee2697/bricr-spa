import { Sales } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type DmsSalesProps = {
  sales: Sales[];
  isLoading: boolean;
  type: string;
  pagination: PaginationProps;
};

export type DmsSalesContainerProps = {
  type: string;
};
