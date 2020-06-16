import { Pim, PimServices, PimCadastre } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  pim?: Pim;
  services?: PimServices;
  cadastre?: PimCadastre;
};

export type SubMenuItem = {
  id: string;
  label: string;
  number?: number;
};
