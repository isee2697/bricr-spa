import { ObjectTypeOverallInfoQuery } from 'api/types';

export type ObjectTypeDetailsCommonProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type ObjectTypeDetailsProps = {
  data?: ObjectTypeOverallInfoQuery;
};
