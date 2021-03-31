import { CrmItem } from 'app/crm/Crm.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type DmsCrmsProps = {
  crms: CrmItem[];
  isLoading: boolean;
  pagination: PaginationProps;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
};
