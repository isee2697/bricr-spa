import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { CrmItem } from '../Crm.types';

export type BusinessesContainerProps = {
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: ActionTabStatus;
  onStatusChange: (status: ActionTabStatus) => void;
};

export type BusinessesProps = {
  crms: CrmItem[];
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: ActionTabStatus;
  onStatusChange: (status: ActionTabStatus) => void;
};
