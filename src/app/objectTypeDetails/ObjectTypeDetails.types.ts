import { ObjectTypeOverallInfoQueryHookResult, ObjectTypeOverallInfoQuery } from 'api/types';

export type ObjectTypeDetailsCommonProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type ObjectTypeDetailsProps = Pick<ObjectTypeOverallInfoQueryHookResult, 'loading' | 'error' | 'data'> & {
  data?: ObjectTypeOverallInfoQuery;
};
