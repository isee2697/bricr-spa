import { CrmType } from 'api/types';

export type CrmHeaderProps = {
  type: CrmType;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
