import { CrmItem } from 'app/crm/Crm.types';

export type CrmRelationsDetailsSummaryProps = {
  crm: CrmItem;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
