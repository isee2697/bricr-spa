import { ListPimsFilters } from 'api/types';
import { DocumentListViewType, DocumentStatus } from '../General.types';

export type DocumentListViewProps = {
  status: DocumentStatus;
  onStatusChange: (status: DocumentStatus) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
  isError: boolean;
  documents?: DocumentListViewType[];
};
