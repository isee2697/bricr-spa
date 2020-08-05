import { PaginationProps, PerPageType } from 'ui/atoms/pagination/Pagination.types';

export type UsePaginationType = ({
  itemsCount,
  perPageOptions,
}: {
  prefix?: string;
  itemsCount: number;
  perPageOptions: PerPageType[];
}) => { pagination: PaginationProps; query: PaginationQuery };

export type PaginationQuery = { from: number; limit: number | undefined };
