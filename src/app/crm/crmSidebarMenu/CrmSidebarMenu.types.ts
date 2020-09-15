import { CrmType } from '../Crm.types';

export type CrmSidebarMenuProps = {
  type: CrmType;
  onTypeChange: (type: CrmType) => void;
};
