import { PimDetailsQueryHookResult } from 'api/types';

export type PimDetailsSectionProps = {
  isSidebarVisible: boolean;
  onOpenSidebar: VoidFunction;
  title?: string;
};

export type PimDetailsProps = Pick<PimDetailsQueryHookResult, 'loading' | 'error' | 'data'>;
