import { ListPimsFilters } from 'api/types';
import { DmsFolderType } from 'app/dms/Dms.types';

export type DmsPrimaryFolderProps = {
  id: string;
  name: string;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
  isError: boolean;
  foldersData?: DmsFolderType[];
  type: string;
};
