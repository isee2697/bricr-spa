import { PimOverallInfoQuery } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  data?: PimOverallInfoQuery;
  objectTypeName?: string;
};

export type SubMenuItem = {
  id: string;
  title: string;
};
