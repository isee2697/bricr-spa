import { GetObjectTypeGeneralQuery, NcpGeneralQuery } from 'api/types';

export type ObjectTypeDetailsProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type NcpObjectTypesProps = {
  ncp: NcpGeneralQuery | undefined;
  objectTypes: GetObjectTypeGeneralQuery | undefined;
};
