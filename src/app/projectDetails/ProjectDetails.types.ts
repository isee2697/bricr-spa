import { NcpGeneralQuery, ListObjectTypesCountQuery } from 'api/types';

export type ProjectDetailsProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type NcpProps = {
  ncp: NcpGeneralQuery | undefined;
  count: ListObjectTypesCountQuery | undefined;
};
