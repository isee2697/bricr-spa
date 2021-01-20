import { CrmStatus } from 'api/types';
import { CrmItem } from '../Crm.types';

export type RelationsContainerProps = {
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
};

export type RelationsProps = {
  crms: CrmItem[];
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
  onUpdateItemStatus: (id: string, status: CrmStatus) => Promise<void>;
  onDeleteItem: (id: string) => void;
};
