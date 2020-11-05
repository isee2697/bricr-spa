import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { ProjectType, PropertyType } from 'api/types';

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
};

export type ModalStateType = {
  id: string;
  isOpen: boolean;
  options?: ModalStateOptions;
};
