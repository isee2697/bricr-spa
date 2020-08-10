import { ObjectTypeOverallInfoQuery } from 'api/types';

export type ObjectTypeDetailsSidebarMenuProps = {
  onHide: VoidFunction;
  isVisible: boolean;
  data?: ObjectTypeOverallInfoQuery;
};
