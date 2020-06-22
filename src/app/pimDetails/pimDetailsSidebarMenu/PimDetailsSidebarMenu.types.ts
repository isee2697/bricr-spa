import { Pim, PimServices, PimCadastre, PimInside } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  pim?: Pim;
  services?: PimServices;
  cadastre?: PimCadastre;
  inside?: PimInside;
};

export type SubMenuItem = {
  id: string;
  label: string;
  number?: number;
};
