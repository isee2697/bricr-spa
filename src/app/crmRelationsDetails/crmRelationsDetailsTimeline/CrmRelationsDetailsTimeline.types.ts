import { CrmItem } from '../../crm/Crm.types';

export type CrmRelationsDetailsTimelineProps = {
  crm: CrmItem;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
