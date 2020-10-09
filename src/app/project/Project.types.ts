import { ApolloError } from 'apollo-boost';
import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { BulkField, BulkOperations, ListNcp } from 'api/types';

export type ProjectProps = {
  type: string;
  onTypeChange: (type: string) => void;
  pricingType: string;
  onPricingTypeChange: (type: string) => void;
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  isLoading: boolean;
  isError: boolean;
  error: ApolloError | undefined;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData: ListNcp[];
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
  onOperation: (operation: BulkOperations, rojects: ListNcp[]) => Promise<undefined>;
  onBulkOpen: (projects: ListNcp[]) => void;
  bulkData: Record<string, string | string[]> | null;
  onBulk: (projects: ListNcp[], formData: Record<string, string | string[]>) => Promise<undefined>;
};

export type BulkForm = {
  operation: BulkField.City;
  City: string;
};
