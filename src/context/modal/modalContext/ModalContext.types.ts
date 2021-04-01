import { Layout } from 'react-grid-layout';

import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { Appointment, CrmType, ProjectType, PropertyType, SalesLabel } from 'api/types';
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
  salesLabel?: SalesLabel;
  salesItemOrderType?: string;
  insightDashboardNewType?: Layout;
  id?: number;
  appointment?: Appointment;
  surveyCategory?: SurveyCategory;
  surveyType?: SurveyType;
  availableSurveyTypes?: SurveyType[];
  crmType?: CrmType;
  name?: string;
};

export type ModalStateType = {
  id: string;
  isOpen: boolean;
  options?: ModalStateOptions;
};
