import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type MarketingNewLetterContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type MarketingNewLetterProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: MarketingNewsLetterItem[];
  onFilter: (filters: ListMarketingNewsLetterEventFilters) => void;
  activeFilters: ListMarketingNewsLetterEventFilters;
  sortColumn: string;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
  selectedItems: string[];
  onSelectItems: (key: string[]) => void;
};

export type MarketingNewsLetterItem = {
  id: string;
  name: string;
  sent: string;
  bounced: YesNo;
  opened: YesNo;
  event: MarketingNewsLetterEventType;
};

export enum MarketingNewsLetterEventType {
  ClickThrough = 'ClickThrough',
  FormFilledIn = 'FormFilledIn',
}

export enum YesNo {
  Yes = 'Yes',
  No = 'No',
}

export type ListMarketingNewsLetterEventFilters = {};
