import { DmsEntityType, ListPimsFilters } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { DmsEntityItem } from '../folders/Folders.types';

export type PrimaryFolderProps = {
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
  isError: boolean;
  entityType: DmsEntityType;
  type: string;
  entityItems: DmsEntityItem[];
  pagination: PaginationProps;
};
