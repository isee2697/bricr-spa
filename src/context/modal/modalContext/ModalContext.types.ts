import { Layout } from 'react-grid-layout';

import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { Appointment, CrmType, ProjectType, PropertyType } from 'api/types';
import { SalesItemType } from 'app/shared/addSalesItemModal/AddSalesItemModal.types';
import { SurveyCategory, SurveyType } from 'app/crmRelationsDetails/marketingSurvey/MarketingSurvey.types';

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
  propertyType?: PropertyType;
  projectType?: ProjectType;
  salesItemType?: SalesItemType;
  salesItemOrderType?: string;
  insightDashboardNewType?: Layout;
  id?: number;
  appointment?: Appointment;
  surveyCategory?: SurveyCategory;
  surveyType?: SurveyType;
  availableSurveyTypes?: SurveyType[];
  crmType?: CrmType;
};

export type ModalStateType = {
  id: string;
  isOpen: boolean;
  options?: ModalStateOptions;
};
