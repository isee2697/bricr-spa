import { ApolloError } from 'apollo-boost';
import { ListPimsQuery, PricingType } from 'api/types';
import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

import { ListPimsFilters } from './../../api/types';

export enum SelectPriceType {
  Sale = 'Sale',
  Rent = 'Rent',
  Both = 'Both',
}

export type PimProps = {
  type: string;
  onTypeChange: (type: string) => void;
  pricingType: PricingType | string;
  onPricingTypeChange: (type: PricingType | string) => void;
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
  isError: boolean;
  error: ApolloError | undefined;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData?: ListPimsQuery;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
};
