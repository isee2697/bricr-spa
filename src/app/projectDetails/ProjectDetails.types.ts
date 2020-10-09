import { NcpGeneralOverallInfoQueryHookResult, NcpGeneralOverallInfoQuery } from 'api/types';

export type ProjectDetailsProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type NcpProps = Pick<NcpGeneralOverallInfoQueryHookResult, 'loading' | 'error' | 'data'> & {
  data?: NcpGeneralOverallInfoQuery;
};
