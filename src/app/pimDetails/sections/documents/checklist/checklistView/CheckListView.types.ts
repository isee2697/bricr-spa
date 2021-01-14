import { ListPimsFilters } from 'api/types';
import { DmsDocument } from 'app/dms/Dms.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type CheckListViewContainerProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
  path: string;
};

export type CheckListViewProps = {
  data: DmsDocument[];
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
  status: ActionTabStatus;
  onStatusChange: (status: ActionTabStatus) => void;
  activeFilters: ListPimsFilters;
  onFilter: (filters: ListPimsFilters) => void;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  path: string;
};
