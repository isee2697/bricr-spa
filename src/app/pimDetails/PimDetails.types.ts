import { PimOverallInfoQueryHookResult, PimOverallInfoQuery } from 'api/types';

export type PimDetailsSectionProps = {
  isSidebarVisible: boolean;
  onOpenSidebar: VoidFunction;
  title?: string;
};

export type PimDetailsProps = Pick<PimOverallInfoQueryHookResult, 'loading' | 'error' | 'data'> & {
  data?: PimOverallInfoQuery;
};
