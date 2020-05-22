import { Pim } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  pim?: Pim;
};

export type subMenuItem = {
  id: string;
  label: string;
  number?: number;
};
