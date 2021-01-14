import { Layout } from 'react-grid-layout';

import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { ProjectType, PropertyType } from 'api/types';
import { SalesItemType } from 'app/shared/addSalesItemModal/AddSalesItemModal.types';

export type ModalContextType = {
  modalsState: ModalStateType[];
  setModalsState: React.Dispatch<React.SetStateAction<ModalStateType[]>>;
};

export type ModalStateOptions = {
  propertyCategory?: PropertyCategory;
  availableTypes?: PropertyType[];
  projectId?: string;
  objectTypeId?: string;
  linkedPropertiesIds?: string[];
  disableChange?: boolean;
  isLinkedProperty?: boolean;
  projectType?: ProjectType;
  salesItemType?: SalesItemType;
  salesItemOrderType?: string;
  insightDashboardNewType?: Layout;
};

export type ModalStateType = {
  id: string;
  isOpen: boolean;
  options?: ModalStateOptions;
};
