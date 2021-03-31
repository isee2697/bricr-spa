import { DmsEntityType } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type FoldersContainerProps = {
  entityItems: DmsEntityItem[];
  entityType: DmsEntityType;
  type: string;
  isLoading: boolean;
  pagination: PaginationProps;
};

export type FoldersProps = FoldersContainerProps & {};

export type DmsEntityItem = {
  id: string;
  name: string;
};
