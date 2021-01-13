import { ReactNode } from 'react';

import { ListPimsFilters } from 'api/types';

export type PimDashBoardProps = {
  breadcrumbs: ReactNode;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
};
