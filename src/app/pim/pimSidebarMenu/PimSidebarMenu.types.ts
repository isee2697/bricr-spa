import { ReactNode } from 'react';

export type PimType = {
  name: string;
  icon: ReactNode;
  isProject?: boolean;
};
export type PimSidebarMenuProps = {
  types: PimType[];
};
