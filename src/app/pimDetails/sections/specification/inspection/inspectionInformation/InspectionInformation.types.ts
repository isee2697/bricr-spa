import { InspectionTypes } from '../inspectionType/InspectionType.types';

export type InspectionInformationProps = {
  type: InspectionTypes;
  onOpenInspectionModal: VoidFunction;
};
