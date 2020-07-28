import { GetObjectTypeGeneralQuery, NcpGeneralQuery } from 'api/types';

export type ObjectTypeDetailsSidebarMenuProps = {
  onHide: VoidFunction;
  ncp?: NcpGeneralQuery;
  objectTypes?: GetObjectTypeGeneralQuery;
};
