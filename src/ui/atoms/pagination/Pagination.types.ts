import { PaginationProps as BasePaginationProps } from '@material-ui/lab/Pagination';

export type PaginationProps = BasePaginationProps & {
  currentPerPage?: number;
  perPageOptions?: number[] & 'All';
  onPerPageChange?: (value: number) => void;
};
