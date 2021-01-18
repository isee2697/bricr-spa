import { CrmItem } from 'app/crm/Crm.types';

export type CrmRelationsDetailsSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  crm: CrmItem;
};
