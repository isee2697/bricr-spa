import { NcpGeneralInformationQuery } from 'api/types';

export type ProjectDetailsProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type NcpProps = {
  data?: NcpGeneralInformationQuery;
};
