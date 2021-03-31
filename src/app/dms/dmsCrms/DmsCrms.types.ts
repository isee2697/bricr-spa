import { CrmItem } from 'app/crm/Crm.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type DmsCrmsProps = {
  crms: CrmItem[];
  isLoading: boolean;
  pagination: PaginationProps;
};
