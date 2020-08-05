import { SortDirection } from 'api/types';

export type Options = { [key: string]: SortingQuery };

export type SortingQuery = { sortColumn: string; sortDirection: SortDirection };
