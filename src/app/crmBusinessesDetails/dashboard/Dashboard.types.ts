import { CrmItem } from 'app/crm/Crm.types';

export type CrmBusinessDetailsDashboardProps = {
  crm: CrmItem;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
