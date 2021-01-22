import { CrmStatus } from 'api/types';
import { CrmItem } from '../Crm.types';

export type BusinessesContainerProps = {
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
};

export type BusinessesProps = {
  crms: CrmItem[];
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
};
