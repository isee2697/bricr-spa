import { PimOverallInfoQuery } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  data?: PimOverallInfoQuery;
};

export type SubMenuItem = {
  id: string;
  label: string;
  number?: number;
};
