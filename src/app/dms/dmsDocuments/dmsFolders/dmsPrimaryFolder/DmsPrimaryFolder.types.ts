import { TeamRight, ListPimsFilters } from 'api/types';
import { DmsFolderType } from 'app/dms/Dms.types';

export type DmsPrimaryFolderProps = {
  id: string;
  name: string;
  status: TeamRight;
  onStatusChange: (status: TeamRight) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
  isLoading: boolean;
  isError: boolean;
  foldersData?: DmsFolderType[];
};
