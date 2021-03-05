import { GenderType } from 'api/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { MarketingOpenHouseResult } from '../marketingOpenHouse/MarketingOpenHouse.types';

export type MarketingOpenHouseOrganizedContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type MarketingOpenHouseOrganizedProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: MarketingOpenHouseOrganizedItem[];
  activeFilters: ListOpenHouseOrganizedFilters;
  onFilter: (filters: ListOpenHouseOrganizedFilters) => void;
  status: MarketingOpenHouseOrganizedStatus;
  onStatusChange: (status: MarketingOpenHouseOrganizedStatus) => void;
  pagination: PaginationProps;
  sortColumn: string;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  onBulkOpen: (projects: MarketingOpenHouseOrganizedItem[]) => void;
  bulkData: Record<string, string | string[]> | null;
  onBulk: (
    projects: MarketingOpenHouseOrganizedItem[],
    formData: Record<string, string | string[]>,
  ) => Promise<undefined>;
};

export type MarketingOpenHouseOrganizedItem = {
  id: string;
  name: string;
  gender: GenderType;
  result: MarketingOpenHouseResult;
  information: string;
};

export type ListOpenHouseOrganizedFilters = {};

export enum MarketingOpenHouseOrganizedStatus {
  Pending = 'Pending',
  Checked = 'Checked',
}
