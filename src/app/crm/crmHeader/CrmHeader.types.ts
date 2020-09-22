import { CrmType } from '../Crm.types';

export type CrmHeaderProps = {
  type: CrmType;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
