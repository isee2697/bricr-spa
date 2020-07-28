import { NcpGeneralQuery } from 'api/types';

export type ProjectDetailsSidebarMenuProps = {
  onHide: () => void;
  objectTypeNumber: number;
  ncp?: NcpGeneralQuery;
};
