import { ListPimsFilters } from 'api/types';
import { DocumentListViewType, DocumentStatus } from '../Documents.types';

export type DocumentListViewProps = {
  status: DocumentStatus;
  onStatusChange: (status: DocumentStatus) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
  isError: boolean;
  documents?: DocumentListViewType[];
};
