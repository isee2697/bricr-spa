import { ListPim } from 'api/types';
import { SortingQuery } from 'hooks/useSorting/useSorting.types';
import { PaginationQuery } from 'hooks/usePagination/usePagination.types';

export type PimListItem = Pick<ListPim, 'id' | 'street' | 'houseNumber' | 'city' | 'postalCode'>;

export type LinkedPropertyForm = {
  linkedProperties?: string[];
};

export type LinkedPropertyModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: LinkedPropertyForm) => Promise<undefined | { error: boolean }>;
  pimList: PimListItem[];
  onAdd: () => void;
};

export type LinkedPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  refetchQueryVariables: SortingQuery & PaginationQuery;
};
