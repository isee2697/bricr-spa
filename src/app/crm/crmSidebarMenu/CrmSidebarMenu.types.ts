import { CrmType } from 'api/types';

export type CrmSidebarMenuProps = {
  isVisible: boolean;
  onHide: () => void;
  type: CrmType;
  onTypeChange: (type: CrmType) => void;
};
