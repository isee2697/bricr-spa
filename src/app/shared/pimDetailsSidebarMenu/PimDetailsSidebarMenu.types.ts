import { PimOverallInfoQuery } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  data?: PimOverallInfoQuery;
  objectTypeName?: string;
};

export type SubMenuItem = {
  id: string;
  title: string;
};
