import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ListPim, LastUpdatedProfile } from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';
import { SortingQuery } from 'hooks/useSorting/useSorting.types';
import { PaginationQuery } from 'hooks/usePagination/usePagination.types';

export type ObjectTypesProps = ProjectDetailsProps & {
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  isLoading: boolean;
  isError: boolean;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData: ListPim[];
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
  description: string;
  onDescriptionSave: (values: { description: string }) => Promise<undefined | { error: boolean }>;
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  showAddButton?: boolean;
  titleId: string;
  projectId: string;
  refetchQueryVariables: SortingQuery & PaginationQuery;
};
