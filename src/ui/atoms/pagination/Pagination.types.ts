import { PaginationProps as BasePaginationProps } from '@material-ui/lab/Pagination';

export type PerPageType = number | 'All';

export type PaginationProps = BasePaginationProps & {
  currentPerPage?: PerPageType;
  perPageOptions?: PerPageType[];
  onPerPageChange?: (value: PerPageType) => void;
};
