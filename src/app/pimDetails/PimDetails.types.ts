import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult, PimOverallInfoQuery } from 'api/types';
import { EntityType } from 'app/shared/entityType';

export type PimDetailsSectionProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
  title?: string;
  onAddAllocation?: () => void;
  isPurchased?: boolean;
};

export type PimDetailsProps = Pick<PimOverallInfoQueryHookResult, 'loading' | 'error' | 'data'> & {
  data?: PimOverallInfoQuery;
  objectTypeName?: string;
  breadcrumbs: ReactNode;
  path: string;
  entityType: EntityType;
  isPurchased?: boolean;
};
