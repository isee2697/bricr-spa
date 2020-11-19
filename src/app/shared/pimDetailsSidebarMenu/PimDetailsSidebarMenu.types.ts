import { PimOverallInfoQuery } from 'api/types';

export type PimDetailsSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  data?: PimOverallInfoQuery;
  objectTypeName?: string;
  allocateResultsNumber?: number;
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
