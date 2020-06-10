import { InspectionTypes } from '../inspection/inspectionType/InspectionType.types';

export type AddInspectionModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  type: InspectionTypes;
  onAddCustomType: VoidFunction;
};
