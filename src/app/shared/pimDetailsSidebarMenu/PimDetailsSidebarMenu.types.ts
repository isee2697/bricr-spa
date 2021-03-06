import { Picture, Pim } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  data?: Pim;
  objectTypeName?: string;
  allocateResultsNumber?: number;
  picture?: Picture;
  isPurchased?: boolean;
};

export type SubMenuItem = {
  id: string;
  title: string;
};

export type MessageFormat = {
  id: string;
};

export enum SideBarItemTypes {
  General,
  Inside,
  Outside,
  Cadastre,
  Services,
  Meters,
  Specification,
  Media,
  Commercial,
  Ground,
  Installations,
  Buildings,
  Animals,
}
