import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { FiltersTypes } from 'ui/molecules/filters/Filters.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type MarketingOpenHouseContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type MarketingOpenHouseProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: MarketingOpenHouseItem[];
  activeFilters: ListOpenHouseFilters;
  onFilter: (filters: ListOpenHouseFilters) => void;
  status: MarketingOpenHouseVisitStatus;
  onStatusChange: (status: MarketingOpenHouseVisitStatus) => void;
  pagination: PaginationProps;
  sortColumn: string;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  onBulkOpen: (projects: MarketingOpenHouseItem[]) => void;
  bulkData: Record<string, string | string[]> | null;
  onBulk: (projects: MarketingOpenHouseItem[], formData: Record<string, string | string[]>) => Promise<undefined>;
};

export type MarketingOpenHouseItem = {
  id: string;
  property: string;
  date: string;
  status: MarketingOpenHouseStatus;
  price: number;
  visitors?: number;
  checked?: number;
  result?: MarketingOpenHouseResult;
  visitStatus: MarketingOpenHouseVisitStatus;
};

export enum MarketingOpenHouseStatus {
  Checked = 'Checked',
  Pending = 'Pending',
}

export enum MarketingOpenHouseVisitStatus {
  Visited = 'Visited',
  Organized = 'Organized',
}

export enum MarketingOpenHouseResult {
  ThumbsUp = 'ThumbsUp',
  ThumbsDownn = 'ThumbsDown',
}

export type ListOpenHouseFilters = {};

export const OpenHouseFilters: FiltersTypes[] = [];

export enum YesNo {
  Yes = 'Yes',
  No = 'No',
}
