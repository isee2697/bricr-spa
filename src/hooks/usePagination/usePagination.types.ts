import { PaginationProps, PerPageType } from 'ui/atoms/pagination/Pagination.types';

export type UsePaginationType = ({
  itemsCount,
  perPageOptions,
}: {
  itemsCount: number;
  perPageOptions: PerPageType[];
}) => { pagination: PaginationProps; query: { from: number; limit: number | undefined } };