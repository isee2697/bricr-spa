import { CrmType } from '../Crm.types';

export type CrmSidebarMenuProps = {
  isVisible: boolean;
  onHide: () => void;
  type: CrmType;
  onTypeChange: (type: CrmType) => void;
};
