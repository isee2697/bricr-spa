import { CrmItem } from 'app/crm/Crm.types';

export type CrmRelationsDetailsDashboardProps = {
  crm: CrmItem;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
