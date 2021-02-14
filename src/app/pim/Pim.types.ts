import { ListPimsQuery, PimGeneral, Profile, Team } from 'api/types';
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
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
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
  teams: Team[];
  accountManagers: Profile[];
  onUpdatePim(values: PimGeneral): Promise<undefined | { error: boolean }>;
};
