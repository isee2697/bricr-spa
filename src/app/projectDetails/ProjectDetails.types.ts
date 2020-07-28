import { NcpGeneralQuery } from 'api/types';

export type ProjectDetailsProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type NcpProps = {
  ncp: NcpGeneralQuery | undefined;
};
